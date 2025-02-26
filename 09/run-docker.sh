#!/bin/bash

# Check if .env.local exists and copy it to .env if it does
if [ -f .env.local ]; then
  echo "Copying .env.local to .env for Docker..."
  cp .env.local .env
else
  echo "Warning: .env.local file not found. Creating .env file..."
  cat > .env << EOL
CONTENTFUL_SPACE_ID=jeyuhfjb7lj9
CONTENTFUL_ACCESS_KEY=eQePbbipiI0O9npFhwB73a-HmsusqmkabxEn30fQwh0
NEXT_PUBLIC_GA_ID=G-BZ0SP64XRV
URLSCAN_API_KEY=747babf6-c413-4d2d-a603-ffa1d86d441a
EOL
fi

# Build and run the Docker container
echo "Building and starting the Next.js application with Docker..."
docker-compose down
docker-compose build --no-cache
docker-compose up -d

echo "Application is running at http://localhost:3000"
echo "To view logs: docker-compose logs -f"
echo "To stop: docker-compose down" 