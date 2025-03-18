# Theme 29

A modern Django starter theme with PostgreSQL database integration, designed for quick project setup.

## Features

- Django 5.1 framework
- PostgreSQL database integration
- Responsive Bootstrap 5 design
- Environment variable configuration
- Contact form with database storage
- Clean, organized project structure

## Requirements

- Python 3.8+
- PostgreSQL
- pip

## Installation

1. Clone the repository
2. Create and activate a virtual environment:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```
4. Configure your `.env` file with your database settings
5. Create the PostgreSQL database:
   ```
   createdb theme29_db  # Or use pgAdmin or another tool
   ```
6. Run migrations:
   ```
   python manage.py migrate
   ```
7. Create a superuser:
   ```
   python manage.py createsuperuser
   ```
8. Run the development server:
   ```
   python manage.py runserver
   ```

## Project Structure

```
theme29/
├── core/               # Main application
├── static/             # Static files (CSS, JS, images)
├── templates/          # HTML templates
├── theme29/           # Project settings
├── media/              # User uploaded files
├── venv/               # Virtual environment
├── .env                # Environment variables
└── manage.py           # Django management script
```

## Customization

Feel free to modify this theme to fit your needs. Key files to customize:

- `templates/base/base.html` - Main layout template
- `static/css/style.css` - Custom styles
- `static/js/main.js` - JavaScript functionality
- `core/models.py` - Data models
- `theme29/settings.py` - Project settings 