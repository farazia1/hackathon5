import React, { useEffect } from 'react';

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
}

const ProductModal = ({ products, isOpen, onClose }: { products: Product[], isOpen: boolean, onClose: () => void }) => {
  
  // Close modal when clicking outside of it
  useEffect(() => {
    if (isOpen) {
      const handleOutsideClick = (e: MouseEvent) => {
        const modalElement = document.getElementById('productModal');
        if (modalElement && !modalElement.contains(e.target as Node)) {
          onClose();  // Close modal when clicking outside
        }
      };
      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            id="productModal"
            className="bg-white p-6 rounded-lg w-4/5 max-w-4xl flex flex-col relative"
          >
            {/* Close button */}
            <button
              className="absolute top-2 right-4 text-black font-bold text-lg"
              onClick={onClose}
            >
              X
            </button>

            {/* Modal content */}
            <div className="flex flex-row space-x-4 overflow-x-auto">
              {products.length > 0 ? (
                products.map((product) => (
                  <div key={product._id} className="flex-shrink-0 w-1/4 p-4 bg-gray-100 rounded-lg text-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-auto mb-4"
                    />
                    <h2 className="text-lg font-semibold">{product.name}</h2>
                    <p className="text-sm text-gray-500">${product.price}</p>
                  </div>
                ))
              ) : (
                <p>No products found.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductModal;
