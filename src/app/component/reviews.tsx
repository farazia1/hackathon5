"use client";

import { useState, useEffect } from "react";

interface Review {
  id: number;
  name: string;
  rating: number;
  review: string;
  date: string; // Added 'date' field
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Fetch reviews on component mount
  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch(() => setError("Failed to load reviews"));
  }, []);

  // Handle form submission for new review
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || rating === 0 || !review) {
      setError("Please fill all fields and select a rating.");
      return;
    }

    const newReview: Review = {
      id: Date.now(),
      name,
      rating,
      review,
      date: new Date().toLocaleDateString(),
    };

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      });

      if (!res.ok) throw new Error("Failed to submit review");

      const savedReview = await res.json();
      setReviews((prev) => [...prev, savedReview]);
      setName("");
      setRating(0);
      setReview("");
      setError(null); // Clear error after successful submission
    } catch {
      setError("Failed to submit review");
    }
  };

  // Pagination Handlers
  const handleNext = () => {
    if (currentIndex + 3 < reviews.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {/* Reviews Section */}
      <div className="w-full max-w-4xl mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
           Our Happy Customers
          </h2>
          <div className="space-x-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`text-gray-500  ${
                currentIndex > 0
                  ? "hover:text-blue-500"
                  : "cursor-not-allowed opacity-50"
              }`}
            >
              ←
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex + 3 >= reviews.length}
              className={`text-gray-500 ${
                currentIndex + 3 < reviews.length
                  ? "hover:text-blue-500"
                  : "cursor-not-allowed opacity-50"
              }`}
            >
              →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {visibleReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
            >
              {/* Star Ratings */}
              <div className="flex items-center  space-x-1 mb-4">
                {[...Array(rev.rating)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-yellow-400"
                  >
                    <path d="M12 .587l3.668 7.431L24 9.588l-6 5.847L19.336 24 12 20.012 4.664 24 6 15.435 0 9.588l8.332-1.57L12 .587z" />
                  </svg>
                ))}
              </div>
              {/* Review Content */}
              <div className="text-gray-800 ">
                <p className="font-bold text-lg">{rev.name}</p>
                <p className="mt-2 text-gray-600 italic">{rev.review}</p>
                <p className="mt-4 text-gray-500 text-sm">{rev.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-xl font-bold text-gray-800 mb-4 text-center">
          Leave a Review
        </h1>
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value={0} disabled>
              Select Rating
            </option>
            {[1, 2, 3, 4, 5].map((star) => (
              <option key={star} value={star}>
                {star} Stars
              </option>
            ))}
          </select>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Your Review"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            rows={3}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
