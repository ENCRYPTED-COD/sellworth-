import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const files = formData.getAll("file") as File[];
    
    if (!files || files.length === 0) {
      return NextResponse.json({ error: "No files uploaded" }, { status: 400 });
    }

    const uploadDir = path.join(process.cwd(), "public", "uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const uploadedPaths = [];

    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const safeName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, "_");
      const uniqueName = `${Date.now()}-${safeName}`;
      const filePath = path.join(uploadDir, uniqueName);
      
      fs.writeFileSync(filePath, buffer);
      uploadedPaths.push(`/uploads/${uniqueName}`);
    }

    return NextResponse.json({ success: true, fileUrls: uploadedPaths });
  } catch (err: any) {
    console.error("Upload Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
