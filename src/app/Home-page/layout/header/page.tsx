"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative top-[24px] ml-[100px] flex items-center justify-around pt-16 w-[1240px] gap-10">
      <h1 className="font-[integral CF] size-8 font-bold">SHOP.CO</h1>
      <ul className="flex space-x-4">
        <li>
          <button
            className="hover:text-gray-300 focus:outline-none"
            onClick={toggleDropdown}
          >
            Shop
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4 inline ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute mt-2 z-50 bg-white text-black rounded shadow-lg w-40">
              <Link
                href="/shop/mens"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Mens
              </Link>
              <Link
                href="/component/filter"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Casual
              </Link>
              <Link
                href="/Product-Details-page/Addtocart"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Cart
              </Link>
              <Link
                href="/cart"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                li
              </Link>
            </div>
          )}
        </li>
        <li>On Sell</li>
        <li>New Arrivals</li>
        <li>Brands</li>
      </ul>

      <div className="relative w-full max-w-sm rounded-3xl">
        <input
          type="text"
          placeholder="Search..."
          className="w-[500px] px-4 py-2 rounded-[62px] bg-[#f0f0f0] text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex gap-6">
        <Image
          src="/Vector (1).png"
          alt="Hero Image"
          width={24}
          height={24}
          className="hero-image"
        />
        <Image
          src="/Vector.png"
          alt="Hero Image"
          width={24}
          height={24}
          className="hero-image"
        />
      </div>
    </div>
  );
};

export default Navbar;
