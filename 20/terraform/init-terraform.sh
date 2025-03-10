#!/bin/bash
set -e

cd "$(dirname "$0")"
echo "Running terraform init..."
terraform init 