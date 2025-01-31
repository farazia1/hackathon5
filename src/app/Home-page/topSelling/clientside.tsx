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

interface TopSellingClientProps {
  data: Product[];
}

export function TopSellingClient({ data }: TopSellingClientProps) {
  const handleRatingChange = (newRating: number, productId: string) => {
    console.log(`Product ID: ${productId}, New rating selected: ${newRating}`);
  };

  // Function to calculate discounted price
  const calculateDiscountedPrice = (price: number, discount?: number) => {
    if (!price) return "N/A";
    if (!discount || discount <= 0) return price;
    return price - (price * discount) / 100;
  };

  return (
    <div>

      <h1 className="flex justify-center text-6xl pt-20 pb-20 font-bold text-black transition-transform duration-300 hover:scale-90">Our Products</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mx-auto p-4">
      {data.length > 0 ? (
        data.map((product: Product) => (
          <div
            key={product._id}
            className="p-4   max-w-sm"
          >
            {/* Product Image */}
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

            {/* Product Name */}
            <h2 className="text-lg font-bold mt-4">
              {product.name || "Unnamed Product"}
            </h2>

            {/* Rating Component */}
            <StarRating
              initialRating={3} // Default rating
              totalStars={5} // Total number of stars
              starSize={30} // Size of stars
              fillColor="gold" // Color of selected stars
              emptyColor="gray" // Color of unselected stars
              onRatingChange={(newRating) =>
                handleRatingChange(newRating, product._id)
              } // Callback with product ID
              />

            {/* Original Price */}
            <p className="text-gray-600 line-through">
              ${product.originalPrice || "N/A"}
            </p>

            {/* Discounted Price */}
            {calculateDiscountedPrice(
              product.originalPrice,
              product.discount
            ) !== "N/A" ? (
              <p className="text-gray-800 font-bold">
                $
                {(
                  calculateDiscountedPrice(
                    product.originalPrice,
                    product.discount
                  ) as number
                ).toFixed(2)}
              </p>
            ) : (
              <p className="text-gray-800 font-bold">Price: N/A</p>
            )}

            {/* Discount Percentage */}
            {product.discount ? (
              <p className="text-green-500 text-sm">
                You Save: {product.discount}%!
              </p>
            ) : null}
          </div>
        ))
      ) : (
        <p className="text-gray-500">No products found.</p>
      )}
    </div>
      </div>
  );
}
