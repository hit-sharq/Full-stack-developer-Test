import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.get('/', async (req: Request, res: Response) => {
  try {
    const { category } = req.query;

    let products;
    if (category && typeof category === 'string') {
      products = await prisma.product.findMany({
        where: { category },
      });
    } else {
      products = await prisma.product.findMany();
    }

    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, price, category, variants, available, imageUrl } = req.body;

    if (!name || !price || !category) {
      return res.status(400).json({ error: 'Name, price, and category are required' });
    }

    const product = await prisma.product.create({
      data: {
        name,
        price: parseFloat(price),
        category,
        variants: variants || [],
        available: available !== undefined ? available : true,
        imageUrl,
      },
    });

    res.status(201).json(product);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Failed to create product' });
  }
});

export default router;
