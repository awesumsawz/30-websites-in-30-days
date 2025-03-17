FROM postgres:15

# Add any additional PostgreSQL configurations if needed
COPY postgresql.conf /etc/postgresql/postgresql.conf

# Custom initialization scripts will be automatically run from /docker-entrypoint-initdb.d/
# in alphabetical order

# Health check to verify the database is ready
HEALTHCHECK --interval=10s --timeout=5s --start-period=10s --retries=3 \
  CMD pg_isready -U postgres || exit 1 