import React from "react";

// StarRating Component
type StarRatingProps = {
  rating: number;
  maxRating?: number;
};

const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
  return (
    <div className="flex items-center space-x-2" aria-label={`Rating: ${rating} out of ${maxRating}`}>
      <div className="flex items-center space-x-1">
        {[...Array(maxRating)].map((_, index) => {
          const fullStar = index + 1 <= Math.floor(rating);
          const halfStar = index + 1 > Math.floor(rating) && index + 1 <= Math.ceil(rating);

          return (
            <span key={index} className="relative text-2xl">
              {fullStar ? (
                <span className="text-yellow-400">★</span>
              ) : halfStar ? (
                <span className="text-yellow-400">
                  <span className="absolute inset-0 w-1/2 overflow-hidden">★</span>
                  <span className="text-gray-300">★</span>
                </span>
              ) : (
                <span className="text-gray-300">★</span>
              )}
            </span>
          );
        })}
      </div>
      <span className="text-sm text-gray-600">
        {rating.toFixed(1)}/{maxRating}
      </span>
    </div>
  );
};

// DiscountPrice Component
type DiscountPriceProps = {
  originalPrice: number;
  discountPercentage: number;
};

const DiscountPrice: React.FC<DiscountPriceProps> = ({ originalPrice, discountPercentage }) => {
  const discountedPrice = originalPrice - (originalPrice * discountPercentage) / 100;
  const formatPrice = (price: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price);

  return (
    <div className="flex items-center space-x-2">
      <span className="text-black font-bold">{formatPrice(discountedPrice)}</span>
      <span className="text-gray-500 line-through">{formatPrice(originalPrice)}</span>
      <span className="text-red-500 font-semibold">-{discountPercentage}%</span>
    </div>
  );
};

// ProductDetails Component
type ProductDetailsProps = {
  rating: number;
  originalPrice: number;
  discountPercentage?: number;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ rating, originalPrice, discountPercentage }) => {
  return (
    <div className="flex flex-col items-start space-y-4">
      <StarRating rating={rating} />
      {discountPercentage !== undefined ? (
        <DiscountPrice originalPrice={originalPrice} discountPercentage={discountPercentage} />
      ) : (
        <div className="text-black font-bold">
          {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(originalPrice)}
        </div>
      )}
    </div>
  );
};

export default ProductDetails;

