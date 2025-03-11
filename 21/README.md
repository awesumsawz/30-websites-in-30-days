bun install
bun run build
bun dev

## Contact Form Setup

To enable the contact form functionality:

1. Copy `.env.local.example` to `.env.local`
2. Update the email configuration in `.env.local` with your SMTP server details
3. Uncomment the email sending code in `app/api/contact/route.ts`

todo:
implement a blog
- this is currently blocked by redirects away from the blog componentsw

