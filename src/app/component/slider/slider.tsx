"use client";

import React, { useState } from "react";

interface DualRangeSliderProps {
  min: number;
  max: number;
  step?: number;
}

const DualRangeSlider: React.FC<DualRangeSliderProps> = ({ min, max, step = 1 }) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value < maxValue) setMinValue(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value > minValue) setMaxValue(value);
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md w-96">
      <h2 className="text-xl font-bold mb-4 text-center">Dual-Thumb Range Slider</h2>
      <div className="relative w-full">
        {/* Track */}
        <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-300 rounded transform -translate-y-1/2"></div>
        
        {/* Highlighted Range */}
        <div
          className="absolute top-1/2 h-2 bg-black rounded transform -translate-y-1/2"
          style={{
            left: `${((minValue - min) / (max - min)) * 100}%`,
            width: `${((maxValue - minValue) / (max - min)) * 100}%`,
          }}
        ></div>

        {/* Min Thumb */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minValue}
          onChange={handleMinChange}
          className="absolute w-full h-2 opacity-0 z-10 cursor-pointer"
        />
        <div
          className="absolute w-4 h-4 bg-black rounded-full cursor-pointer z-20"
          style={{
            left: `${((minValue - min) / (max - min)) * 100}%`,
            transform: "translate(-50%, -50%)",
            top: "50%",
          }}
        ></div>

        {/* Max Thumb */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute w-full h-2 opacity-0 z-10 cursor-pointer"
        />
        <div
          className="absolute w-4 h-4 bg-black rounded-full cursor-pointer z-20"
          style={{
            left: `${((maxValue - min) / (max - min)) * 100}%`,
            transform: "translate(-50%, -50%)",
            top: "50%",
          }}
        ></div>
      </div>
      <div className="flex justify-between mt-4">
        <span className="text-sm font-medium">Min: {minValue}</span>
        <span className="text-sm font-medium">Max: {maxValue}</span>
      </div>
    </div>
  );
};

export default DualRangeSlider;
