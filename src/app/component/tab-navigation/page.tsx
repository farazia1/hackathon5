"use client";
import React, { useState } from "react";
import Tabreviews from "../tabreviews";
import FilterComponent from "../filter/page";
import Faq from "../faq";

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("productDetails");

  // Tab content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case "productDetails":
        return <Faq/>;
      case "ratingsAndReviews":
        return <Tabreviews />;
      case "faqs":
        return <p>Yahan FAQs ka content hoga.</p>;
      default:
        return <p>Default content</p>;
    }
  };

  return (
    <div className="p-4">
      {/* Tabs */}
      <nav className="flex justify-center space-x-8 border-b pb-2">
        <button
          className={`w-[400px] text-center py-2 ${
            activeTab === "productDetails" ? "text-gray-900 border-b-2 border-gray-400" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("productDetails")}
        >
          Product Details
        </button>
        <button
          className={`w-[400px] text-center py-2 ${
            activeTab === "ratingsAndReviews" ? "text-gray-900 border-b-2 border-gray-400" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("ratingsAndReviews")}
        >
          Ratings and Reviews
        </button>
        <button
          className={`w-[400px] text-center py-2 ${
            activeTab === "faqs" ? "text-gray-900 border-b-2 border-gray-400" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("faqs")}
        >
          FAQs
        </button>
      </nav>

      {/* Content */}
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default TabNavigation;
