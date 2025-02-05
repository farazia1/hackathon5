import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

// Sender Address
const addressFrom = {
  name: "John Doe",
  street1: "123 Main St",
  street2: "",
  city: "Los Angeles",
  state: "CA",
  zip: "90001",
  country: "US",
  phone: "555-123-4567",
  email: "johndoe@example.com",
};

// Receiver Address
const addressTo = {
  name: "Jane Smith",
  street1: "456 Elm St",
  street2: "Apt 7",
  city: "New York",
  state: "NY",
  zip: "10001",
  country: "US",
  phone: "555-987-6543",
  email: "janesmith@example.com",
};

// Parcel Details
const parcels = [
  {
    length: "10",
    width: "8",
    height: "6",
    distance_unit: "in",
    weight: "2",
    mass_unit: "lb",
  },
];







// Sample data for GET request
const testResponse = {
  message: "Shippo API is working! Send a POST request to create a shipment.",
};

// ✅ Allow GET request for testing
export async function GET() {
  return NextResponse.json(testResponse, { status: 200 });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { orderId, totalAmount } = body;

    if (!orderId || !totalAmount) {
      return NextResponse.json({ message: "Missing order details" }, { status: 400 });
    }

    const response = await axios.post(
      "https://api.goshippo.com/shipments/",
      {
        address_from: addressFrom,
        address_to: addressTo,
        parcels,
        async: false,
      },
      {
        headers: {
          Authorization: "ShippoToken shippo_test_792d0dff16deacef3e21e2fd46fe0cc780bd0c41",
          "Content-Type": "application/json",
        },
      }
    );

    const shipment = response.data;
    return NextResponse.json(
      {
        orderId,
        totalAmount,
        trackingNumber: shipment.object_id,
        eta: shipment.eta || "3-5 business days",
        status: "Shipment created successfully!",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Shipment creation error:", error);

    if (error instanceof Error) {
      return NextResponse.json(
        { message: "Failed to create shipment", error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Failed to create shipment due to an unknown error." },
      { status: 500 }
    );
  }
}
