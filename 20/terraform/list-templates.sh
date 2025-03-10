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

# Set Proxmox API URL and credentials
PROXMOX_API_URL="https://bard.nevwork.net:8006/api2/json"
PROXMOX_API_TOKEN_ID="root@pam!Knight-Terraform"
PROXMOX_API_TOKEN_SECRET="$TOKEN_SECRET"

# List all VMs and templates
echo "Listing all VMs and templates in Proxmox..."
curl -s -k -H "Authorization: PVEAPIToken=$PROXMOX_API_TOKEN_ID=$PROXMOX_API_TOKEN_SECRET" \
     "$PROXMOX_API_URL/cluster/resources?type=vm" | jq '.data[] | {id: .vmid, name: .name, status: .status, template: .template}' 