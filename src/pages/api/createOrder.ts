// pages/api/createOrder.ts
import { NextApiRequest, NextApiResponse } from 'next';
import  { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
  useCdn: false, // Optional: Set to true for faster responses
  token: process.env.SANITY_API_TOKEN || '',
  apiVersion: '2023-01-01', // Directly here in the client config
});


export default async function createOrder(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { userDetails, cartItems, orderDate } = req.body;

      const order = {
        _type: 'order',
        userDetails,
        cartItems,
        orderDate,
      };

      await client.create(order);
      res.status(200).json({ message: 'Order created successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Failed to create order' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
