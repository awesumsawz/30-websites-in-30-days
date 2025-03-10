# Proxmox Infrastructure Management

This project contains infrastructure as code (IaC) for managing Proxmox virtual machines using:

- **Terraform** - For provisioning VMs in Proxmox
- **Ansible** - (Planned) For configuration management

## Project Structure

- `terraform/` - Contains Terraform configuration for provisioning Proxmox VMs
  - Provisions a VM with 2 CPUs, 4GB RAM, and 20GB storage

## Current Status and Known Issues

We've encountered a persistent bug in the telmate/proxmox Terraform provider (version 2.9.14) that causes a type conversion error:

```
panic: interface conversion: interface {} is string, not float64
```

This error occurs in the provider's code when it tries to convert a string value to a float64. We've tried several workarounds:

1. Using different provider versions (2.9.11, 2.7.4)
2. Using a VM ID instead of a template name
3. Using an ISO file instead of cloning from a template
4. Using the bpg/proxmox provider as an alternative

None of these approaches have been successful so far.

## Recommendations

1. **Report the bug to the provider maintainers**: The error is in the provider code itself, not in our configuration.

2. **Try the Bpg provider with the correct resource name**: We attempted to use the bpg/proxmox provider but used an incorrect resource name. The correct approach would be:
   ```hcl
   resource "proxmox_vm_qemu" "vm" {
     # Configuration here
   }
   ```

3. **Use the Proxmox API directly**: As a last resort, you could use the `local-exec` provisioner to call the Proxmox API directly using curl commands.

## Useful Scripts

We've created several utility scripts to help diagnose issues:

- `terraform/list-templates.sh` - Lists all VMs and templates in your Proxmox environment
- `terraform/list-isos.sh` - Lists available ISO files in your Proxmox storage

## Getting Started

See the README files in each directory for specific instructions:

- [Terraform README](terraform/README.md) - Instructions for VM provisioning

## Prerequisites

- Terraform installed (version 1.0.0 or higher)
- Access to a Proxmox server
- API token for the Proxmox server

## Secret Management Options

### Option 1: Using 1Password for API Token Secret

This project includes a script that retrieves only the API token secret from 1Password:

1. Install the 1Password CLI:
   ```bash
   # On macOS with Homebrew
   brew install 1password-cli
   ```

2. Sign in to your 1Password account:
   ```bash
   op signin
   ```

3. Make sure you have the following item in 1Password:
   - Item name: "Local Proxmox Knight"
   - Field: "credential" (contains your Proxmox API token secret)

4. Run Terraform commands using the script:
   ```bash
   ./terraform/run-terraform.sh init
   ./terraform/run-terraform.sh plan
   ./terraform/run-terraform.sh apply
   ```

5. If needed, edit `terraform/run-terraform.sh` to update:
   - PROXMOX_API_URL (currently: "http://bard.nevwork.net:8006")
   - PROXMOX_API_TOKEN_ID (currently: "Knight-Terraform")
   - Template name and other VM configuration values

### Option 2: Using Variable Files

If you prefer not to use 1Password:

1. Copy the example variables file:
   ```
   cp terraform/terraform.tfvars.example terraform/terraform.tfvars
   ```

2. Edit `terraform/terraform.tfvars` with your Proxmox server details

## Creating the API Token in Proxmox

1. Log in to the Proxmox web interface
2. Navigate to Datacenter -> Permissions -> API Tokens
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

The VM is set up with cloud-init and will obtain an IP address via DHCP by default. You can modify the network settings in `main.tf` if you need a static IP or additional network configurations.

## Notes

- The `pm_tls_insecure = true` setting bypasses TLS verification. For production environments, you should set up proper TLS certificates.
- This configuration uses a cloud-init template by default. If you're not using cloud-init, you may need to adjust the configuration. 