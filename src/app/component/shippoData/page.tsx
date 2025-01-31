"use client";
import React, { useState } from "react";

type ShipmentDetails = {
  orderId: string;
  trackingNumber: string;
  totalAmount: number;
  eta: string;
  status: string;
};

type TrackingData = {
  status: string;
};

const ShippoData = () => {
  const [shipmentDetails, setShipmentDetails] = useState<ShipmentDetails | null>(null);
  const [trackingNumber, setTrackingNumber] = useState<string>("");
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);

  const handleCheckout = async () => {
    const response = await fetch("/api/shippoOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        addressFrom: { /* Sender Address */ },
        addressTo: { /* Receiver Address */ },
        parcels: [{ /* Parcel Details */ }],
        orderId: "ORDER12345",
        totalAmount: 199.99,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      setShipmentDetails(data);
    }
  };

  const handleTrackShipment = async () => {
    const response = await fetch("/api/liveTracking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ trackingNumber, carrier: "shippo" }),
    });

    const data = await response.json();
    if (response.ok) {
      setTrackingData(data.trackingDetails);
    }
  };

  return (
    <div className="p-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleCheckout}>
        Checkout
      </button>
      {shipmentDetails && (
        <div className="mt-4">
          <p>Order ID: {shipmentDetails.orderId}</p>
          <p>Tracking Number: {shipmentDetails.trackingNumber}</p>
        </div>
      )}
      <input
        type="text"
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
        placeholder="Enter Tracking Number"
        className="border mt-4 p-2"
      />
      <button className="bg-green-500 text-white px-4 py-2 rounded mt-2" onClick={handleTrackShipment}>
        Track
      </button>
      {trackingData && <p className="mt-2">Tracking Status: {trackingData.status}</p>}
    </div>
  );
};

export default ShippoData;
