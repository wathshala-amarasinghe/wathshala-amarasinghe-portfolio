import { isIP } from "node:net";
import { CONTACT_BODY_LIMIT_BYTES } from "./contact";

type BodyResult =
  { ok: true; text: string } | { ok: false; status: number; error: string };

export async function readContactBody(request: Request): Promise<BodyResult> {
  const tooLarge = {
    ok: false,
    status: 413,
    error: "Request body is too large.",
  } as const;
  const length = request.headers.get("content-length");
  if (length !== null && !/^\d+$/.test(length)) {
    return { ok: false, status: 400, error: "Invalid Content-Length header." };
  }
  if (length !== null && Number(length) > CONTACT_BODY_LIMIT_BYTES) {
    return tooLarge;
  }

  const reader = request.body?.getReader();
  if (!reader) return { ok: true, text: "" };

  let timedOut = false;
  const timer = setTimeout(() => {
    timedOut = true;
    void reader.cancel().catch(() => undefined);
  }, 5_000);
  const decoder = new TextDecoder("utf-8", { fatal: true });
  let bytes = 0;
  let text = "";
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (timedOut) {
        return { ok: false, status: 408, error: "Request body timed out." };
      }
      if (done) return { ok: true, text: text + decoder.decode() };
      bytes += value.byteLength;
      if (bytes > CONTACT_BODY_LIMIT_BYTES) {
        void reader.cancel().catch(() => undefined);
        return tooLarge;
      }
      text += decoder.decode(value, { stream: true });
    }
  } catch {
    void reader.cancel().catch(() => undefined);
    return { ok: false, status: 400, error: "Unable to read request body." };
  } finally {
    clearTimeout(timer);
    reader.releaseLock();
  }
}

const WINDOW_MS = 10 * 60 * 1_000;
const ATTEMPTS_PER_WINDOW = 5;
const MAX_TRACKED_CLIENTS = 1_024;
const attempts = new Map<string, { count: number; expiresAt: number }>();

// This is a per-instance SMTP guard. Use an edge rate limit for a shared quota.
export function reserveContactAttempt(headers: Headers): number {
  const address =
    process.env.VERCEL === "1"
      ? headers.get("x-vercel-forwarded-for")?.trim()
      : undefined;
  const client = address && isIP(address) ? address : "shared";
  const now = Date.now();
  for (const [key, entry] of attempts) {
    if (entry.expiresAt <= now) attempts.delete(key);
  }

  const entry = attempts.get(client);
  if (entry) {
    if (entry.count >= ATTEMPTS_PER_WINDOW) {
      return Math.ceil((entry.expiresAt - now) / 1_000);
    }
    entry.count += 1;
  } else {
    if (attempts.size >= MAX_TRACKED_CLIENTS) {
      return Math.ceil(WINDOW_MS / 1_000);
    }
    attempts.set(client, { count: 1, expiresAt: now + WINDOW_MS });
  }
  return 0;
}
