# Manual WordPress Headless Setup Guide

If you experience issues with the automated `wp-setup.sh` script, you can follow these manual steps to set up your headless WordPress:

## 1. Start the Docker containers

```bash
docker-compose up -d
```

## 2. Complete WordPress Installation

1. Visit http://localhost:8080 in your browser
2. Complete the WordPress installation wizard:
   - Set up a site title (e.g. "WordPress Headless")
   - Create an admin user and password
   - Confirm your email
   - Complete the installation

## 3. Install Required WordPress Plugins

Login to your WordPress admin dashboard (http://localhost:8080/wp-admin) and:

1. Go to "Plugins" > "Add New"
2. Search for and install the following plugins:
   - JWT Authentication for WP REST API
   - ACF to REST API
   - Advanced Custom Fields

3. Activate all installed plugins

## 4. Configure CORS for WordPress

1. Create/edit the `.htaccess` file in the WordPress root directory:

```
# BEGIN WordPress
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
# END WordPress

# Enable CORS for REST API
<IfModule mod_headers.c>
  SetEnvIf Origin "^(.*\.localhost|.*\.local|http://localhost:3000)$" CORS_ALLOW_ORIGIN=$0
  Header set Access-Control-Allow-Origin %{CORS_ALLOW_ORIGIN}e env=CORS_ALLOW_ORIGIN
  Header set Access-Control-Allow-Credentials "true"
  Header set Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS"
  Header set Access-Control-Allow-Headers "Authorization, Content-Type"
</IfModule>
```

## 5. Create Sample Content

1. Go to "Posts" > "Add New"
2. Create a post with:
   - Title: "Welcome to Headless WordPress"
   - Content: Add some sample content
   - Set Featured Image (optional)
3. Click "Publish"

## 6. Start the Next.js Frontend

1. Make sure the WordPress container is running
2. Check that the Next.js container is running:
   ```bash
   docker-compose ps
   ```
3. If needed, restart the containers:
   ```bash
   docker-compose restart
   ```
4. Visit http://localhost:3000 to see your headless WordPress site

## Troubleshooting

### If the Next.js frontend can't connect to WordPress:

1. Check that both containers are running:
   ```bash
   docker-compose ps
   ```

2. Verify the WordPress REST API is accessible:
   ```bash
   curl http://localhost:8080/wp-json/wp/v2/posts
   ```

3. Check the Next.js container logs:
   ```bash
   docker-compose logs nextjs
   ```

4. Check the WordPress container logs:
   ```bash
   docker-compose logs wordpress
   ```

### If WordPress plugins fail to install:

You may need to install them manually as described in step 3 above. 