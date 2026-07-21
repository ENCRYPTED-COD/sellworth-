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

    console.log("Incoming body:", body);

    const lead = await createLead(body);

    return NextResponse.json({
      success: true,
      lead,
    });
  } catch (error: any) {
    console.error("FULL ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error?.message,
        code: error?.code,
        stack: error?.stack,
      },
      { status: 500 }
    );
  }
}