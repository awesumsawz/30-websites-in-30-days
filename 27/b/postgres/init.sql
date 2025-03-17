-- The main database is already created by Docker from the POSTGRES_DB env var
-- Now we'll set up required extensions

-- Create extensions if needed
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "citext";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- Set up permissions (current_user will be the POSTGRES_USER from env var)
GRANT ALL PRIVILEGES ON DATABASE "${POSTGRES_DB}" TO current_user; 