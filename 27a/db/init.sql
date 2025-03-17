-- Create the nextjs database if it doesn't exist already
-- This is redundant because POSTGRES_DB environment variable already creates it
-- but keeping it here for completeness
CREATE DATABASE nextjs
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

-- Connect to the nextjs database
\c nextjs

-- Create extensions if needed
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "citext";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- Set up permissions
GRANT ALL PRIVILEGES ON DATABASE nextjs TO postgres; 