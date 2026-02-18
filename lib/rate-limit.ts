import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { env } from "@/lib/env";

let client: Redis | null = null;
let rateLimiter: Ratelimit | null = null;
const memoryBucket = new Map<string, { count: number; resetAt: number }>();

function getRateLimiter() {
  if (rateLimiter) {
    return rateLimiter;
  }

  if (env.UPSTASH_REDIS_REST_URL && env.UPSTASH_REDIS_REST_TOKEN) {
    client =
      client ??
      new Redis({
        url: env.UPSTASH_REDIS_REST_URL,
        token: env.UPSTASH_REDIS_REST_TOKEN,
      });
    rateLimiter = new Ratelimit({
      redis: client,
      limiter: Ratelimit.slidingWindow(10, "1 m"),
      analytics: true,
    });
    return rateLimiter;
  }

  return null;
}

export async function checkRateLimit(key: string, limit = 10, windowMs = 60_000) {
  const limiter = getRateLimiter();

  if (limiter) {
    const result = await limiter.limit(key);
    return {
      success: result.success,
      limit: result.limit,
      remaining: result.remaining,
    };
  }

  const now = Date.now();
  const existing = memoryBucket.get(key);
  if (!existing || existing.resetAt < now) {
    memoryBucket.set(key, { count: 1, resetAt: now + windowMs });
    return { success: true, limit, remaining: limit - 1 };
  }

  existing.count += 1;
  memoryBucket.set(key, existing);
  return {
    success: existing.count <= limit,
    limit,
    remaining: Math.max(0, limit - existing.count),
  };
}
