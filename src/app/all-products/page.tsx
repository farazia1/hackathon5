"use client";

import React, { useEffect, useState } from "react";
import StarRating from "@/app/component/starRating/Rating";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

interface Product {
  _id: string;
  name: string;
  image: string;
  price: number | null;
  discount?: number | null;
  sale?:boolean;
  new?:boolean;
}

export default function AllProduct() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Product[] = await client.fetch(
          `*[_type == "AllProduct"][0...100] {
            _id,
            name,
            "image": image.asset->url,
            price,
            discount,
            sale,
            new
          }`
        );
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleRatingChange = (newRating: number, productId: string) => {
    console.log(`Product ID: ${productId}, New rating selected: ${newRating}`);
  };

  const calculateDiscountedPrice = (
    price: number | null,
    discount?: number | null
  ): number | null => {
    if (!price || price <= 0) return null;
    if (!discount || discount <= 0) return price;
    return price - (price * discount) / 100;
  };

  const handleAddToCart = (product: Product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "{}"); // Parse as object
    const updatedCart = {
      ...cart,
      [product._id]: {
        ...(cart[product._id] || {}),
        name: product.name,
        price: product.price || 0,
        quantity: (cart[product._id]?.quantity || 0) + 1,
        image: product.image,
      },
    };
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.name} added to cart!`);
  };

  if (loading) {
    return <p className="text-gray-500">Loading products...</p>;
  }

  if (products.length === 0) {
    return <p className="text-gray-500">No products found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mx-auto p-4">
      {products.map((product: Product) => {
        const discountedPrice = calculateDiscountedPrice(
          product.price,
          product.discount
        );

        return (
          <div key={product._id} className="p-4 max-w-sm ">
            <Link href={`/all-products/${product._id}`} passHref>
           
           <div className="relative">

           <div className="absolute pl-3 pt-3">

{product.sale && <span className="bg-red-500 text-white p-1 rounded">Sale</span>}
           {product.new && <span className="bg-green-500 text-white p-1 rounded">new</span>}
</div>

              {product.image ? (
                
                <Image
                src={product.image}
                  alt={product.name || "Product Image"}
                  width={300}
                  height={300}
                  className="rounded-md object-cover"
                  />
                ) : (
                  <p className="text-red-500">No image available</p>
                )}

                </div>
            </Link>

            <Link href={`/products/${product._id}`} passHref>
              <h2 className="text-lg font-bold mt-4">
                {product.name || "Unnamed Product"}
              </h2>
            </Link>

            <StarRating
              initialRating={3}
              totalStars={5}
              starSize={30}
              fillColor="gold"
              emptyColor="gray"
              onRatingChange={(newRating) =>
                handleRatingChange(newRating, product._id)
              }
            />
            <div className="flex gap-2 mt-2">
              <p className="text-gray-600 line-through">
                {product.price ? `$${product.price.toFixed(2)}` : "N/A"}
              </p>
              <p className="text-gray-800 font-bold">
                {discountedPrice !== null
                  ? `$${discountedPrice.toFixed(2)}`
                  : "N/A"}
              </p>
              {product.discount && (
                <p className="text-red-500 mb-6 ml-10 bg-gray-100 rounded-full pt-[6px] px-[14px] inline-flex items-center justify-center w-auto text-sm">
                  {product.discount}%!
                </p>
              )}
       
            </div>

            <button
              onClick={() => handleAddToCart(product)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}
