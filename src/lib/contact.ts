export const CONTACT_BODY_LIMIT_BYTES = 16_384;

export const CONTACT_LIMITS = {
  name: 80,
  email: 254,
  message: 5_000,
} as const;

export type ContactSubmission = {
  user_name: string;
  user_email: string;
  message: string;
};

type ContactValidationResult =
  | { success: true; data: ContactSubmission }
  | { success: false; error: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTROL_CHARACTERS = /[\u0000-\u001f\u007f]/;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function validateContactSubmission(
  value: unknown
): ContactValidationResult {
  if (!isRecord(value)) {
    return { success: false, error: "Invalid request body." };
  }

  const { user_name, user_email, message } = value;

  if (
    typeof user_name !== "string" ||
    typeof user_email !== "string" ||
    typeof message !== "string"
  ) {
    return { success: false, error: "All fields must be text." };
  }

  const normalized = {
    user_name: user_name.trim(),
    user_email: user_email.trim().toLowerCase(),
    message: message.trim(),
  };

  if (!normalized.user_name || !normalized.user_email || !normalized.message) {
    return { success: false, error: "All fields are required." };
  }

  if (
    normalized.user_name.length > CONTACT_LIMITS.name ||
    normalized.user_email.length > CONTACT_LIMITS.email ||
    normalized.message.length > CONTACT_LIMITS.message
  ) {
    return { success: false, error: "One or more fields are too long." };
  }

  if (
    CONTROL_CHARACTERS.test(normalized.user_name) ||
    CONTROL_CHARACTERS.test(normalized.user_email)
  ) {
    return { success: false, error: "Name or email contains invalid text." };
  }

  if (!EMAIL_PATTERN.test(normalized.user_email)) {
    return { success: false, error: "Enter a valid email address." };
  }

  return { success: true, data: normalized };
}

export function escapeHtml(value: string): string {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character] ?? character
  );
}
