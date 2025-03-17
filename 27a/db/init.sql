-- Create extensions in template1 so they are available in all new databases
\c template1
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "citext";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- Create the database and set up permissions
GRANT ALL ON SCHEMA public TO current_user;

-- Create the application user with environment variables
DO $$
BEGIN
  CREATE USER :"POSTGRES_USER" WITH PASSWORD :'POSTGRES_PASSWORD';
EXCEPTION WHEN duplicate_object THEN
  RAISE NOTICE 'User already exists, skipping creation';
END
$$;

-- Create the database with the user as owner
DO $$
BEGIN
  CREATE DATABASE :"POSTGRES_DB" WITH OWNER = :"POSTGRES_USER";
EXCEPTION WHEN duplicate_database THEN
  RAISE NOTICE 'Database already exists, skipping creation';
END
$$;

-- Connect to the database and set up permissions
\c :POSTGRES_DB

-- Grant privileges
GRANT ALL ON SCHEMA public TO :"POSTGRES_USER"; 