// schemas/orders.js
export default {
  name: 'order',
  type: 'document',
  title: 'Orders',
  fields: [
    {
      name: 'userDetails',
      type: 'object',
      title: 'User Details',
      fields: [
        { name: 'name', type: 'string', title: 'Name' },
        { name: 'email', type: 'string', title: 'Email' },
        { name: 'phone', type: 'string', title: 'Phone' },
        { name: 'address', type: 'text', title: 'Address' },
      ],
    },
    {
      name: 'cartItems',
      type: 'array',
      title: 'Cart Items',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'productId', type: 'string', title: 'Product ID' },
            { name: 'name', type: 'string', title: 'Product Name' },
            { name: 'price', type: 'number', title: 'Price' },
            { name: 'quantity', type: 'number', title: 'Quantity' },
          ],
        },
      ],
    },
    { name: 'orderDate', type: 'datetime', title: 'Order Date' },
  ],
};
