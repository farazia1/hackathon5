"use client";

import React from "react";
import StarRating from "@/app/component/starRating/Rating";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  image: string;
  originalPrice: number;
  discount?: number;
}

interface NewArrivalClientProps {
  data: Product[];
}

export function NewArrival({ data }: NewArrivalClientProps) {
  const handleRatingChange = (newRating: number, productId: string) => {
    console.log(`Product ID: ${productId}, New rating selected: ${newRating}`);
  };

  const calculateDiscountedPrice = (price: number, discount?: number): number => {
    if (!discount || discount <= 0) return price;
    return price - (price * discount) / 100;
  };

  return (
    <div>
      <h1 className="flex justify-center text-6xl pt-20 pb-20 font-bold text-black transition-transform duration-300 hover:scale-90">New Arrivals</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mx-auto p-4">
      {data.length > 0 ? (
        data.map((product: Product) => (
          <div
            key={product._id}
            className="p-4  max-w-sm"
          >
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

            <h2 className="text-lg font-bold mt-4">
              {product.name || "Unnamed Product"}
            </h2>

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

            <p className="text-gray-600 line-through">
              ${product.originalPrice.toFixed(2)}
            </p>

            <p className="text-gray-800 font-bold">
              ${calculateDiscountedPrice(product.originalPrice, product.discount).toFixed(2)}
            </p>

            {product.discount && (
              <p className="text-green-500 text-sm">
                You Save: {product.discount}%!
              </p>
            )}
          </div>
        ))
      ) : (
        <p className="text-gray-500">No products found.</p>
      )}
    </div>
    </div>
  );
}
