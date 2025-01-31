import { NextApiRequest, NextApiResponse } from 'next';
import formidable, { Fields, Files } from 'formidable';
import { createClient } from '@sanity/client';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false, // Disable the default body parser to handle file uploads manually
  },
};

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN || '',
  apiVersion: '2023-01-01',
});

export default async function uploadImage(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();

    form.parse(req, async (err: Error | null, fields: Fields, files: Files) => {
      if (err) {
        console.error('Error parsing form:', err);
        return res.status(500).json({ message: 'Failed to parse form data' });
      }

      try {
        const file = files.image && Array.isArray(files.image) ? files.image[0] : files.image;

        if (!file) {
          return res.status(400).json({ message: 'No image file uploaded' });
        }

        const asset = await client.assets.upload('image', fs.createReadStream(file.filepath), {
          filename: file.originalFilename || 'uploaded-image.jpg',
        });

        res.status(200).json({ assetId: asset._id, url: asset.url });
      } catch (err) {
        console.error('Error uploading to Sanity:', err);
        res.status(500).json({ message: 'Failed to upload image to Sanity' });
      }
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
