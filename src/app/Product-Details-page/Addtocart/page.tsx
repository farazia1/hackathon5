"use client";

import React, { useState } from "react";
import StarRating from "../../component/star/page";
import Allreviews from "../All-reviews/page";

const AddToCart = () => {
  const [selectedImage, setSelectedImage] = useState("/image 1.png");
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert("Please select a color and size before adding to the cart.");
      return;
    }
    alert(
      `Added to cart: ${quantity} item(s), Color: ${selectedColor}, Size: ${selectedSize}`
    );
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row items-start justify-between gap-6 p-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 p-6">
          {/* Left column with 3 clickable small images */}
          <div className="flex flex-col gap-4">
            {["/image 2.png", "/image 5.png", "/image 6.png"].map(
              (image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Shirt Thumbnail ${index + 1}`}
                  className={`w-[150px] h-[130px] object-cover cursor-pointer transition ${
                    selectedImage === image
                      ? "border-blue-500 border-2"
                      : "border-2 border-transparent"
                  }`}
                  onClick={() => setSelectedImage(image)} // Update the selected image
                />
              )
            )}
          </div>

          {/* Right side displaying the selected large image */}
          <div>
            <img
              src={selectedImage}
              alt="Large Shirt"
              className="w-[400px] h-auto rounded-3xl"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 w-[600px] p-2">
          <h1 className="text-4xl pt-4 font-bold">One Life Graphic T-shirt</h1>
          <StarRating
            rating={4.5}
            originalPrice={300}
            discountPercentage={40}
          />
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div>
            <h2 className="font-semibold">Select Color:</h2>
            <div className="flex gap-2 mt-2">
              {[
                { color: "Red", bgColor: "#4F4631" },
                { color: "Blue", bgColor: "#314F4A" },
                { color: "Green", bgColor: "#31344F" },
              ].map(({ color, bgColor }) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full ${
                    selectedColor === color ? "ring-2 ring-blue-500" : ""
                  }`}
                  style={{ backgroundColor: bgColor }}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-semibold">Select Size:</h2>
            <div className="flex gap-2 mt-2">
              {["Small", "Medium", "Large", "X-Large"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-lg ${
                    selectedSize === size ? "bg-black text-white" : ""
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-semibold">Quantity:</h2>
            <div className="flex items-center justify-between gap-4 mt-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 border rounded-lg"
                >
                  -
                </button>
                <span className="px-4">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 border rounded-lg"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="px-6 py-3 w-[350px] bg-black text-white rounded-lg hover:bg-gray-800"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Allreviews />
    </div>
  );
};

export default AddToCart;
