# Jason Biggs Portfolio Website

A personal portfolio website built with Laravel, React, and Tailwind CSS.

## Technologies Used

- **Backend**: Laravel 10
- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Inertia.js
- **Database**: MySQL/SQLite

## Setup Instructions

### Prerequisites

- PHP 8.1+
- Composer
- Node.js 18+
- npm or pnpm

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/jason-biggs-com.git
   cd jason-biggs-com
   ```

2. Install PHP dependencies:
   ```
   composer install
   ```

3. Install JavaScript dependencies:
   ```
   npm install
   # or if using pnpm
   pnpm install
   ```

4. Create environment file:
   ```
   cp .env.example .env
   ```

5. Generate application key:
   ```
   php artisan key:generate
   ```

6. Configure your database in the `.env` file:
   ```
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=jason_biggs_com
   DB_USERNAME=root
   DB_PASSWORD=
   ```
   
   Alternatively, you can use SQLite for local development:
   ```
   DB_CONNECTION=sqlite
   # Comment out other DB_* variables
   ```
   
   Then create an empty SQLite database:
   ```
   touch database/database.sqlite
   ```

7. Run migrations and seed the database:
   ```
   php artisan migrate --seed
   ```

8. Build assets:
   ```
   npm run dev
   ```

9. Start the development server:
   ```
   php artisan serve
   ```

10. Visit `http://localhost:8000` in your browser.

## Directory Structure

The project follows the standard Laravel structure with React components located in the `resources/js` directory:

- `resources/js/components` - Reusable UI components
- `resources/js/layouts` - Layout components
- `resources/js/pages` - Page components used by Inertia.js

## Deployment

For production deployment:

1. Set appropriate environment variables in `.env`
2. Build production assets:
   ```
   npm run build
   ```
3. Configure your web server to point to the `public` directory

## License

This project is open-sourced software licensed under the [MIT license](LICENSE). 