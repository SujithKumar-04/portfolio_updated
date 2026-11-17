#!/usr/bin/env bash
# Build script used by Render for the backend.
set -o errexit

pip install -r requirements.txt
python manage.py collectstatic --no-input
python manage.py migrate
python manage.py seed_portfolio --if-empty
# Creates the admin user only if DJANGO_SUPERUSER_* variables are set (ignored if it already exists).
python manage.py createsuperuser --noinput || true
