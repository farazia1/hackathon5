"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { auth } from "@/app/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import ProductModal from "@/app/component/productModal";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  // Add other properties based on your product structure
}

const Navbar = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Fetch products based on search query
  const fetchData = async (query: string) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/search?query=${query}`);
      const data = await response.json();
      setProducts(data); // Update state with fetched products
      setIsModalOpen(true); // Open modal with the fetched data
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authAction, setAuthAction] = useState<"login" | "signup" | null>(null);
  const [error, setError] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [searchQuery, setSearchQuery] = useState("");

  const toggleSearchDropdown = () => {
    setIsSearchDropdownOpen(!isSearchDropdownOpen);
    setError(""); // Clear errors when dropdown opens
  };

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User Signed Up:", userCredential.user);
      setAuthAction(null); // Close the form after signup
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred during signup.");
      }
    }
  };
  
  const handleSignin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User Signed In:", userCredential.user);
      setAuthAction(null); // Close the form after login
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred during signin.");
      }
    }
  };
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchQuery(e.target.value); // Just update the search query without linking to any external logic
  // };

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
                  href="/Product-Details-page"
                  className="block px-4 py-2 hover:bg-gray-100 transition-transform duration-300 hover:scale-110"
                >
                  Cart
                </Link>
                <Link
                  href="/mock-api"
                  className="block px-4 py-2 hover:bg-gray-100 transition-transform duration-300 hover:scale-110"
                >
                  mock-api
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
          <Link
            href="/Home-page/topSelling"
            className="px-4 py-2 hover:text-gray-500 transition-transform duration-300 hover:scale-110"
          >
            On Sell
          </Link>
          <Link href="/Home-page/newArrival">
            <li className="px-4 py-2 hover:text-gray-500 transition-transform duration-300 hover:scale-110">
              New Arrivals
            </li>
          </Link>
          <li className="px-4 py-2 hover:text-gray-500 transition-transform duration-300 hover:scale-110">
            Brands
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-6">
          <div>
            <input
              type="text"
              id="globalSearchInput"
              placeholder="Search products..."
              // className="search-input"
              className="w-[200px] px-4 py-2 rounded-[62px] bg-[#f0f0f0] text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 hover:scale-110"
              onChange={(e) => fetchData(e.target.value)} // Trigger search on input change
            />

            {/* Loading indicator */}
            {loading && <p>Loading...</p>}

            {/* Display modal with products */}
            <ProductModal
              products={products}
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)} // Close modal when clicked
            />
          </div>

          {/* <CartPage/> */}
          <Link href="/addcart">
            {/* Search Icon */}

            <Image
              src="/Vector (1).png"
              alt="Search Icon"
              width={24}
              height={24}
              className="hero-image transition-transform duration-300 hover:scale-110"
            />
          </Link>

          {/* Auth Dropdown */}
          <Image
            src="/Vector.png"
            alt="Cart Icon"
            width={24}
            height={24}
            onClick={toggleSearchDropdown}
            className="hero-image transition-transform duration-300 hover:scale-110"
          />
          {isSearchDropdownOpen && (
            <div className="absolute right-6 top-16 bg-white shadow-lg rounded-md p-4 w-64 z-20">
              {authAction === null ? (
                <div>
                  <button
                    onClick={() => setAuthAction("login")}
                    className="block w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mb-2"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setAuthAction("signup")}
                    className="block w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                  >
                    Sign Up
                  </button>
                </div>
              ) : (
                <form
  onSubmit={(e) => {
    e.preventDefault();
    if (authAction === "login") {
      handleSignin();
    } else if (authAction === "signup") {
      handleSignup();
    }
  }}
>
  <h3 className="text-lg font-semibold mb-2">
    {authAction === "login" ? "Login" : "Sign Up"}
  </h3>
  {error && (
    <p className="text-red-500 text-sm mb-2">{error}</p>
  )}
  <input
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full mb-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <button
    type="submit"
    className={`w-full px-4 py-2 rounded-md text-white ${
      authAction === "login"
        ? "bg-blue-500 hover:bg-blue-600"
        : "bg-green-500 hover:bg-green-600"
    }`}
  >
    {authAction === "login" ? "Login" : "Sign Up"}
  </button>
  <button
    type="button"
    onClick={() => setAuthAction(null)}
    className="w-full mt-2 px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
  >
    Cancel
  </button>
</form>

              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
