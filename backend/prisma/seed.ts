import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      name: 'Wireless Headphones',
      price: 99.99,
      category: 'Electronics',
      variants: ['Black', 'White', 'Blue'],
      available: true,
      imageUrl: 'https://via.placeholder.com/300x200?text=Headphones',
    },
    {
      name: 'Smart Watch',
      price: 249.99,
      category: 'Electronics',
      variants: ['Black', 'Silver', 'Gold'],
      available: true,
      imageUrl: 'https://via.placeholder.com/300x200?text=Smart+Watch',
    },
    {
      name: 'Running Shoes',
      price: 129.99,
      category: 'Sports',
      variants: ['Size 8', 'Size 9', 'Size 10', 'Size 11'],
      available: true,
      imageUrl: 'https://via.placeholder.com/300x200?text=Running+Shoes',
    },
    {
      name: 'Coffee Maker',
      price: 79.99,
      category: 'Home & Kitchen',
      variants: ['Black', 'Silver'],
      available: true,
      imageUrl: 'https://via.placeholder.com/300x200?text=Coffee+Maker',
    },
    {
      name: 'Yoga Mat',
      price: 39.99,
      category: 'Sports',
      variants: ['Purple', 'Blue', 'Green'],
      available: true,
      imageUrl: 'https://via.placeholder.com/300x200?text=Yoga+Mat',
    },
    {
      name: 'Bluetooth Speaker',
      price: 59.99,
      category: 'Electronics',
      variants: ['Black', 'White', 'Red'],
      available: false,
      imageUrl: 'https://via.placeholder.com/300x200?text=Speaker',
    },
  ];

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }

  console.log('Database seeded successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
