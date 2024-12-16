"use client";

import React from "react";

interface ReviewProps {
  rating: number; // Number of stars
  name: string;
  review: string;
  date: string; // Date of review
}

const Review: React.FC<ReviewProps> = ({ rating, name, review, date }) => {
  return (
    <div className="w-[550px] h-[250px] border border-gray-300 p-4 rounded-lg shadow-sm space-y-3">
      <div className="flex  justify-between items-center">
        <div className="flex items-center space-x-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              key={index}
              className={`h-5 w-5 ${
                index < rating ? "text-yellow-500" : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>
        <span className="text-gray-400 text-xl font-bold">...</span>
      </div>
      <div className="flex items-center space-x-3">
        <span className="text-lg font-medium">{name}</span>
        <div className="bg-green-500 text-white text-sm px-2 py-1 rounded-full">
          ✓
        </div>
      </div>
      <p className="text-gray-700">{review}</p>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
  );
};

export default Review;
