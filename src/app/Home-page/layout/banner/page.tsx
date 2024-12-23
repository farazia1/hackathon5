"use client";

import { useState } from "react";
import Link from "next/link";
export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null; // Agar banner close ho gaya, to kuch bhi return na karein.

  return (
    <div className="fixed top-0 md:w-full  bg-black  text-white text-center py-2 px-1 h-9 z-50">
      <div className="flex justify-around items-center space-x-4 max-w-7xl mx-auto">
        <p className="text-sm md:text-base font-medium items-center">
        Sign up and get 20% off to your first order.  <Link
            href="/signup"
            className="underline font-semibold hover:text-yellow-300"
          >
            Sign Up Now
          </Link>
        </p>
        <button
          className="text-white bg-transparent text-xl font-bold hover:text-gray-300"
          onClick={() => setIsVisible(false)} // Banner close karne ka function
        >
          ×
        </button>
      </div>
    </div>
  );
}
