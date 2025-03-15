#!/bin/bash
set -euo pipefail

# Wait for WordPress to start
echo "Waiting for WordPress to start..."
sleep 15

# Setup WordPress if needed
if [ ! -f /var/www/html/.wp-cli-installed ]; then
  echo "WordPress setup and configuration starting..."

  # Wait for the database connection
  for i in {1..30}; do
    if wp core is-installed --path=/var/www/html --allow-root; then
      echo "WordPress is installed and connected to the database."
      break
    fi
    echo "Waiting for WordPress database connection... ($i/30)"
    sleep 5
    if [ $i -eq 30 ]; then
      echo "Could not connect to WordPress database after multiple attempts."
      exit 1
    fi
  done

  # Install plugins if WordPress is ready
  if wp core is-installed --path=/var/www/html --allow-root; then
    echo "Installing WordPress plugins..."
    wp plugin install jwt-authentication-for-wp-rest-api --activate --path=/var/www/html --allow-root || true
    wp plugin install acf-to-rest-api --activate --path=/var/www/html --allow-root || true
    wp plugin install advanced-custom-fields --activate --path=/var/www/html --allow-root || true
    
    # Set permalink structure to post name
    wp rewrite structure '/%postname%/' --path=/var/www/html --allow-root
    
    # Create a sample post if it doesn't exist
    if ! wp post list --post_title="Welcome to Headless WordPress" --format=ids --path=/var/www/html --allow-root | grep -q "[0-9]"; then
      echo "Creating sample post..."
      wp post create --post_type=post \
        --post_title="Welcome to Headless WordPress" \
        --post_content="This is a sample post created for testing the headless WordPress setup with Next.js. This content is delivered via the WordPress REST API." \
        --post_status=publish --path=/var/www/html --allow-root
    fi
    
    # Mark setup as complete
    touch /var/www/html/.wp-cli-installed
    echo "WordPress setup completed successfully!"
  else
    echo "WordPress setup could not be completed automatically."
    echo "Please finish the setup at http://localhost:8080"
  fi
fi 