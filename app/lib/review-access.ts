export const ACCESS_COOKIE = "aveta_review_access";
export const REVIEW_PASSWORD = process.env.SITE_PASSWORD;

export async function accessTokenFor(password: string) {
  const bytes = new TextEncoder().encode(
    `aveta-biomics-review-v1:${password}`,
  );
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, "0"),
  ).join("");
}

export function safePasswordMatch(received: string, expected: string) {
  if (received.length !== expected.length) return false;
  let difference = 0;
  for (let index = 0; index < expected.length; index += 1) {
    difference |= received.charCodeAt(index) ^ expected.charCodeAt(index);
  }
  return difference === 0;
}
