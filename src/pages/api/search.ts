import { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../sanity/lib/client'; // Import Sanity client

// Define the structure of a product
interface Product {
  _id: string;
  name: string;
  image: string;
  price: number | null;
  discount?: number | null;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { query } = req.query; // Extract query from URL parameters

    if (!query || typeof query !== 'string') {
      return res.status(400).json({ message: 'Query parameter is missing or invalid' });
    }

    try {
      // Fetch products from Sanity based on the query
      const products: Product[] = await client.fetch(
        `*[_type == "AllProduct" && name match "${query}*"] { 
          _id,
          name,
          "image": image.asset->url,
          price,
          discount
        }`
      );

      return res.status(200).json(products); // Return the matching products
    } catch (error) {
      console.error('Error fetching products:', error);
      return res.status(500).json({ message: 'Error fetching products' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' }); // Handle non-GET requests
  }
}
