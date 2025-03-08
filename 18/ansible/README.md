# Ansible Playbook for Ubuntu Docker Setup

This playbook sets up a fresh Ubuntu server with Docker and security configurations.

## Prerequisites

1. Install Ansible on your host machine:
   - On macOS: `brew install ansible`
   - On Ubuntu: `sudo apt install -y ansible`
   - On other systems: [Ansible Installation Guide](https://docs.ansible.com/ansible/latest/installation_guide/index.html)

2. Ensure SSH access to your target server is configured.

## Running the Playbook on a Remote Server

1. **Edit the inventory file** (`inventory.ini`) with your server details:
   ```ini
   [aws_ubuntu_servers]
   vm_server ansible_host=YOUR_SERVER_IP ansible_user=YOUR_SSH_USER ansible_ssh_private_key_file=PATH_TO_YOUR_SSH_KEY
   ```

2. **Set up the vault password**:
   ```bash
   # Edit the vault password file
   echo "your_secure_password" > vault_password.txt
   chmod 600 vault_password.txt
   
   # Create and encrypt variables
   echo "vault_user_password: your_admin_password" > vars.yml
   ansible-vault encrypt vars.yml
   ```

3. **Run the playbook**:
   ```bash
   ansible-playbook launch/aws-ubuntu-docker.yml
   ```
   
   If you haven't set up the ansible.cfg file:
   ```bash
   ansible-playbook launch/aws-ubuntu-docker.yml -i inventory.ini --vault-password-file vault_password.txt
   ```

## Running the Playbook Locally

To run this playbook on the local machine instead:

```bash
# Update inventory.ini to use localhost
echo "[aws_ubuntu_servers]
localhost ansible_connection=local" > inventory.ini

# Run the playbook
ansible-playbook launch/aws-ubuntu-docker.yml
```

## What This Playbook Does

- Updates and upgrades the system
- Installs essential packages
- Configures timezone
- Sets up firewall (UFW) with specific allowed ports
- Configures fail2ban for SSH protection
- Sets up automatic security updates
- Installs Docker and Docker Compose
- Configures a new admin user with Docker permissions

## Customization

Edit the variables in the playbook to customize:
- Timezone
- User credentials
- SSH port
- Firewall rules

## Troubleshooting

- **SSH Connection Issues**: Ensure your SSH key has the correct permissions (`chmod 600 ~/.ssh/id_rsa`)
- **Python Errors**: Make sure Python is installed on the remote server
- **Privilege Errors**: Ensure your SSH user has sudo privileges on the remote server