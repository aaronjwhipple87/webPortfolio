import "server-only";

const hits = new Map<string, number[]>();

/**
 * Sliding-window limiter kept in memory. On serverless it is per instance, so it
 * slows down casual abuse rather than guaranteeing a global limit.
 */
export function rateLimit(key: string, { limit, windowMs }: { limit: number; windowMs: number }) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((time) => now - time < windowMs);
  if (recent.length >= limit) {
    hits.set(key, recent);
    return false;
  }
  recent.push(now);
  hits.set(key, recent);
  return true;
}
