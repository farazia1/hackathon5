"use client";

import { useState } from "react";
import SignupDialog from "@/app/component/signup";

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null; // If the banner is closed, don't render anything.

  return (
    <div className="fixed top-0 w-full bg-black text-white py-2 px-4 z-50">
      <div className="flex justify-around items-center max-w-7xl mx-auto">
        {/* Paragraph and SignupDialog together */}
        <div className="flex items-center space-x-4">
          <p className="text-sm md:text-base font-medium">
            Sign up and get 20% off your first order.
          </p>
          <SignupDialog />
        </div>

        {/* Close button */}
        <button
          className="text-white bg-transparent text-xl font-bold hover:text-gray-300"
          onClick={() => setIsVisible(false)} // Close the banner
        >
          ×
        </button>
      </div>
    </div>
  );
}
