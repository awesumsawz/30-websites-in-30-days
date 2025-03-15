# Headless WordPress with Next.js in Docker

This project demonstrates a headless WordPress setup with a Next.js frontend, all containerized with Docker.

## Architecture

The setup consists of three main services:

1. **WordPress**: Serves as a headless CMS, exposing content via REST API
2. **MySQL**: Database for WordPress
3. **Next.js**: Frontend React application that consumes the WordPress REST API

## Prerequisites

- Docker and Docker Compose installed on your system
- Basic understanding of WordPress, Next.js, and Docker

## Getting Started

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Start the Docker containers:
   ```bash
   docker-compose up -d
   ```

3. Run the setup script (which installs WP-CLI and required plugins):
   ```bash
   chmod +x wp-setup.sh  # Make sure the script is executable
   ./wp-setup.sh
   ```
   
   If you encounter issues with the setup script, follow the instructions in `manual-setup.md`.

4. Access the services:
   - WordPress Admin: http://localhost:8080/wp-admin
     - Default username: `admin`
     - Default password: Set during the first run
   - Next.js Frontend: http://localhost:3000

## Initial WordPress Setup

The first time you start WordPress, you'll need to complete the installation through the web interface:

1. Visit http://localhost:8080 and complete the WordPress installation
2. The setup script will attempt to install the following plugins for better REST API support:
   - JWT Authentication for WP REST API
   - ACF to REST API
   - Advanced Custom Fields (if needed for custom fields)

If the automated installation fails, you can install these plugins manually through the WordPress admin interface.

## Development Workflow

### WordPress Development

- Add/edit content via the WordPress admin interface
- Create custom post types and fields as needed
- All content will be available via the REST API

### Next.js Development

- The Next.js application is configured to fetch data from the WordPress REST API
- Edit files in the `frontend` directory
- Changes will be reflected automatically with hot-reloading

## Customization

### WordPress Configuration

- WordPress configuration can be modified in the `docker-compose.yml` file
- Custom plugins or themes can be added to the `wordpress/wp-content` directory

### Next.js Configuration

- Next.js configuration is in the standard Next.js format
- API endpoints can be adjusted in the `frontend/lib/api.ts` file

## Troubleshooting

- **WP-CLI Installation**: The setup script attempts to install WP-CLI in the WordPress container. If this fails, you can install it manually or follow the manual setup process.
- **WordPress Plugins**: If plugin installation fails, install them through the WordPress admin interface.
- **Container Communication**: If the Next.js frontend can't connect to WordPress, check that both containers are running and the WordPress REST API is accessible.

For more troubleshooting steps, see `manual-setup.md`.

## Deployment

For production deployment:

1. Update environment variables in `docker-compose.yml` with production values
2. Use secure passwords and keys
3. Consider adding SSL/TLS with a reverse proxy
4. Build the Next.js application for production:
   ```bash
   docker-compose exec nextjs npm run build
   ```

## License

MIT 