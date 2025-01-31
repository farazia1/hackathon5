import { NextRequest, NextResponse, } from "next/server";

export function GET(request:NextRequest){
    console.log(request)
    const url = request.nextUrl;
    return  NextResponse.json({url:url});

}
export function POST(request:NextRequest){}