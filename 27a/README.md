# ThinkBigg Development Environment

This repository contains a Docker Compose setup for running the ThinkBigg application along with its database.

## Components

1. **PostgreSQL Database**: A PostgreSQL 15 database with initialized tables and data
2. **Next.js Application**: The ThinkBigg web application built with Next.js and Payload CMS

## Prerequisites

- Docker and Docker Compose installed on your system
- Git (to clone this repository)

## Getting Started

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Configure environment variables (optional):
   - The default configuration is in the `.env` file
   - You can modify these values if needed

3. Build and start the containers:
   ```bash
   docker-compose up -d
   ```

4. Access the application:
   - Next.js app: http://localhost:3000
   - PostgreSQL database: localhost:5432 (connect using your database client)

5. Stop the containers:
   ```bash
   docker-compose down
   ```

## Environment Variables

The main environment variables are stored in the `.env` file:

- `POSTGRES_USER`: Database username
- `POSTGRES_PASSWORD`: Database password
- `POSTGRES_DB`: Database name
- `PAYLOAD_SECRET`: Secret key for Payload CMS

## Directory Structure

- `/db`: Contains PostgreSQL configuration and initialization scripts
- `/thinkbigg-dev`: Contains the Next.js application code

## Troubleshooting

- If the Next.js container fails to connect to the database, ensure the PostgreSQL container is fully initialized. The `depends_on` with healthcheck should handle this automatically.
- Check the logs for any errors:
  ```bash
  docker-compose logs postgres
  docker-compose logs nextjs
  ```

## Development Workflow

For local development:

1. Run `docker-compose up -d postgres` to start only the database
2. Navigate to the `thinkbigg-dev` directory and run your Next.js app locally:
   ```bash
   cd thinkbigg-dev
   npm install
   npm run dev
   ```

This approach allows for hot reloading and faster development while still using the containerized database. 