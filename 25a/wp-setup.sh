#!/bin/bash

# Exit on error
set -e

echo "WordPress Headless Setup Helper"
echo "==============================="

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
  echo "Error: Docker is not running or not installed."
  exit 1
fi

# Check if the services need to be built
if ! docker-compose ps | grep -q "wordpress"; then
  echo "Building and starting Docker containers..."
  docker-compose up -d --build
  
  echo "Containers are starting. Initial setup may take a few minutes."
  echo "The WordPress container will automatically install WP-CLI and required plugins."
  echo ""
  echo "You can check progress with: docker-compose logs -f wordpress"
else
  echo "Containers are already running."
  echo "To restart them use: docker-compose restart"
fi

echo ""
echo "Access your services at:"
echo "- WordPress Admin: http://localhost:8080/wp-admin"
echo "- Next.js Frontend: http://localhost:3000"
echo ""
echo "First time? Complete the WordPress setup by visiting http://localhost:8080"
echo "For manual setup instructions, see manual-setup.md" 