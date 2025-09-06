# Hell Yeah Brother

A sleek, minimalist e-commerce website built with Next.js, shadcn/ui, and Tailwind CSS. Features a modern design inspired by high-end fashion brands with smooth animations and a clean aesthetic.

## Features

- 🎨 **Minimalist Design**: Clean, modern interface with smooth animations
- 🛍️ **Product Showcase**: Preorder functionality for hats and scarves
- 📱 **Responsive**: Mobile-first design that works on all devices
- 🎭 **Animations**: Framer Motion powered micro-interactions
- 🗄️ **Database**: Neon database integration for preorder management
- 📧 **Contact**: Instagram integration for customer communication

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Database**: Neon (PostgreSQL)
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Neon database account

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd hellyeahbrother
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your Neon database:
   - Create a new project at [Neon](https://neon.tech)
   - Copy your database URL to `.env.local`
   - The database schema will be created automatically

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# Neon Database
DATABASE_URL=your_neon_database_url_here

# Next.js
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Database Schema

The application automatically creates the following table:

```sql
CREATE TABLE preorders (
  id SERIAL PRIMARY KEY,
  product_id VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  size VARCHAR(20) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Project Structure

```
src/
├── app/
│   ├── api/preorder/     # API routes
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Hero section
│   ├── Logo.tsx          # Brand logo
│   ├── ProductCard.tsx   # Product display card
│   ├── ProductShowcase.tsx # Product grid
│   └── Footer.tsx        # Footer with Instagram link
└── lib/
    └── db.ts             # Database utilities
```

## Customization

### Brand Colors
Update the color scheme in `src/app/globals.css`:

```css
:root {
  --primary: 0 0% 9%;        /* Black */
  --secondary: 0 0% 96.1%;   /* Light gray */
  /* Add your brand colors */
}
```

### Products
Modify the products array in `src/components/ProductShowcase.tsx`:

```typescript
const products: Product[] = [
  {
    id: 'hat-001',
    name: 'Signature Hat',
    description: 'Your product description',
    price: '$89',
    image: '/images/hat.jpg',
    isNew: true
  },
  // Add more products
];
```

### Logo
Update the logo design in `src/components/Logo.tsx` to match your brand.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, contact us on Instagram: [@hellyeahbrother](https://instagram.com/hellyeahbrother)