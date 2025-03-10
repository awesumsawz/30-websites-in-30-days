variable "proxmox_api_url" {
  description = "The URL of the Proxmox API"
  type        = string
  default     = null # Will be set from environment variable PM_API_URL
}

variable "proxmox_api_token_id" {
  description = "The ID of the Proxmox API token"
  type        = string
  default     = null # Will be set from environment variable PM_API_TOKEN_ID
}

variable "proxmox_api_token_secret" {
  description = "The secret of the Proxmox API token"
  type        = string
  sensitive   = true
  default     = null # Will be set from environment variable PM_API_TOKEN_SECRET
}

variable "proxmox_node" {
  description = "The name of the Proxmox node"
  type        = string
}

variable "vm_name" {
  description = "The name of the VM to create"
  type        = string
}

variable "template_name" {
  description = "The VM ID of the template to clone from"
  type        = string
}

variable "storage_pool" {
  description = "The name of the storage pool to use"
  type        = string
  default     = "local-zfs"
} 