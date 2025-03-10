# Proxmox VM Terraform Configuration

This Terraform configuration creates a virtual machine in Proxmox with the following specifications:
- 2 CPU cores
- 4GB RAM
- 20GB disk space

## Prerequisites

- Terraform installed (version 1.0.0 or higher)
- Access to a Proxmox server
- API token for the Proxmox server

## Secret Management Options

### Option 1: Using 1Password (Recommended)

This project includes a script `run-terraform.sh` that fetches credentials from 1Password and sets them as environment variables for Terraform.

1. Ensure you have 1Password CLI installed and are signed in
2. Create an item in 1Password named "Local Proxmox Knight" with the following fields:
   - credential: Your Proxmox API token secret
3. Run Terraform commands using the script:
   ```bash
   ./run-terraform.sh init
   ./run-terraform.sh plan
   ./run-terraform.sh apply
   ```

### Option 2: Using Variable Files

1. Copy the example variables file:
   ```
   cp terraform.tfvars.example terraform.tfvars
   ```

2. Edit `terraform.tfvars` with your Proxmox server details:
   - Update `proxmox_api_url` with your Proxmox server URL
   - Set `proxmox_api_token_id` and `proxmox_api_token_secret` with your API token
   - Set `proxmox_node` to the name of your Proxmox node
   - Set `template_name` to the name of an existing template or VM to clone from
   - Update other variables as needed

## Creating the API Token in Proxmox

1. Log in to the Proxmox web interface
2. Navigate to Datacenter → Permissions → API Tokens
3. Click "Add" to create a new token
4. Select a user, enter a token ID, and decide whether to grant privileges
5. Click "Add" and make sure to save both the token ID and secret

## Usage

Initialize Terraform:
```
terraform init
```

Preview the changes:
```
terraform plan
```

Apply the configuration:
```
terraform apply
```

To destroy the VM:
```
terraform destroy
```

## Additional Configuration

The VM is set up with a Ubuntu 24.04 server ISO by default. You can modify the configuration in `main.tf` to change the ISO, network settings, or disk configuration.

## Notes

- The `PM_TLS_INSECURE=true` setting bypasses TLS verification. For production environments, you should set up proper TLS certificates.
- If you encounter issues with the Proxmox provider, try using the helper scripts `list-templates.sh` and `list-isos.sh` to verify your Proxmox environment. 