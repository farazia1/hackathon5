"use client";

import Link from "next/link";
import { useEffect, useState } from "react";




type CartItem = {
  name: string;
  quantity: number;
  price: number;
  image?: string; // Image optional hai
  color?:string;
  size?:number;
  // [key: string]: CustomKeyType;
};

type Cart = {
  [id: string]: CartItem;
};

export default function CartPage() {
  const [cart, setCart] = useState<Cart>({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false); // Track loading state

  // Fetch cart data from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const cartData = localStorage.getItem("cart");
        setCart(cartData ? JSON.parse(cartData) : {});
      } catch (error) {
        console.error("Error parsing cart data from localStorage:", error);
      } finally {
        setIsLoaded(true); // Mark as loaded
      }
    }
  }, []);

  // Calculate total price whenever cart changes
  useEffect(() => {
    const total = Object.values(cart).reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
    setTotalPrice(total);
  }, [cart]);

  const handleRemoveItem = (id: string) => {
    const updatedCart = { ...cart };
    delete updatedCart[id];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    const updatedCart = {
      ...cart,
      [id]: {
        ...cart[id],
        quantity: newQuantity,
      },
    };
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  if (!isLoaded) {
    return <p>Loading cart...</p>; // Prevent hydration issues
  }

  return (
    <div className="container py-6">
      <h1 className="text-[40px] font-[700] leading-[48px] text-left decoration-solid">
        YOUR CART
      </h1>
      <div className="md:flex items-start gap-[20px]">
        {/* Left Div */}
        <div className="md:w-[715px] border p-4">
          {Object.entries(cart).map(([id, item]) => (
            <div
              key={id}
              className="md:w-[667px] h-[124px] flex gap-4 border-b m-4 last:border-b-0 transition-all duration-300 hover:shadow-lg hover:border-gray-300"
            >
              {/* Image */}
              <div className="w-[110px] h-[110px] transition-transform duration-300 hover:scale-105">
                <img
                  src={item.image || "/default_image.png"}
                  alt={item.name}
                  className="w-full h-full object-cover border"
                />
              </div>

              {/* Details and Quantity Selector */}
              <div className="w-[100%] h-full flex flex-col justify-between">
                {/* Details */}
                <div>
                  <div className="flex justify-between items-start">
                    <h2 className="text-base font-semibold truncate transition-all duration-300 hover:text-blue-500">
                      {item.name}
                    </h2>
                    <button
                      onClick={() => handleRemoveItem(id)}
                      className="text-gray-500 hover:text-red-600 transition-colors duration-300"
                      aria-label="Remove item"
                    >
                      <img src="/Frame (1).png" alt="Remove" className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">Size: {item.size}</p>
                  <p className="text-sm text-gray-600">Color: {item.color}</p>
                </div>

                {/* Price and Quantity Selector */}
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium">${item.price}</p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleUpdateQuantity(id, item.quantity - 1)}
                      className="px-2 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 border rounded">{item.quantity}</span>
                    <button
                      onClick={() => handleUpdateQuantity(id, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
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
            <span className="text-lg font-semibold">${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center pt-4">
            <span className="text-lg font-medium">Discount (-20%)</span>
            <span className="text-lg font-semibold">-${(totalPrice * 0.2).toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center pt-4">
            <span className="text-lg font-medium">Delivery Fee</span>
            <span className="text-lg font-semibold">$15.00</span>
          </div>
          <div className="flex justify-between items-center border-t pt-4">
            <span className="text-lg font-medium">Total</span>
            <span className="text-lg font-semibold">${(totalPrice - totalPrice * 0.2 + 15).toFixed(2)}</span>
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
          <Link
  href={{
    pathname: '/component/checkout',
    query: { cart: JSON.stringify(cart) }, // Cart data as query string
  }}
>
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
</Link>

        </div>
      </div>
    </div>
  );
}
