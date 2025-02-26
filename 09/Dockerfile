FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and bun.lock
COPY package.json bun.lock ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Set environment variables for build time
ARG CONTENTFUL_SPACE_ID
ARG CONTENTFUL_ACCESS_KEY
ARG NEXT_PUBLIC_GA_ID
ARG URLSCAN_API_KEY

ENV CONTENTFUL_SPACE_ID=${CONTENTFUL_SPACE_ID}
ENV CONTENTFUL_ACCESS_KEY=${CONTENTFUL_ACCESS_KEY}
ENV NEXT_PUBLIC_GA_ID=${NEXT_PUBLIC_GA_ID}
ENV URLSCAN_API_KEY=${URLSCAN_API_KEY}

# Create .env.local file with environment variables
RUN echo "CONTENTFUL_SPACE_ID=${CONTENTFUL_SPACE_ID}" > .env.local && \
    echo "CONTENTFUL_ACCESS_KEY=${CONTENTFUL_ACCESS_KEY}" >> .env.local && \
    echo "NEXT_PUBLIC_GA_ID=${NEXT_PUBLIC_GA_ID}" >> .env.local && \
    echo "URLSCAN_API_KEY=${URLSCAN_API_KEY}" >> .env.local

# Build the Next.js application
RUN npm run build

# Expose the port the app will run on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
