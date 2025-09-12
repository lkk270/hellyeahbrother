# Hell Yeah Brother Storefront

A minimal, modern e-commerce website built with Next.js, Tailwind CSS, shadcn/ui, Stripe, and Neon Database.

## Features

- **Minimal Design**: Clean, monochrome aesthetic with heavy whitespace
- **Two Products**: Trucker Hat and Hell-Yeah Button
- **Stripe Integration**: Secure checkout and payment processing
- **Cart Management**: Persistent cart with localStorage
- **SEO Optimized**: JSON-LD schema, meta tags, sitemap
- **Responsive**: Mobile-first design
- **Accessibility**: WCAG AA+ compliant
- **Cookie Policy**: GDPR-compliant cookie management

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Database**: Neon (PostgreSQL) + Drizzle ORM
- **Payments**: Stripe
- **Validation**: Zod
- **Icons**: Lucide React
- **Fonts**: Inter, IBM Plex Mono
- **Notifications**: Sonner

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Neon Database account
- Stripe account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hellyeahbrother
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env.local
```

4. Configure your environment variables in `.env.local`:
```env
# Database
DATABASE_URL="postgresql://username:password@ep-xxx.us-east-1.aws.neon.tech/neondb?sslmode=require"

# Stripe
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"
```

### Database Setup

1. Generate Drizzle migrations:
```bash
npm run db:generate
```

2. Push schema to database:
```bash
npm run db:push
```

3. Seed the database:
```bash
npm run seed
```

### Stripe Setup

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your API keys from the Stripe Dashboard
3. Set up webhook endpoints:
   - URL: `https://yourdomain.com/api/webhooks/stripe`
   - Events: `payment_intent.succeeded`, `checkout.session.completed`, `charge.refunded`

### Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Build the application:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── legal/             # Legal pages
│   ├── products/          # Product pages
│   └── ...
├── components/            # React components
│   └── ui/               # shadcn/ui components
├── hooks/                # Custom React hooks
├── lib/                  # Utilities and database
│   └── db/              # Database schema and connection
└── ...
```

## Database Schema

The application uses the following main tables:
- `customers` - Customer information
- `products` - Product catalog
- `orders` - Order management
- `order_items` - Order line items
- `returns` - Return requests
- `stripe_webhooks` - Webhook event tracking
- `audit_events` - System audit log

## API Routes

- `POST /api/create-payment-intent` - Create Stripe payment intent
- `POST /api/webhooks/stripe` - Handle Stripe webhooks

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | Neon database connection string | Yes |
| `STRIPE_PUBLISHABLE_KEY` | Stripe publishable key | Yes |
| `STRIPE_SECRET_KEY` | Stripe secret key | Yes |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook secret | Yes |
| `NEXT_PUBLIC_APP_URL` | Application URL | Yes |
| `NEXTAUTH_SECRET` | NextAuth secret key | Yes |

## Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- Render
- AWS Amplify

## Testing

Run the linter:
```bash
npm run lint
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email support@hellyeahbrother.com or visit our support page.