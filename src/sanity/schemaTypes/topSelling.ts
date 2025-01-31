import { Rule } from 'sanity'; // Import Rule type from Sanity

const topSelling = {
  name: 'topSelling',
  title: 'Top Selling Product',
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
      name: 'originalPrice',
      title: 'Original Price',
      type: 'number',
      description: 'Enter the original price of the product.',
      validation: (Rule: Rule) => Rule.required().min(0), // Original price should be required and cannot be less than 0
    },
    {
      name: 'discount',
      title: 'Discount Percentage',
      type: 'number',
      description: 'Enter discount percentage (e.g. 20 for 20%).',
      validation: (Rule: Rule) => Rule.min(0).max(100).optional(), // Discount should be between 0 and 100, and is optional
    },
    
  ],
};

export default topSelling; // Export the schema as default
