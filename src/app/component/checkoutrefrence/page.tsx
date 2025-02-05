"use client";
// export const dynamic = "force-dynamic"; // ✅ Ensure page is dynamic



import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import ShippoData from "../shippoData/page";

// Define TypeScript types
type CartItem = {
  image: string;
  name: string;
  price: number;
  quantity: number;
};

type Cart = {
  [key: string]: CartItem;
};

const CheckoutRefrencePage = () => {
  return (
    <Suspense fallback={<p>Loading checkout...</p>}>
      <CheckoutContent />
    </Suspense>
  );
};

const CheckoutContent = () => {
  const searchParams = useSearchParams();
  const [cart, setCart] = useState<Cart>({});
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // Parse cart data from query params
  useEffect(() => {
    if (searchParams) {
      const cartData = searchParams.get("cart");
      if (cartData) {
        setCart(JSON.parse(cartData)); // Parse cart data from URL
      }
    }
  }, [searchParams]);

  // Handle user input for name, email, etc.
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  // Transform cart object to array of items with _type
  const transformCart = (cart: Cart) => {
    return Object.entries(cart).map(([productId, item]) => ({
      _type: "cartItem", // Add _type for Sanity schema compatibility
      productId, // Keep the product ID
      image: item.image, // Include product image
      name: item.name, // Include product name
      price: item.price, // Include product price
      quantity: item.quantity, // Include product quantity
    }));
  };

  // Handle form submission to create order
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const transformedCart = transformCart(cart); // Transform cart before sending

    const orderData = {
      userDetails,
      cartItems: transformedCart, // Send transformed cart
      orderDate: new Date().toISOString(),
    };

    try {
      const res = await fetch("/api/createOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (res.ok) {
        alert("Order placed successfully!");
        setUserDetails({
          name: "",
          email: "",
          phone: "",
          address: "",
        });
        setCart({});
      } else {
        alert("Order submission failed.");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("An error occurred while placing the order.");
    }
  };

  return (
    <div className="container py-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={userDetails.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={userDetails.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={userDetails.phone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium">
            Address
          </label>
          <textarea
            name="address"
            id="address"
            value={userDetails.address}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-black text-white rounded hover:bg-gray-900"
        >
          Place Order
        </button>
        <ShippoData />
      </form>
    </div>
  );
};

export default CheckoutRefrencePage;
