"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  image: string;
  price: number | null;
  discount?: number | null;
}

export default function ProductDetail() {
  const params = useParams<{ id: string }>(); // Getting params with type
  const id = params?.id; // Explicitly
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data: Product = await client.fetch(
          `*[_type == "AllProduct" && _id == $id][0] {
            _id,
            name,
            "image": image.asset->url,
            price,
            discount
          }`,
          { id }
        );
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  // Handle quantity change in localStorage
  const updateCartInLocalStorage = () => {
    if (!product) return;

    // Get cart from localStorage or create an empty one
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");

    // If product already exists in cart, update quantity; else, add new product
    if (cart[product._id]) {
      cart[product._id].quantity = quantity; // Update quantity with the current state
    } else {
      cart[product._id] = { ...product, quantity, selectedColor, selectedSize };
    }

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // Handle Add to Cart button click
  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert("Please select both color and size before adding to cart.");
      return;
    }

    updateCartInLocalStorage(); // Update cart in localStorage with the selected quantity
    alert(`Added ${quantity} ${product!.name}(s) to cart.`);
  };

  // Handle quantity changes
  const handleQuantityChange = (action: "increase" | "decrease") => {
    if (action === "increase") {
      setQuantity(quantity + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (loading) {
    return <p className="text-gray-500">Loading product...</p>;
  }

  if (!product) {
    return <p className="text-gray-500">Product not found.</p>;
  }

  const discountedPrice = product.discount
    ? product.price ? product.price - (product.price * product.discount) / 100 : 0
    : product.price;

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image Section */}
        <div className="flex flex-col md:w-1/2">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg object-cover mb-4"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-4 md:w-1/2">
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <p className="text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <div>
            <p className="text-lg font-semibold">Price: ₹{product.price ?? "N/A"}</p>
            {product.discount && (
              <p className="text-red-500 mb-4">Discount: {product.discount}%</p>
            )}
            <p className="text-2xl font-bold text-gray-800">Discounted Price: ₹{discountedPrice ?? "N/A"}</p>
          </div>

          {/* Color Selector */}
          <div>
            <h2 className="font-semibold">Select Color:</h2>
            <div className="flex gap-2 mt-2">
              {["Red", "Blue", "Green"].map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full transition-transform duration-300 hover:scale-110 ${
                    selectedColor === color ? "ring-2 ring-blue-500" : ""
                  }`}
                  style={{
                    backgroundColor: color === "Red" ? "#FF0000" : color === "Blue" ? "#0000FF" : "#008000",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div>
            <h2 className="font-semibold">Select Size:</h2>
            <div className="flex gap-2 mt-2">
              {["Small", "Medium", "Large", "X-Large"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-lg transition-transform duration-300 hover:scale-110 ${
                    selectedSize === size ? "bg-black text-white" : ""
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div>
            <h2 className="font-semibold">Quantity:</h2>
            <div className="flex items-center gap-4 mt-2">
              <button
                onClick={() => handleQuantityChange("decrease")}
                className="px-3 py-2 border rounded-lg transition-transform duration-300 hover:scale-110"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => handleQuantityChange("increase")}
                className="px-3 py-2 border rounded-lg transition-transform duration-300 hover:scale-110"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="mt-6 flex items-center gap-4">
            <button
              onClick={handleAddToCart}
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
