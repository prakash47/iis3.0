import { revalidateTag } from "next/cache";
import { parseBody } from "next-sanity/webhook";
import { NextResponse, type NextRequest } from "next/server";

type WebhookBody = { _type?: string; slug?: { current?: string } };

/**
 * Sanity webhook -> on-demand ISR. Rejects when the secret is unset (red-team F10:
 * an undefined secret could skip signature validation and let anyone force
 * cache-busts / DoS the free tier). The secret is server-only (never NEXT_PUBLIC_).
 */
export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return new Response("Revalidation not configured", { status: 401 });
  }
  try {
    const { isValidSignature, body } = await parseBody<WebhookBody>(req, secret);
    if (!isValidSignature) return new Response("Invalid signature", { status: 401 });
    if (!body?._type) return new Response("Bad request", { status: 400 });

    revalidateTag(body._type, "max");
    if (body.slug?.current) revalidateTag(`${body._type}:${body.slug.current}`, "max");

    return NextResponse.json({ revalidated: true, type: body._type });
  } catch (err) {
    console.error("[revalidate] error:", err);
    return new Response("Error revalidating", { status: 500 });
  }
}
