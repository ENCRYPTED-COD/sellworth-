import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Path to our experimental local JSON database
const dataFilePath = path.join(process.cwd(), "src", "data", "experimental.json");

export async function GET() {
  try {
    const fileContents = fs.readFileSync(dataFilePath, "utf8");
    const properties = JSON.parse(fileContents);
    return NextResponse.json(properties);
  } catch (error) {
    console.error("Error reading experimental.json:", error);
    return NextResponse.json({ error: "Failed to load properties" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const newProperty = await request.json();
    
    // Validate basic fields
    if (!newProperty.name || !newProperty.category || !newProperty.area || !newProperty.price) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Generate a unique ID
    newProperty.id = `ext_${Date.now()}`;

    // Read existing
    const fileContents = fs.readFileSync(dataFilePath, "utf8");
    const properties = JSON.parse(fileContents);

    // Append new
    properties.push(newProperty);

    // Write back
    fs.writeFileSync(dataFilePath, JSON.stringify(properties, null, 2), "utf8");

    return NextResponse.json({ success: true, property: newProperty }, { status: 201 });
  } catch (error) {
    console.error("Error writing to experimental.json:", error);
    return NextResponse.json({ error: "Failed to save property" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const updatedProperty = await request.json();
    if (!updatedProperty.id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    const fileContents = fs.readFileSync(dataFilePath, "utf8");
    let properties = JSON.parse(fileContents);
    
    properties = properties.map((p: any) => 
      p.id === updatedProperty.id ? { ...p, ...updatedProperty } : p
    );
    
    fs.writeFileSync(dataFilePath, JSON.stringify(properties, null, 2), "utf8");
    return NextResponse.json({ success: true, property: updatedProperty });
  } catch (error) {
    console.error("Error updating experimental.json:", error);
    return NextResponse.json({ error: "Failed to update property" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ error: "Missing id parameter" }, { status: 400 });

    const fileContents = fs.readFileSync(dataFilePath, "utf8");
    let properties = JSON.parse(fileContents);
    
    properties = properties.filter((p: any) => p.id !== id);
    
    fs.writeFileSync(dataFilePath, JSON.stringify(properties, null, 2), "utf8");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting from experimental.json:", error);
    return NextResponse.json({ error: "Failed to delete property" }, { status: 500 });
  }
}
