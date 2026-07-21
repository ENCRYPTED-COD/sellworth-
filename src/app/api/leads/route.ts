import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      success: true,
      message: "Lead API is working!",
      timestamp: new Date().toISOString(),
    },
    { status: 200 }
  );
}

export async function POST() {
  return NextResponse.json(
    {
      success: true,
      message: "POST route is working!",
    },
    { status: 200 }
  );
}