# Build stage
FROM oven/bun:latest
WORKDIR /app

# Copy package files
COPY package.json bun.lock ./

# Install dependencies and ESLint
RUN bun install
RUN bun add -d eslint eslint-config-next

# Copy source files
COPY . .

# Set environment variables
ENV NODE_ENV=development
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

EXPOSE 3000

# Use development mode instead of production build
CMD ["bun", "run", "dev"]