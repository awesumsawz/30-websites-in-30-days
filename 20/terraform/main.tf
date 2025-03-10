terraform {
  required_providers {
    proxmox = {
      source  = "telmate/proxmox"
      version = "2.9.14"
    }
  }
}

provider "proxmox" {
  # Provider will use PM_API_URL, PM_API_TOKEN_ID, PM_API_TOKEN_SECRET environment variables
  # No need to set these values here as they'll be picked up from the environment
}

resource "proxmox_vm_qemu" "vm" {
  name        = var.vm_name
  target_node = var.proxmox_node
  vmid        = 0  # Let Proxmox choose the next available ID
  
  # VM specifications
  cores   = 2
  sockets = 1
  memory  = 4096  # 4GB RAM
  
  # OS settings
  iso = "bulk_500:iso/ubuntu-24.04.1-live-server-amd64.iso"
  
  # Network settings
  network {
    model  = "virtio"
    bridge = "vmbr0"
  }
  
  # Disk settings
  disk {
    type    = "scsi"
    storage = var.storage_pool
    size    = "20G"
  }
  
  # Set to true to force creation of the VM
  force_create = true
  
  # Basic OS settings
  os_type = "l26"  # Linux 2.6+ kernel
} 