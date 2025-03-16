# PostgreSQL Docker Setup for Next.js Project

This directory contains Docker configuration files to set up a PostgreSQL database for your Next.js project.

## Connection Details

The PostgreSQL database is configured with the following settings:

- **Connection String**: `postgres://postgres:password@127.0.0.1:5432/nextjs`
- **Username**: `postgres`
- **Password**: `password`
- **Database**: `nextjs`
- **Port**: `5432`
- **Host**: `127.0.0.1` (localhost)

## How to Use

### Starting the Database

1. Make sure Docker and Docker Compose are installed on your system.
2. From the root of the project, run:
   ```bash
   cd db
   docker-compose up -d
   ```

This will start the PostgreSQL container in detached mode, allowing it to run in the background.

### Stopping the Database

```bash
cd db
docker-compose down
```

To remove all data volumes (which will **delete all database data**):

```bash
docker-compose down -v
```

### Accessing the Database

You can access the PostgreSQL database using any PostgreSQL client tool like:
- pgAdmin
- DBeaver
- TablePlus
- Datagrip
- psql (command line)

Use the connection details provided above.

### Database Logs

To view the database logs:

```bash
docker logs nextjs-postgres
```

## Database Persistence

Database data is stored in a Docker volume called `postgres_data`, which persists between container restarts.

## Initialization

The database is automatically initialized with:
- Extensions: uuid-ossp, citext, and pg_trgm
- Proper encodings and collations

You can modify the `init.sql` script to add more initialization steps if needed. 