import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN || '',
  apiVersion: '2023-01-01',
});

export default async function createProduct(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, price, description, category, sale, newProduct, imageUrl } = req.body;

      const newProductData = {
        _type: 'product',
        name,
        price: parseFloat(price), // Ensure price is a number
        description,
        category,
        sale,
        newProduct,
        image: {
          _type: 'image',
          asset: {
            _ref: imageUrl,
            _type: 'reference',
          },
        },
      };

      await client.create(newProductData);

      res.status(200).json({ message: 'Product created successfully!' });
    } catch (err) {
      console.error('Error creating product:', err);
      res.status(500).json({ message: 'Failed to create product' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
