"use client";
import React, { useEffect, useState } from "react";

// Define the interface for a photo
interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const Testing = () => {
  const [photos, setPhotos] = useState<Photo[]>([]); // State to store fetched photos

  // Fetch data on initial render
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data: Photo[] = await res.json();

        console.log("Fetched Data:", data); // Log fetched data for debugging
        setPhotos(data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchdata(); // Call fetch function
  }, []); // Empty dependency array to ensure it runs only once on mount

  return (
    <div>
      <h1>Testing Photos Fetch</h1>

      {/* Debugging log */}
      <pre>{`Photos count: ${photos.length}`}</pre>

      {/* Render fetched photos */}
      <ul>
        {photos.slice(0, 10).map((photo) => (
          <li key={photo.id}>
            <img
              src={photo.thumbnailUrl} // Correct photo's unique thumbnail URL
              alt={photo.title} // Correct photo's unique title
              width={150} // Adjust width for better viewing
              height={150} // Adjust height for consistency
              style={{ borderRadius: "8px", margin: "10px" }} // Optional style for better look
            />
            <p>{photo.title}</p> {/* Correct photo's unique title */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Testing;
