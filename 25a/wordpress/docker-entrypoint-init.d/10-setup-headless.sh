#!/bin/bash
set -e

# Create mu-plugins directory if it doesn't exist
mkdir -p /var/www/html/wp-content/mu-plugins

# Run the post-install script in the background
/usr/local/bin/post-install.sh > /var/log/wp-setup.log 2>&1 &

echo "Headless WordPress setup initialized" 