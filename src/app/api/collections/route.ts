import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Path to our experimental local JSON database for collections
const dataFilePath = path.join(process.cwd(), "src", "data", "collections.json");

export async function GET() {
  try {
    const fileContents = fs.readFileSync(dataFilePath, "utf8");
    const collections = JSON.parse(fileContents);
    return NextResponse.json(collections);
  } catch (error) {
    console.error("Error reading collections.json:", error);
    return NextResponse.json({ error: "Failed to load collections" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const newCollection = await request.json();
    
    // Validate basic fields
    if (!newCollection.name || !newCollection.category) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Generate a unique ID if not present
    newCollection.id = newCollection.id || `col_${Date.now()}`;
    newCollection.slug = newCollection.slug || newCollection.id;

    // Read existing
    const fileContents = fs.readFileSync(dataFilePath, "utf8");
    const collections = JSON.parse(fileContents);

    // Append new
    collections.push(newCollection);

    // Write back
    fs.writeFileSync(dataFilePath, JSON.stringify(collections, null, 2), "utf8");

    return NextResponse.json({ success: true, collection: newCollection }, { status: 201 });
  } catch (error) {
    console.error("Error writing to collections.json:", error);
    return NextResponse.json({ error: "Failed to save collection" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const updatedCollection = await request.json();
    if (!updatedCollection.id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    const fileContents = fs.readFileSync(dataFilePath, "utf8");
    let collections = JSON.parse(fileContents);
    
    collections = collections.map((p: any) => 
      p.id === updatedCollection.id ? { ...p, ...updatedCollection } : p
    );
    
    fs.writeFileSync(dataFilePath, JSON.stringify(collections, null, 2), "utf8");
    return NextResponse.json({ success: true, collection: updatedCollection });
  } catch (error) {
    console.error("Error updating collections.json:", error);
    return NextResponse.json({ error: "Failed to update collection" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ error: "Missing id parameter" }, { status: 400 });

    const fileContents = fs.readFileSync(dataFilePath, "utf8");
    let collections = JSON.parse(fileContents);
    
    collections = collections.filter((p: any) => p.id !== id);
    
    fs.writeFileSync(dataFilePath, JSON.stringify(collections, null, 2), "utf8");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting from collections.json:", error);
    return NextResponse.json({ error: "Failed to delete collection" }, { status: 500 });
  }
}
