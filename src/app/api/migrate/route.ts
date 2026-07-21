import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { properties } from "../../../data/properties";

export async function GET() {
  try {
    const dataFilePath = path.join(process.cwd(), "src", "data", "collections.json");
    
    // Add unique IDs to the static properties if they don't have them
    const mappedProperties = properties.map((p, index) => ({
      ...p,
      id: p.slug || `col_${Date.now()}_${index}`
    }));

    fs.writeFileSync(dataFilePath, JSON.stringify(mappedProperties, null, 2), "utf8");

    return NextResponse.json({ success: true, count: mappedProperties.length });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
