// schemas/index.js
import { type SchemaTypeDefinition } from 'sanity'
import newArrival from './newArrival'
import topSelling from './topSelling'
import AllProduct from './allProducts'
import order from './orders'  // Import order schema

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [newArrival, topSelling, AllProduct, order],  // Add order schema here
}
