import { TopSellingClient } from "@/app/Home-page/topSelling/clientside";
import { client } from "@/sanity/lib/client";

export interface Product {
  _id: string;
  name: string;
  image: string;
  originalPrice: number;
  discount?: number; // Discount optional ho sakti hai
}

export default async function TopSelling() {
  // Fetch data from Sanity
  const data: Product[] = await client.fetch(
    `*[_type == "topSelling"] {
      _id,
      name,
      "image": image.asset->url,
      originalPrice,
      discount
    }`
  );
 
  return <TopSellingClient data={data} />;
}
