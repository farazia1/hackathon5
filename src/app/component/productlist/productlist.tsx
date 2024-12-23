"use client";
import ProductDetails from "../star/page";
import Pagination from "../pagination/page";
import { useState } from "react";
import Link from "next/link";

const ProductListComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Example: total pages fixed

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="pl-4 max-w-[390px] mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]">
      {/* Heading Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-[24px] sm:text-[28px] md:text-[32px] xl:text-[36px]">
          Casual
        </h1>
        <Link href="/component/filtercomponent"><button
          className="flex items-center gap-2 p-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
          aria-label="Filter Options"
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M5 11.424V1a1 1 0 1 0-2 0v10.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.228 3.228 0 0 0 0-6.152ZM19.25 14.5A3.243 3.243 0 0 0 17 11.424V1a1 1 0 0 0-2 0v10.424a3.227 3.227 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.243 3.243 0 0 0 2.25-3.076Zm-6-9A3.243 3.243 0 0 0 11 2.424V1a1 1 0 0 0-2 0v1.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0V8.576A3.243 3.243 0 0 0 13.25 5.5Z" />
          </svg>
        </button></Link>
      </div>

      {/* Products Info */}
      <p className="text-sm sm:text-base md:text-lg mt-2">
        Showing 1-10 of 100 Products
      </p>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
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
          <div
            key={index}
            className="flex flex-col items-center border border-gray-200 rounded-lg p-2"
          >
            <img
              src={`/${src}`}
              alt=""
              className="h-[172px] w-[172px] sm:h-[195px] sm:w-[195px] md:h-[220px] md:w-[220px] lg:h-[250px] lg:w-[250px] xl:h-[295px] xl:w-[295px]"
            />
            <h1 className="text-sm sm:text-base md:text-lg mt-2">
              T-SHIRT WITH TAPE DETAILS
            </h1>
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
  );
};

export default ProductListComponent;
