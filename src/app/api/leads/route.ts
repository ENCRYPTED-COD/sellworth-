import { NextRequest, NextResponse } from "next/server";
import { createLead } from "@/services/leadService";

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Lead API is working!",
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const lead = await createLead(body);

    return NextResponse.json(
      {
        success: true,
        lead,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Lead creation failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create lead.",
      },
      { status: 500 }
    );
  }
}