# !!! Atention !!!
# This is not an ideal Docker setup.
# Ideally I'd use separate services for each component (PHP-FPM, Nginx, Redis, etc.),
# but as this is just a simple and quick demo deployed on DO App platform,
# I used everything inside one container (leveraging Supervisor), apart from the database.
# todo: Setup Redis on a separate DO Droplet.

# Use the official PHP image as the base image
FROM php:8.3-fpm

# Set the working directory
WORKDIR /var/www

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    curl \
    libpq-dev \
    libonig-dev \
    nodejs \
    npm \
    nginx \
    supervisor \
    redis-server \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo pdo_pgsql mbstring exif pcntl bcmath gd

# Install Redis extension
RUN pecl install redis && docker-php-ext-enable redis

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy existing application directory contents
COPY . .

# Install node dependencies and build assets
RUN npm install ziggy-js && npm install && npm run build

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Configure nginx and supervisor
COPY nginx.conf /etc/nginx/nginx.conf
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Set Laravel permissions
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

# Set environment variables
# ENV DB_HOST=host.docker.internal

# Optimize Laravel
RUN php artisan optimize
RUN php artisan config:cache

# Expose port 8080 and start supervisord
EXPOSE 8080

# Start everything using Supervisor
CMD ["supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
