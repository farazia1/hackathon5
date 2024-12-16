// app/api/reviews/route.ts

import { NextResponse } from "next/server";

// Sample reviews data (in a real app, this would come from a database)
let reviews = [
  { id: 1, name: "Alice", rating: 5, review: "Excellent product!" },
  { id: 2, name: "Bob", rating: 4, review: "Very good, but could improve." }
];

// GET request to fetch all reviews
export async function GET() {
  return NextResponse.json(reviews);  // Returns the reviews as JSON
}

// POST request to submit a new review
export async function POST(request: Request) {
  try {
    const newReview = await request.json();  // Get the data from the request body
    newReview.id = reviews.length + 1;  // Assign a new ID
    reviews.push(newReview);  // Add the new review to the reviews array

    return NextResponse.json(newReview);  // Return the new review
  } catch (error) {
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}

  