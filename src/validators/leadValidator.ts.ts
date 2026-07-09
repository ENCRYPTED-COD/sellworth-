import { CreateLeadRequest } from "@/types/lead";

export interface ValidationResult {
  valid: boolean;
  message?: string;
}

export function validateLead(data: CreateLeadRequest): ValidationResult {
  if (!data.name?.trim()) {
    return {
      valid: false,
      message: "Name is required",
    };
  }

  if (!data.phone?.trim()) {
    return {
      valid: false,
      message: "Phone number is required",
    };
  }

  if (!/^[6-9]\d{9}$/.test(data.phone)) {
    return {
      valid: false,
      message: "Invalid phone number",
    };
  }

  if (data.email) {
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(data.email)) {
      return {
        valid: false,
        message: "Invalid email address",
      };
    }
  }

  if (!data.source?.trim()) {
    return {
      valid: false,
      message: "Lead source is required",
    };
  }

  return {
    valid: true,
  };
}