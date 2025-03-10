#!/bin/bash
set -e

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting Terraform and Ansible workflow...${NC}"

# Step 1: Change to the terraform directory and run Terraform
echo -e "${YELLOW}Step 1: Running Terraform to provision infrastructure...${NC}"
cd terraform
./run-terraform.sh

# Step 2: Extract the VM IP address from Terraform output
echo -e "${YELLOW}Step 2: Extracting VM IP address from Terraform output...${NC}"
VM_IP=$(terraform output -raw vm_ip)

if [ -z "$VM_IP" ]; then
    echo -e "${RED}Error: Could not get VM IP address from Terraform output${NC}"
    echo -e "${YELLOW}Note: This could happen if the VM is still booting and hasn't acquired an IP yet${NC}"
    echo -e "${YELLOW}You may need to wait a few minutes and run this script again${NC}"
    exit 1
fi

echo -e "${GREEN}VM provisioned with IP: $VM_IP${NC}"

# Step 3: Change to the project root directory
cd ..

# Step 4: Update Ansible inventory with the new VM IP
echo -e "${YELLOW}Step 3: Updating Ansible inventory with new VM IP...${NC}"

# Backup the original inventory
cp ansible/inventory.ini ansible/inventory.ini.bak

# Create a temporary file with the new VM data
cat > ansible/inventory.ini.new << EOF
[aws_ubuntu_servers]
# Previous entries are commented out
# vm_server ansible_host=10.0.20.181 ansible_user=awesumsawz ansible_ssh_private_key_file=/Users/jasonbiggs/.ssh/id_rsa.pub ansible_ssh_common_args='-o IdentitiesOnly=yes' # Local vm
# vm_server ansible_host=10.0.30.164 ansible_user=ubuntu ansible_ssh_private_key_file=/Users/jasonbiggs/.ssh/Knight.pem ansible_ssh_common_args='-o IdentitiesOnly=yes' # proxmox vm
vm_server ansible_host=$VM_IP ansible_user=ubuntu ansible_ssh_private_key_file=/Users/jasonbiggs/.ssh/Knight.pem ansible_ssh_common_args='-o IdentitiesOnly=yes'

[aws_ubuntu_servers:vars]
ansible_python_interpreter=/usr/bin/python3 
EOF

# Replace the inventory with the new one
mv ansible/inventory.ini.new ansible/inventory.ini

echo -e "${GREEN}Ansible inventory updated with new VM IP: $VM_IP${NC}"

# Step 5: Wait for SSH to become available
echo -e "${YELLOW}Step 4: Waiting for SSH to become available on the new VM...${NC}"
for i in {1..30}; do
    if ssh -o BatchMode=yes -o ConnectTimeout=5 -o StrictHostKeyChecking=no -i /Users/jasonbiggs/.ssh/Knight.pem ubuntu@$VM_IP echo "SSH connection successful" &> /dev/null; then
        echo -e "${GREEN}SSH connection established to $VM_IP${NC}"
        break
    fi
    echo "Waiting for SSH to become available... (attempt $i/30)"
    sleep 10
    if [ $i -eq 30 ]; then
        echo -e "${RED}Error: Could not establish SSH connection after 5 minutes.${NC}"
        echo -e "${YELLOW}You may need to check your VM's network configuration or try running Ansible manually later.${NC}"
        exit 1
    fi
done

# Step 6: Run Ansible
echo -e "${YELLOW}Step 5: Running Ansible playbooks...${NC}"
cd ansible
ansible-playbook launch-all.yml

echo -e "${GREEN}Terraform and Ansible workflow completed successfully!${NC}" 