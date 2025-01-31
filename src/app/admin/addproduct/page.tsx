"use client";

import { useState } from 'react';
import AdminNavbar from '../navbaradmin/page';

const AddProduct = () => {
  const [allproduct, setAllProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    sale: false,
    new: false,
  });
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let uploadedImageUrl = '';

    // Step 1: Upload Image to Sanity
    if (image) {
      const formData = new FormData();
      formData.append('image', image);

      try {
        const response = await fetch('/api/uploadImage', {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();
        if (response.ok) {
          uploadedImageUrl = data.url; // Save image URL
        } else {
          alert(data.message || 'Image upload failed');
          return;
        }
      } catch (err) {
        console.error('Image upload error:', err);
        alert('Image upload failed.');
        return;
      }
    }

    // Step 2: Create Product in Sanity
    try {
      const response = await fetch('/api/createProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...allproduct,
          imageUrl: uploadedImageUrl,
        }),
      });

      if (response.ok) {
        alert('Product added successfully!');
        setAllProduct({
          name: '',
          price: '',
          description: '',
          category: '',
          sale: false,
          new: false,
        });
        setImage(null);
      } else {
        const data = await response.json();
        alert(data.message || 'Product creation failed');
      }
    } catch (err) {
      console.error('Product creation error:', err);
      alert('Failed to create product.');
    }
  };

  return (
    <div>
      <AdminNavbar />
      <form onSubmit={handleSubmit} className="p-4">
        <h1 className="text-2xl font-bold mb-4">Add New Product</h1>

        {/* Image Upload */}
        <input
          type="file"
          onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
        />

        {/* Other Product Fields */}
        <input
          type="text"
          value={allproduct.name}
          onChange={(e) => setAllProduct({ ...allproduct, name: e.target.value })}
        />
        {/* Add other input fields here */}
        
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
