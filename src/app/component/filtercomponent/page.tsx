"use client";
import MultiRangeSlider from "@/app/component/slider/slider";
import { useState } from "react";

const FilterComponent = () => {
  const [isColorsOpen, setIsColorsOpen] = useState(false);
  const [isSizesOpen, setIsSizesOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "pink",
    "purple",
    "orange",
    "black",
    "white",
    "gray",
  ];

  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ];

  return (
    <div className="hidden md:block w-[295px] h-[1000px] p-4 m-4   rounded-md shadow-lg">
      {/* Categories Section */}
      <div className="flex justify-between items-center mb-4">
        <ul className="space-y-2">
          {["T-Shirts", "Shorts", "Shirts", "Hoodies", "Jeans"].map(
            (item, index) => (
              <li key={index} className="text-lg font-medium">
                {item}
              </li>
            )
          )}
        </ul>
        <span className="text-2xl font-bold"> <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
</svg></span>
      </div>

      {/* Colors Section */}
      <div className="mb-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsColorsOpen(!isColorsOpen)}
        >
          <h3 className="text-lg font-semibold">Colors</h3>
          <span
            className={`text-2xl transform ${
              isColorsOpen ? "rotate-90" : ""
            }`}
          >
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
</svg>
          </span>
        </div>
        {isColorsOpen && (
          <div className="mt-2 flex flex-wrap gap-2">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`h-9 w-9 rounded-full cursor-pointer border-2 ${
                  selectedColor === color
                    ? "border-black"
                    : "border-transparent"
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              ></div>
            ))}
          </div>
        )}
      </div>

      {/* Sizes Section */}
      <div className="mb-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsSizesOpen(!isSizesOpen)}
        >
          <h3 className="text-lg font-semibold">Sizes</h3>
          <span
            className={`text-2xl transform ${isSizesOpen ? "rotate-90" : ""}`}
          >
           <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
</svg>
          </span>
        </div>
        {isSizesOpen && (
          <div className="mt-2 grid grid-cols-3 gap-2">
            {sizes.map((size, index) => (
              <button
                key={index}
                className={`px-5 py-2 border rounded-md text-sm font-medium text-center ${
                  selectedSize === size
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-gray-300"
                } hover:bg-gray-200`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Price Slider */}
      <div className="flex justify-center">
        <MultiRangeSlider   />
      </div>
    </div>
  );
};

export default FilterComponent;
