import { db } from './db';
import { products } from './db/schema';

async function seed() {
  console.log('🌱 Seeding database...');

  // Clear existing products
  await db.delete(products);

  // Insert products
  await db.insert(products).values([
    {
      slug: 'trucker-hat',
      title: 'Trucker Hat',
      description: 'Classic fit trucker hat. Because sometimes you need to look like you know what you\'re doing.',
      priceCents: 3500, // $35.00
      currency: 'usd',
      imageUrls: [
        '/products/trucker-hat-1.jpg',
        '/products/trucker-hat-2.jpg',
        '/products/trucker-hat-3.jpg'
      ],
      options: {
        colors: ['Black', 'Navy', 'White'],
        sizes: ['One Size']
      },
      inventoryQty: 100,
    },
    {
      slug: 'hell-yeah-button',
      title: 'Hell-Yeah Button',
      description: 'High-quality desk/fidget button that plays "Hell Yeah, Brother" when pressed. Sleeker and better designed than Staples\' "That Was Easy" button, with an on/off switch for when you need to be professional.',
      priceCents: 4500, // $45.00
      currency: 'usd',
      imageUrls: [
        '/products/hell-yeah-button-1.jpg',
        '/products/hell-yeah-button-2.jpg',
        '/products/hell-yeah-button-3.jpg'
      ],
      options: {
        colors: ['Black', 'Silver'],
        sizes: ['One Size']
      },
      inventoryQty: 50,
    }
  ]);

  console.log('✅ Database seeded successfully!');
}

seed().catch((error) => {
  console.error('❌ Error seeding database:', error);
  process.exit(1);
});
