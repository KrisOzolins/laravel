#!/bin/bash
set -e

# Any setup tasks
echo "Running entrypoint script..."

# Optimize Laravel app for production
php artisan optimize

# Execute the main process specified in the Dockerfile CMD
exec "$@"
