FROM wordpress:latest

# Install dependencies
RUN apt-get update && apt-get install -y \
    less \
    curl \
    sudo \
    && rm -rf /var/lib/apt/lists/*

# Install WP-CLI
RUN curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar \
    && chmod +x wp-cli.phar \
    && mv wp-cli.phar /usr/local/bin/wp \
    && wp --info

# Create mu-plugins directory
RUN mkdir -p /usr/src/wordpress/wp-content/mu-plugins

# Set up post-install script
COPY post-install.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/post-install.sh

# Add script to run setup through official WordPress entrypoint hooks
COPY docker-entrypoint-init.d/ /docker-entrypoint-init.d/
RUN chmod +x /docker-entrypoint-init.d/*.sh 