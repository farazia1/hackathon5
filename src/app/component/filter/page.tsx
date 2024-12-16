"use client";
import DualRangeSlider from "@/app/component/slider/slider";
import { useState } from "react";
import ProductDetails from "../star/page";
import Pagination from "../pagination/page";

const FilterComponent = () => {
  const [isColorsOpen, setIsColorsOpen] = useState(false);
  const [isSizesOpen, setIsSizesOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

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

  const totalPages = 10; // Example: total pages fixed

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex ml-[100px]">
      <div className="max-w-md p-4 m-4 bg-gray-100 w-[295px] rounded-md shadow-lg">
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
          <span className="text-2xl font-bold">{">"}</span>
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
              {">"}
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
              {">"}
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
        <div className="flex justify-center  min-h-screen bg-gray-200">
          <DualRangeSlider min={0} max={100} step={1} />
        </div>
      </div>

      {/* Product List */}
      <div className="pl-4">
        <h1 className="text-[32px]">Casual</h1>
        <p>Showing 1-10 of 100 Products</p>
        <div className="flex flex-wrap gap-4">
          {[
            "as.png",
            "bs.png",
            "cs.png",
            "tb.png",
            "tc.png",
            "td.png",
            "tdd.png",
            "tcc.png",
            "tbb.png",
          ].map((src, index) => (
            <div key={index}>
              <img src={`/${src}`} alt="" className="h-[298px] w-[280px]" />
              <h1>T-SHIRT WITH TAPE DETAILS</h1>
              <ProductDetails rating={4.5} originalPrice={120} />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default FilterComponent;
