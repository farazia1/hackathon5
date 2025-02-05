import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const SHIPPO_API_KEY = process.env.SHIPPO_API_KEY;

// Debugging: Check if API key is being loaded correctly
console.log("Shippo API Key:", SHIPPO_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { trackingNumber, carrier } = body;

        if (!trackingNumber || !carrier) {
            return NextResponse.json({ message: "Tracking number and carrier are required." }, { status: 400 });
        }

        const trackingDetails = await axios.get(
            `https://api.goshippo.com/tracks/${carrier}/${trackingNumber}`,
            {
                headers: {
                    Authorization: `ShippoToken ${SHIPPO_API_KEY}`, // Ensure "Bearer" is included
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );

        return NextResponse.json({ trackingDetails: trackingDetails.data }, { status: 200 });

    } catch (error: unknown) {
        console.error("Error fetching tracking details:", error);

        if (error instanceof Error) {
            return NextResponse.json(
                {
                    message: "Failed to fetch tracking details.",
                    error: error.message,
                },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: "An unknown error occurred." },
            { status: 500 }
        );
    }
}
