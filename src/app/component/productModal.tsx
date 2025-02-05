import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
}

const ProductModal = ({ products, isOpen, onClose }: { products: Product[], isOpen: boolean, onClose: () => void }) => {
  useEffect(() => {
    if (isOpen) {
      const handleOutsideClick = (e: MouseEvent) => {
        const modalElement = document.getElementById('productModal');
        if (modalElement && !modalElement.contains(e.target as Node)) {
          onClose();
        }
      };
      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-md">
      <motion.div 
        id="productModal"
        className="bg-white p-6 rounded-2xl w-11/12 max-w-4xl shadow-lg flex flex-col relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-700 hover:text-red-500 text-xl"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Modal content */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Search Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-h-80 overflow-y-auto p-2">
          {products.length > 0 ? (
            products.map((product) => (
              <motion.div 
                key={product._id} 
                className="bg-gray-100 rounded-xl p-4 flex flex-col items-center transition-transform duration-300 hover:scale-105 shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 object-cover rounded-lg mb-3"
                />
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600 text-sm">${product.price}</p>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">No products found.</p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProductModal;
