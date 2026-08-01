import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("sellworth");
    const collections = await db.collection("collections").find({}).toArray();
    
    // Remove MongoDB _id and ensure id field exists
    const cleanedCollections = collections.map(p => {
      const { _id, ...rest } = p;
      return rest;
    });

    return NextResponse.json(cleanedCollections);
  } catch (error) {
    console.error("Error reading collections from MongoDB:", error);
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

    const client = await clientPromise;
    const db = client.db("sellworth");
    
    await db.collection("collections").insertOne(newCollection);
    
    const { _id, ...savedCollection } = newCollection;

    return NextResponse.json({ success: true, collection: savedCollection }, { status: 201 });
  } catch (error) {
    console.error("Error writing collection to MongoDB:", error);
    return NextResponse.json({ error: "Failed to save collection" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const updatedCollection = await request.json();
    if (!updatedCollection.id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    const client = await clientPromise;
    const db = client.db("sellworth");
    
    // We update by 'id' field, not '_id'
    const { _id, ...updateData } = updatedCollection;
    
    await db.collection("collections").updateOne(
      { id: updateData.id },
      { $set: updateData }
    );
    
    return NextResponse.json({ success: true, collection: updateData });
  } catch (error) {
    console.error("Error updating collection in MongoDB:", error);
    return NextResponse.json({ error: "Failed to update collection" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ error: "Missing id parameter" }, { status: 400 });

    const client = await clientPromise;
    const db = client.db("sellworth");
    
    await db.collection("collections").deleteOne({ id: id });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting collection from MongoDB:", error);
    return NextResponse.json({ error: "Failed to delete collection" }, { status: 500 });
  }
}
