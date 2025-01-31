import { Rule } from "sanity";
const newArrival = {
  name: 'newArrival',
  title: 'New Arrival',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: {
        hotspot: true,
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
      description: 'Enter the original price of the product in INR.',
      validation: (Rule: Rule) => Rule.min(0),
    },
    {
      name: 'discount',
      title: 'Discount (%)',
      type: 'number',
      description: 'Enter the discount percentage (optional).',
      validation: (Rule: Rule) => Rule.min(0).max(100),
    },
  ],
};

export default newArrival;
