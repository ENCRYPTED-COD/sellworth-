import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

console.log("========== FIREBASE DEBUG ==========");
console.log("Project ID:", projectId ? "FOUND" : "MISSING");
console.log("Client Email:", clientEmail ? "FOUND" : "MISSING");
console.log("Private Key:", privateKey ? "FOUND" : "MISSING");
console.log("====================================");

if (!getApps().length) {
  if (!projectId || !clientEmail || !privateKey) {
    throw new Error("Firebase Admin credentials are missing.");
  }

  initializeApp({
    credential: cert({
      projectId,
      clientEmail,
      privateKey,
    }),
  });

  console.log("✅ Firebase Admin initialized");
}

export const db = getFirestore();