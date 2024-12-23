"use client";
import { useState } from "react";
import ProductDetails from "../star/page";
import Pagination from "../pagination/page";
import Link from "next/link";

const ProductListComponent = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State to track the search term
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Example: total pages fixed

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase()); // Update search term
  };

  // Sample product data
  const products = [
    { id: 1, name: "T-SHIRT WITH TAPE DETAILS", image: "as.png", price: 120, rating: 4.5 },
    { id: 2, name: "BLUE DENIM JEANS", image: "bs.png", price: 150, rating: 4.0 },
    { id: 3, name: "GREEN HOODIE", image: "cs.png", price: 80, rating: 4.8 },
    { id: 4, name: "WHITE COTTON T-SHIRT", image: "tb.png", price: 90, rating: 4.3 },
    { id: 5, name: "BLACK LEATHER JACKET", image: "tc.png", price: 200, rating: 4.7 },
    { id: 6, name: "SPORTS T-SHIRT", image: "td.png", price: 110, rating: 4.2 },
    { id: 7, name: "CASUAL PANTS", image: "tdd.png", price: 130, rating: 4.1 },
    { id: 8, name: "RUNNING SHOES", image: "tcc.png", price: 160, rating: 4.6 },
    { id: 9, name: "SUMMER HAT", image: "tbb.png", price: 40, rating: 4.4 },
  ];

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="pl-4 max-w-[390px] mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]">
      {/* Heading Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-[24px] sm:text-[28px] md:text-[32px] xl:text-[36px]">
          Casual
        </h1>
        <Link href="/component/filtercomponent">
          <button
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
          </button>
        </Link>
      </div>

      {/* Search Input */}
      <div className="mt-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search for products..."
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Products Info */}
      <p className="text-sm sm:text-base md:text-lg mt-2">
        Showing {filteredProducts.length} of {products.length} Products
      </p>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group relative overflow-hidden flex flex-col items-center border border-gray-200 rounded-lg p-2"
          >
            <img
              src={`/${product.image}`}
              alt={product.name}
              className="h-[172px] w-[172px] sm:h-[195px] sm:w-[195px] md:h-[220px] md:w-[220px] lg:h-[250px] lg:w-[250px] xl:h-[295px] xl:w-[295px] object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <h1 className="text-sm sm:text-base md:text-lg mt-2">{product.name}</h1>
            <ProductDetails rating={product.rating} originalPrice={product.price} />
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
