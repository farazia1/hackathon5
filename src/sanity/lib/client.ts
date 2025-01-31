import { createClient } from 'next-sanity';

// Optional: Log environment variables
// console.log('Sanity Projec:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
// console.log('Sanity Dataset:', process.env.NEXT_PUBLIC_SANITY_DATASET);
// console.log('Sanity Token:', process.env.SANITY_API_TOKEN);

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '', // Sanity Project ID from .env
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '', // Dataset from .env
  apiVersion: '2024-02-13',
  useCdn: false, // Optional: Set to true if you want faster response times
  token: process.env.SANITY_API_TOKEN || '', // Sanity API Token from .env
});
