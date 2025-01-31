"use client";

import React, { useState } from "react";

interface StarRatingProps {
  /** Number of stars to display (default is 5) */
  totalStars?: number;
  /** Initial rating value (default is 0) */
  initialRating?: number;
  /** Size of each star in pixels (default is 30px) */
  starSize?: number;
  /** Color of filled stars (default is gold) */
  fillColor?: string;
  /** Color of empty stars (default is gray) */
  emptyColor?: string;
  /** Callback function when a star is clicked */
  onRatingChange?: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({
  totalStars = 5,
  initialRating = 0,
  starSize = 30,
  fillColor = "gold",
  emptyColor = "gray",
  onRatingChange,
}) => {
  const [rating, setRating] = useState<number>(initialRating);

  const handleClick = (starIndex: number) => {
    setRating(starIndex + 1); // Rating is 1-based (index + 1)
    if (onRatingChange) {
      onRatingChange(starIndex + 1);
    }
  };

  const getStarColor = (starIndex: number): string =>
    starIndex < rating ? fillColor : emptyColor;

  return (
    <div style={{ display: "flex", gap: "5px" }}>
      {[...Array(totalStars)].map((_, index) => (
        <svg
          key={index}
          width={starSize}
          height={starSize}
          viewBox="0 0 24 24"
          fill={getStarColor(index)}
          xmlns="http://www.w3.org/2000/svg"
          style={{ cursor: "pointer" }}
          onClick={() => handleClick(index)}
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
