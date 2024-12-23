"use client";

import { useState } from "react";

const DualRangeSlider = () => {
  const [minValue, setMinValue] = useState(50);
  const [maxValue, setMaxValue] = useState(500);

  // Handler for Left Thumb (Min Value)
  const handleLeftThumbChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value < maxValue - 10) setMinValue(value); // Ensure the left thumb doesn't cross the right thumb
  };

  // Handler for Right Thumb (Max Value)
  const handleRightThumbChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > minValue + 10) setMaxValue(value); // Ensure the right thumb doesn't cross the left thumb
  };

  const minPercent = (minValue / 1000) * 100;
  const maxPercent = (maxValue / 1000) * 100;

  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
      <label className="text-sm font-medium text-gray-900 dark:text-white">
        Adjustable Range
      </label>

      {/* Range Slider Container */}
      <div className="relative w-full h-2 bg-gray-200 rounded-lg dark:bg-gray-700">
        {/* Selected Range Track */}
        <div
          className="absolute h-2 bg-black rounded-lg"
          style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%` }}
        ></div>

        {/* Left Thumb */}
        <input
          type="range"
          min="0"
          max="1000"
          value={minValue}
          onChange={handleLeftThumbChange} // Calls the handler for the left thumb
          className="absolute w-full bg-black  h-2 bg-transparent appearance-none pointer-events-auto cursor-pointer z-10"
        />

        {/* Right Thumb */}
        <input
          type="range"
          min="0"
          max="1000"
          value={maxValue}
          onChange={handleRightThumbChange} // Calls the handler for the right thumb
          className="absolute w-full h-2 bg-transparent appearance-none pointer-events-auto cursor-pointer z-10"
        />
      </div>

      {/* Display Selected Values */}
      <div className="flex justify-between text-sm">
        <span className="text-gray-900 dark:text-white">Min: {minValue}</span>
        <span className="text-gray-900 dark:text-white">Max: {maxValue}</span>
      </div>
    </div>
  );
};

export default DualRangeSlider;
