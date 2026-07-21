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

    console.log("========== NEW LEAD ==========");
    console.log("Incoming Body:", JSON.stringify(body, null, 2));
    console.log("==============================");

    const lead = await createLead(body);

    return NextResponse.json(
      {
        success: true,
        message: "Lead created successfully.",
        lead,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("========== LEAD API ERROR ==========");
    console.error(error);
    console.error("====================================");

    return NextResponse.json(
      {
        success: false,
        message: "Lead creation failed.",
        error: {
          name: error?.name ?? null,
          message: error?.message ?? "Unknown error",
          code: error?.code ?? null,
          stack: error?.stack ?? null,
        },
      },
      { status: 500 }
    );
  }
}