"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value); // Just update the search query without linking to any external logic
  };

  return (
    <nav className="bg-white shadow-md w-full top-8 sticky z-10">
      <div className="relative flex items-center justify-between px-6 py-4">
        <Link href="/">
          <h1 className="font-[integral CF] text-2xl font-bold transition-transform duration-300 hover:scale-110">
            SHOP.CO
          </h1>
        </Link>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none transition-transform duration-300 hover:scale-110"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-white text-black md:static md:flex md:space-x-8 md:items-center md:w-auto`}
        >
          <li>
            <button
              className="hover:text-gray-500 focus:outline-none px-4 py-2 block transition-transform duration-300 hover:scale-110"
              onClick={toggleDropdown}
            >
              Shop
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4 inline ml-1 transition-transform duration-300 hover:scale-110"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="bg-white text-black shadow-md rounded-md">
                <Link
                  href="/shop/mens"
                  className="block px-4 py-2 hover:bg-gray-100 transition-transform duration-300 hover:scale-110"
                >
                  Mens
                </Link>
                <Link
                  href="/component/filter"
                  className="block px-4 py-2 hover:bg-gray-100 transition-transform duration-300 hover:scale-110"
                >
                  Casual
                </Link>
                <Link
                  href="/Product-Details-page/Addtocart"
                  className="block px-4 py-2 hover:bg-gray-100 transition-transform duration-300 hover:scale-110"
                >
                  Cart
                </Link>
                <Link
                  href="/cart"
                  className="block px-4 py-2 hover:bg-gray-100 transition-transform duration-300 hover:scale-110"
                >
                  Checkout
                </Link>
              </div>
            )}
          </li>
          <li className="px-4 py-2 hover:text-gray-500 transition-transform duration-300 hover:scale-110">
            On Sell
          </li>
          <li className="px-4 py-2 hover:text-gray-500 transition-transform duration-300 hover:scale-110">
            New Arrivals
          </li>
          <li className="px-4 py-2 hover:text-gray-500 transition-transform duration-300 hover:scale-110">
            Brands
          </li>
        </ul>

        {/* Search input */}
        <div className="hidden md:flex items-center gap-6">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange} // Search update logic remains but with no external link
            placeholder="Search..."
            className="w-[200px] px-4 py-2 rounded-[62px] bg-[#f0f0f0] text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 hover:scale-110"
          />

          {/* Image icons */}
          <Image 
            src="/Vector (1).png"
            alt="Search Icon"
            width={24}
            height={24}
            className="hero-image transition-transform duration-300 hover:scale-110"
          />
          <Image
            src="/Vector.png"
            alt="Cart Icon"
            width={24}
            height={24}
            className="hero-image transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
