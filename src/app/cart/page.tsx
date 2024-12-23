"use client";
import { useState } from "react";

export default function Page() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleRemoveItem = () => {
    console.log("Item removed from the cart"); // Replace with actual remove logic
  };

  return (
    <div className="container py-6">
      <h1 className="text-[40px] font-[700] leading-[48px] text-left decoration-solid">
        YOUR CART
      </h1>
      <div className="md:flex items-start gap-[20px]">
        {/* Left Div */}
        <div className="md:w-[715px] border p-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="md:w-[667px] h-[124px] flex gap-4 border-b m-4 last:border-b-0 transition-all duration-300 hover:shadow-lg hover:border-gray-300"
            >
              {/* Image */}
              <div className="w-[110px] h-[110px] transition-transform duration-300 hover:scale-105">
                <img
                  src={
                    index === 0
                      ? "/Frame 33.png"
                      : index === 1
                      ? "/tc.png"
                      : "/tb.png"
                  }
                  alt="Product"
                  className="w-full h-full object-cover border"
                />
              </div>

              {/* Details and Quantity Selector */}
              <div className="w-[100%] h-full flex flex-col justify-between">
                {/* Details */}
                <div>
                  <div className="flex justify-between items-start">
                    <h2 className="text-base font-semibold truncate transition-all duration-300 hover:text-blue-500">
                      Gradient Graphic T-shirt
                    </h2>
                    <button
                      onClick={handleRemoveItem}
                      className="text-gray-500 hover:text-red-600 transition-colors duration-300"
                      aria-label="Remove item"
                    >
                      <img src="/Frame (1).png" alt="Remove" className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">Size: Large</p>
                  <p className="text-sm text-gray-600">Color: White</p>
                </div>

                {/* Price and Quantity Selector */}
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium">$145</p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleDecrement}
                      className="px-2 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors duration-300"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 border rounded">{quantity}</span>
                    <button
                      onClick={handleIncrement}
                      className="px-2 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors duration-300"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Div */}
        <div className="md:w-[505px] border p-4">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="flex justify-between items-center pt-4">
            <span className="text-lg font-medium">Subtotal</span>
            <span className="text-lg font-semibold">$99.99</span>
          </div>
          <div className="flex justify-between items-center pt-4">
            <span className="text-lg font-medium">Discount (-20%)</span>
            <span className="text-lg font-semibold">$-113</span>
          </div>
          <div className="flex justify-between items-center pt-4">
            <span className="text-lg font-medium">Delivery Fee</span>
            <span className="text-lg font-semibold">$15</span>
          </div>
          <div className="flex justify-between items-center border-t pt-4">
            <span className="text-lg font-medium">Total</span>
            <span className="text-lg font-semibold">$467</span>
          </div>

          {/* Promo Code Input */}
          <div className="flex items-center gap-2 mt-4">
            <input
              type="text"
              placeholder="Add promo code"
              className="w-[338px] px-3 py-2 border rounded transition-all duration-300 hover:shadow-md"
            />
            <button className=" w-[119px] px-3 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition-colors duration-300">
              Apply
            </button>
          </div>

          {/* Go to Checkout Button */}
          <button className="w-[457px] flex items-center justify-center gap-2 px-4 py-3 mt-4 bg-black text-white rounded hover:bg-gray-900 transition-colors duration-300">
            Go to Checkout
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.75L21 12m0 0l-3.75 3.25M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
