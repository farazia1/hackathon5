// "use client";
// import React, { useState } from "react";

// const ShippoData = () => {
//   const [cart, setCart] = useState([
//     {
//       id: "1",
//       name: "Library Stool Chair",
//       price: 99,
//       size: "L",
//       quantity: 1,
//       image: "/02.jpg",
//     },
//     {
//       id: "2",
//       name: "Library Stool Chair",
//       price: 99,
//       size: "L",
//       quantity: 1,
//       image: "/02.jpg",
//     },
//   ]);

//   const [shipmentDetails, setShipmentDetails] = useState<any | null>(null);
//   const [checkoutStatus, setCheckoutStatus] = useState<string | null>(null);
//   const [trackingNumber, setTrackingNumber] = useState("");
//   const [trackingData, setTrackingData] = useState<any | null>(null);
//   const [isTracking, setIsTracking] = useState(false);
//   const [shippingCharges, setShippingCharges] = useState<number>(0);

//   const handleCheckout = async () => {
//     const addressFrom = {
//       name: "E-commerce Store",
//       street1: "123 Store Lane",
//       city: "San Francisco",
//       state: "CA",
//       zip: "94107",
//       country: "US",
//     };

//     const addressTo = {
//       name: "John Doe",
//       street1: "456 User Street",
//       city: "New York",
//       state: "NY",
//       zip: "10001",
//       country: "US",
//     };

//     const parcels = cart.map(() => ({
//       length: "10",
//       width: "10",
//       height: "10",
//       distance_unit: "in",
//       weight: "5",
//       mass_unit: "lb",
//     }));

//     try {
//       const response = await fetch("/api/shippoOrder", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           addressFrom,
//           addressTo,
//           parcels,
//           orderId: "ORDER12345",
//           totalAmount: cart.reduce((total, item) => total + item.price, 0),
//         }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setShipmentDetails({
//           orderId: data.orderId,
//           totalAmount: data.totalAmount,
//           eta: data.eta,
//           trackingNumber: data.trackingNumber,
//         });

//         setShippingCharges(data.shippingCharges || 0);
//         setCheckoutStatus("Order placed successfully!");
//       } else {
//         setCheckoutStatus("Failed to place order. Please try again.");
//       }
//     } catch (error) {
//       console.error("Checkout Error:", error);
//       setCheckoutStatus("An error occurred. Please try again.");
//     }
//   };

//   const handleTrackShipment = async () => {
//     if (!trackingNumber) {
//       alert("Please enter a tracking number");
//       return;
//     }

//     setIsTracking(true);
//     try {
//       const carrier = "shippo";
//       const orderId = shipmentDetails?.orderId;
//       const response = await fetch("/api/liveTracking", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ trackingNumber, carrier, orderId }),
//       });

//       const data = await response.json();
//       if (response.ok && data?.trackingDetails) {
//         setTrackingData(data);
//       } else {
//         setTrackingData(null);
//       }
//     } catch (error) {
//       console.log("Error fetching tracking status:", error);
//       setTrackingData(null);
//     } finally {
//       setIsTracking(false);
//     }
//   };

//   return (
//     <div className="max-w-[1321px] mx-auto px-4 py-8 flex flex-col justify-center items-center ">
//           <div className="bg-white p-6 rounded-lg shadow-lg shadow-gray-600">
//             <button onClick={handleCheckout} className="w-full px-4 py-2 bg-black text-white rounded hover:bg-gray-900">
//               Order Details
//             </button>
//         </div>

//        {/* Shipment Details */}
//       {checkoutStatus && <p className="text-blue-600 mt-4 text-center text-3xl font-semibold">{checkoutStatus}</p>}
//       {shipmentDetails && (
//   <div className="mt-8 bg-green-100 p-6 rounded-lg">
//     <h3 className="text-xl font-bold">Shipment Details</h3>
//     <p>Order ID: {shipmentDetails.orderId}</p>
//     <p>Total Amount: ${shipmentDetails.totalAmount}</p>
//     <p>ETA: {shipmentDetails.eta}</p>
//     <p>Tracking Number: {shipmentDetails.trackingNumber || "Tracking information is not available yet."}</p>
//   </div>
// )}

//      {/* Track Shipment Card */}
// <div className="mt-6 bg-white p-6 rounded-lg  shadow-lg shadow-gray-600">
//   <h1 className="text-2xl font-bold mb-4">Track Your Shipment</h1>
//   <p className="p-2">Write (SHIPPO_TRANSIT) in input field to track history</p>
//   <div className="flex space-x-4 mb-6">
//     <input
//       type="text"
//       placeholder="Tracking Number"
//       value={trackingNumber}
//       onChange={(e) => setTrackingNumber(e.target.value)}
//       className="p-2 border rounded-md w-full"
//     />
//     <button
//       onClick={handleTrackShipment}
//       className="w-full px-4 py-2 bg-black text-white rounded hover:bg-gray-900"
//     >
//       Track Your Order
//     </button>
//   </div>
  
//   {isTracking && <p className="text-gray-500">Loading...</p>}
//         {trackingData && trackingData.trackingDetails && (
//           <div className="bg-gray-100 p-4 rounded-lg shadow-md">
//             <h2 className="text-lg font-bold mb-4">Shipment Tracking Details</h2>
//             <p><strong>Tracking Number:</strong> {trackingData.trackingDetails.tracking_number}</p>
//             <p><strong>Carrier:</strong> {trackingData.trackingDetails.carrier}</p>
//             <p><strong>Status:</strong> {trackingData.trackingDetails.status}</p>
//             <p><strong>Status Details:</strong> {trackingData.trackingDetails.status_details || "N/A"}</p>
//             <p><strong>ETA:</strong> {trackingData.trackingDetails.eta || "N/A"}</p>
//             <p><strong>Origin:</strong> {`${trackingData.trackingDetails.address_from.city}, ${trackingData.trackingDetails.address_from.state}, ${trackingData.trackingDetails.address_from.country}`}</p>
//             <p><strong>Destination:</strong> {`${trackingData.trackingDetails.address_to.city}, ${trackingData.trackingDetails.address_to.state}, ${trackingData.trackingDetails.address_to.country}`}</p>
//             <h3 className="text-lg font-bold mt-4">Tracking History</h3>
//             {trackingData.trackingDetails.tracking_history?.filter((historyItem: any) => historyItem.status === "TRANSIT").length > 0 ? (
//               <ul className="list-disc ml-6">
//                 {trackingData.trackingDetails.tracking_history.filter((historyItem: any) => historyItem.status === "TRANSIT").map((historyItem: any, index: number) => (
//                   <li key={index}>
//                     <p><strong>Date:</strong> {new Date(historyItem.status_date).toLocaleString()}</p>
//                     <p><strong>Location:</strong> {`${historyItem.location?.city || "N/A"}, ${historyItem.location?.state || "N/A"}, ${historyItem.location?.country || "N/A"}`}</p>
//                     <p><strong>Status:</strong> {historyItem.status}</p>
//                     <p><strong>Details:</strong> {historyItem.status_details || "N/A"}</p>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p>No tracking history with status 'TRANSIT'.</p>
//             )}
//           </div>
//         )}
//         {!trackingData && !isTracking && (
//           <p className="text-gray-500">Enter a tracking number to see shipment details.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ShippoData;
"use client"; // Indicating this is a client component

import React, { useState } from "react";

interface ShipmentDetails {
  orderId: string;
  totalAmount: number;
  eta: string;
  trackingNumber: string;
}

interface TrackingData {
  trackingDetails: {
    tracking_number: string;
    carrier: string;
    status: string;
    status_details?: string;
    eta?: string;
    address_from: { city: string; state: string; country: string };
    address_to: { city: string; state: string; country: string };
    tracking_history?: { status: string; status_date: string; location?: { city: string; state: string; country: string }; status_details?: string }[];
  };
}

const ShippoData = () => {
  const [shipmentDetails, setShipmentDetails] = useState<ShipmentDetails | null>(null);
  const [checkoutStatus, setCheckoutStatus] = useState<string | null>(null);
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);
  const [isTracking, setIsTracking] = useState(false);

  const handleCheckout = async () => {
    const addressFrom = { name: "E-commerce Store", street1: "123 Store Lane", city: "San Francisco", state: "CA", zip: "94107", country: "US" };
    const addressTo = { name: "John Doe", street1: "456 User Street", city: "New York", state: "NY", zip: "10001", country: "US" };
    const parcels = [{ length: "10", width: "10", height: "10", distance_unit: "in", weight: "5", mass_unit: "lb" }];

    try {
      const response = await fetch("/api/shippoOrder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          addressFrom,
          addressTo,
          parcels,
          orderId: "ORDER12345",
          totalAmount: 99,  // Example totalAmount
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setShipmentDetails({ orderId: data.orderId, totalAmount: data.totalAmount, eta: data.eta, trackingNumber: data.trackingNumber });
        setCheckoutStatus("Order placed successfully!");
      } else {
        setCheckoutStatus("Failed to place order. Please try again.");
      }
    } catch (error) {
      console.error("Checkout Error:", error);
      setCheckoutStatus("An error occurred. Please try again.");
    }
  };

  const handleTrackShipment = async () => {
    if (!trackingNumber) {
      alert("Please enter a tracking number");
      return;
    }

    setIsTracking(true);
    try {
      const carrier = "shippo";
      const orderId = shipmentDetails?.orderId;
      const response = await fetch("/api/liveTracking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ trackingNumber, carrier, orderId }),
      });

      const data = await response.json();
      if (response.ok && data?.trackingDetails) {
        setTrackingData(data);
      } else {
        setTrackingData(null);
      }
    } catch (error) {
      console.log("Error fetching tracking status:", error);
      setTrackingData(null);
    } finally {
      setIsTracking(false);
    }
  };

  return (
    <div className="max-w-[1321px] mx-auto px-4 py-8 flex flex-col justify-center items-center ">
      <div className="bg-white p-6 rounded-lg shadow-lg shadow-gray-600">
        <button onClick={handleCheckout} className="w-full px-4 py-2 bg-black text-white rounded hover:bg-gray-900">
          Order Details
        </button>
      </div>

      {/* Shipment Details */}
      {checkoutStatus && <p className="text-blue-600 mt-4 text-center text-3xl font-semibold">{checkoutStatus}</p>}
      {shipmentDetails && (
        <div className="mt-8 bg-green-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold">Shipment Details</h3>
          <p>Order ID: {shipmentDetails.orderId}</p>
          <p>Total Amount: ${shipmentDetails.totalAmount}</p>
          <p>ETA: {shipmentDetails.eta}</p>
          <p>Tracking Number: {shipmentDetails.trackingNumber || "Tracking information is not available yet."}</p>
        </div>
      )}

      {/* Track Shipment Card */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-lg shadow-gray-600">
        <h1 className="text-2xl font-bold mb-4">Track Your Shipment</h1>
        <p className="p-2">Write (SHIPPO_TRANSIT) in input field to track history</p>
        <div className="flex space-x-4 mb-6">
          <input
            type="text"
            placeholder="Tracking Number"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            className="p-2 border rounded-md w-full"
          />
          <button
            onClick={handleTrackShipment}
            className="w-full px-4 py-2 bg-black text-white rounded hover:bg-gray-900"
          >
            Track Your Order
          </button>
        </div>
        {isTracking && <p className="text-gray-500">Loading...</p>}

        {trackingData?.trackingDetails ? (
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Shipment Tracking Details</h2>
            <p><strong>Tracking Number:</strong> {trackingData.trackingDetails.tracking_number}</p>
            <p><strong>Carrier:</strong> {trackingData.trackingDetails.carrier}</p>
            <p><strong>Status:</strong> {trackingData.trackingDetails.status}</p>
            <p><strong>Status Details:</strong> {trackingData.trackingDetails.status_details || "N/A"}</p>
            <p><strong>ETA:</strong> {trackingData.trackingDetails.eta || "N/A"}</p>
            <p><strong>Origin:</strong> {`${trackingData.trackingDetails.address_from.city}, ${trackingData.trackingDetails.address_from.state}, ${trackingData.trackingDetails.address_from.country}`}</p>
            <p><strong>Destination:</strong> {`${trackingData.trackingDetails.address_to.city}, ${trackingData.trackingDetails.address_to.state}, ${trackingData.trackingDetails.address_to.country}`}</p>

            <h3 className="text-lg font-bold mt-4">Tracking History</h3>
            {trackingData.trackingDetails.tracking_history?.length ? (
              <ul className="list-disc ml-6">
                {trackingData.trackingDetails.tracking_history
                  .filter((historyItem) => historyItem.status === "TRANSIT")
                  .map((historyItem, index) => (
                    <li key={index}>
                      <p><strong>Date:</strong> {new Date(historyItem.status_date).toLocaleString()}</p>
                      <p><strong>Location:</strong> {`${historyItem.location?.city || "N/A"}, ${historyItem.location?.state || "N/A"}, ${historyItem.location?.country || "N/A"}`}</p>
                      <p><strong>Status:</strong> {historyItem.status}</p>
                      <p><strong>Details:</strong> {historyItem.status_details || "N/A"}</p>
                    </li>
                  ))}
              </ul>
            ) : (
              <p>No tracking history with status &apos;TRANSIT&apos;.</p>
            )}
          </div>
        ) : (
          <p className="text-gray-500">Enter a tracking number to see shipment details.</p>
        )}
      </div>
    </div>
  );
};

export default ShippoData;
