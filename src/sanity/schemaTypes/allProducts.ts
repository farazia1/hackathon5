import { Rule } from 'sanity'; // Import Rule type from Sanity

const AllProduct = {
  name: 'AllProduct',
  title: 'All Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: {
        hotspot: true, // Allow hotspot cropping
      },
    },
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Enter the price of the product in INR.',
      validation: (Rule: Rule) => Rule.min(0), // Use the imported Rule type
    },
    {
      name: 'discount',
      title: 'Discount (%)',
      type: 'number',
      description: 'Enter the discount percentage (optional).',
      validation: (Rule: Rule) => Rule.min(0).max(100),
    },
    // Add category field to specify whether it's a Top Selling or New Arrival product
    {
      name: 'category',
      title: 'Product Category',
      type: 'array',
      of: [
        {
          type: 'string',
          title: 'Category',
          options: {
            list: [
              { title: 'Top Selling', value: 'top-selling' },
              { title: 'New Arrivals', value: 'new-arrival' },
              { title: 'All Products', value: 'all-products' },
            ],
          },
        },
      ],
    },
    {
      name: 'sale',
      title: 'On Sale',
      type: 'boolean',
      description: 'Check if the product is on sale',
      initialValue: false, // Default value to false
    },
    {
      name: 'new',
      title: 'New Product',
      type: 'boolean',
      description: 'Check if the product is new',
      initialValue: false, // Default value to false
    },
  ],
};

export default AllProduct; // Export the schema as default
