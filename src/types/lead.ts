import { Timestamp } from "firebase-admin/firestore";

export type LeadStatus =
  | "New"
  | "Contacted"
  | "Site Visit"
  | "Negotiation"
  | "Closed"
  | "Lost";

export interface Lead {
  id?: string;

  name: string;
  phone: string;
  email?: string;

  source: string;

  inquiryType?: string;
  project?: string;
  budget?: string;
  city?: string;
  message?: string;

  status: LeadStatus;

  assignedTo?: string | null;
  tags?: string[];

  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

export interface CreateLeadRequest {
  name: string;
  phone: string;
  email?: string;

  source: string;

  inquiryType?: string;
  project?: string;
  budget?: string;
  city?: string;
  message?: string;
}