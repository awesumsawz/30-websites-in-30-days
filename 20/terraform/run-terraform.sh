#!/bin/bash
set -e

# Check if 1Password CLI is installed
if ! command -v op &> /dev/null; then
    echo "1Password CLI is not installed. Please install it first."
    echo "On macOS: brew install 1password-cli"
    exit 1
fi

# Ensure we're logged into 1Password
if ! op account list &> /dev/null; then
    echo "Please log in to 1Password CLI first using: op signin"
    exit 1
fi

# Retrieve the secret from 1Password
echo "Retrieving Proxmox API token secret from 1Password..."
TOKEN_SECRET=$(op item get 'Local Proxmox Knight' --fields 'credential' --reveal)

# Verify we got the API token secret
if [ -z "$TOKEN_SECRET" ]; then
    echo "Failed to retrieve API token secret from 1Password."
    exit 1
fi

echo "Successfully retrieved credential from 1Password."

# Set Proxmox provider environment variables
export PM_API_URL="https://bard.nevwork.net:8006/api2/json"
export PM_API_TOKEN_ID="root@pam!Knight-Terraform"
export PM_API_TOKEN_SECRET="$TOKEN_SECRET"
export PM_TLS_INSECURE=true

# Set other Terraform variables
export TF_VAR_proxmox_node="proxmox"
export TF_VAR_template_name="105"  # Use the correct VM ID for ubuntu-test template
export TF_VAR_storage_pool="local-zfs"
export TF_VAR_vm_name="terraform-vm-$(date +%s)"

# Debug output
echo "Using the following configuration:"
echo "  API URL: $PM_API_URL"
echo "  API Token ID: $PM_API_TOKEN_ID"
echo "  TLS Insecure: $PM_TLS_INSECURE"
echo "  Proxmox Node: $TF_VAR_proxmox_node"
echo "  Template Name/ID: $TF_VAR_template_name"
echo "  Storage Pool: $TF_VAR_storage_pool"
echo "  VM Name: $TF_VAR_vm_name"

# Change to the Terraform directory if not already there
SCRIPT_DIR=$(dirname "$(realpath "$0")")
cd "$SCRIPT_DIR"

# Run the Terraform command passed as arguments
echo "Running Terraform with environment variables set..."

# If the command is "apply", add the auto-approve flag
if [ "$1" == "apply" ]; then
    terraform apply -auto-approve
elif [ "$1" == "destroy" ]; then
    terraform destroy -auto-approve
else
    terraform "$@"
fi 