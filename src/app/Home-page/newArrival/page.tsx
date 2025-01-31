import { NewArrival } from "./clientside";
import { client } from "@/sanity/lib/client";

export interface Product {
  _id: string;
  name: string;
  image: string;
  originalPrice: number;
  discount?: number;
}

export default async function NewArrivalPage() {
  const data: Product[] = await client.fetch(
    `*[_type == "newArrival"] {
      _id,
      name,
      "image": image.asset->url,
      originalPrice,
      discount
    }`
  );

  return <NewArrival data={data} />;
}
  