# Next.js Modern Web Application

A modern, full-stack web application built with Next.js 15, React 19, and TypeScript, featuring a beautiful UI powered by Tailwind CSS and Radix UI components.

## Features

- ⚡️ Next.js 15 with App Router
- 🎨 Modern UI with Tailwind CSS and Radix UI components
- 📱 Fully responsive design
- 🔒 Built-in contact form with email integration
- 🌙 Dark mode support
- 🔥 TypeScript for type safety
- 📦 Modern development workflow with Bun

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 20.x or later
- Bun (recommended) or npm
- Docker (for containerized deployment)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
# Using Bun (recommended)
bun install

# Using npm
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```
Edit `.env.local` and update the following variables:
- Configure your SMTP server details for the contact form
- Add any other required environment variables

4. Start the development server:
```bash
# Using Bun
bun dev

# Using npm
npm run dev
```

The application will be available at `http://localhost:3000`.

## Building for Production

### Local Build

```bash
# Using Bun
bun run build
bun start

# Using npm
npm run build
npm start
```

### Docker Build

1. Build the Docker image:
```bash
docker build -t your-app-name .
```

2. Run the container:
```bash
docker run -p 3000:3000 your-app-name
```

## Deployment

### AWS ECS Deployment

1. Push the image to Amazon ECR:
```bash
aws ecr get-login-password --region your-region | docker login --username AWS --password-stdin your-account-id.dkr.ecr.your-region.amazonaws.com
docker tag your-app-name:latest your-account-id.dkr.ecr.your-region.amazonaws.com/your-app-name:latest
docker push your-account-id.dkr.ecr.your-region.amazonaws.com/your-app-name:latest
```

2. Create an ECS task definition and service using the AWS Console or CLI.

## Contact Form Setup

To enable the contact form functionality:

1. Ensure you've copied `.env.local.example` to `.env.local`
2. Update the email configuration in `.env.local` with your SMTP server details:
   ```env
   SMTP_HOST=your-smtp-host
   SMTP_PORT=587
   SMTP_USER=your-smtp-username
   SMTP_PASSWORD=your-smtp-password
   ```
3. The contact form will be automatically enabled once the environment variables are set

## Development Notes

- The application uses Next.js App Router for routing
- Styling is handled through Tailwind CSS with custom configurations
- Components are built using Radix UI primitives for accessibility
- TypeScript is configured for type safety
- ESLint and Prettier are set up for code quality

## Project Structure

```
├── app/                # Next.js app directory
├── components/         # React components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and configurations
├── public/            # Static assets
├── styles/            # Global styles and Tailwind configurations
└── types/             # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Todo

- Implement blog functionality (currently blocked by redirect issues)
- Add more interactive components
- Enhance testing coverage

