import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("sellworth");
    const properties = await db.collection("properties").find({}).toArray();
    
    // Remove MongoDB _id and ensure id field exists
    const cleanedProperties = properties.map(p => {
      const { _id, ...rest } = p;
      return rest;
    });

    return NextResponse.json(cleanedProperties);
  } catch (error) {
    console.error("Error reading from MongoDB:", error);
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

    // Generate a unique ID if not present
    newProperty.id = newProperty.id || `ext_${Date.now()}`;

    const client = await clientPromise;
    const db = client.db("sellworth");
    
    await db.collection("properties").insertOne(newProperty);
    
    const { _id, ...savedProperty } = newProperty;

    return NextResponse.json({ success: true, property: savedProperty }, { status: 201 });
  } catch (error) {
    console.error("Error writing to MongoDB:", error);
    return NextResponse.json({ error: "Failed to save property" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const updatedProperty = await request.json();
    if (!updatedProperty.id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    const client = await clientPromise;
    const db = client.db("sellworth");
    
    // We update by 'id' field, not '_id'
    const { _id, ...updateData } = updatedProperty;
    
    await db.collection("properties").updateOne(
      { id: updateData.id },
      { $set: updateData }
    );
    
    return NextResponse.json({ success: true, property: updateData });
  } catch (error) {
    console.error("Error updating MongoDB:", error);
    return NextResponse.json({ error: "Failed to update property" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ error: "Missing id parameter" }, { status: 400 });

    const client = await clientPromise;
    const db = client.db("sellworth");
    
    await db.collection("properties").deleteOne({ id: id });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting from MongoDB:", error);
    return NextResponse.json({ error: "Failed to delete property" }, { status: 500 });
  }
}
