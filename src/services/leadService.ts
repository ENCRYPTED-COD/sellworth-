import { Timestamp } from "firebase-admin/firestore";
import { db } from "@/lib/firebaseAdmin";
import { Lead, CreateLeadRequest } from "@/types/lead";

export async function createLead(
  data: CreateLeadRequest
): Promise<Lead> {
  const now = Timestamp.now();

  const lead: Lead = {
    ...data,
    status: "New",
    assignedTo: null,
    tags: [],
    createdAt: now,
    updatedAt: now,
  };

  if (db) {
    const docRef = await db.collection("leads").add(lead);
    return {
      id: docRef.id,
      ...lead,
    };
  } else {
    // If keys were removed from Hostinger, return dummy to prevent 503 crash
    return {
      id: "dummy_id_" + Date.now(),
      ...lead,
    };
  }
}