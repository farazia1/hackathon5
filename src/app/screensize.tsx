"use client";
import { useState, useEffect } from "react";

export default function ScreenSize() {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () =>
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", updateSize);
    updateSize(); // Set initial size on mount

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="mb-20">
      <h1>Screen Size</h1>
      <p>
        Width: {screenSize.width}px | Height: {screenSize.height}px
      </p>
    </div>
  );
}
