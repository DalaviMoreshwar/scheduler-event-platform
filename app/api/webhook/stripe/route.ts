import Stripe from "stripe";
import { NextResponse } from "next/server";
import { createOrder } from "@/lib/actions/order.actions";

export async function POST(request: Request) {
  const body = await request.text();

  const sig = request.headers.get("stripe-signature") as string;
  const endpointSecrete = process.env.STRIPE_WEBHOOK_SECRET!;

  let event;

  try {
    event = Stripe.webhooks.constructEvent(body, sig, endpointSecrete);
  } catch (error) {
    return NextResponse.json({ message: "Webhook Error", error });
  }

  // Get the ID and type
  const eventType = event.type;

  // Create
  if (eventType === "checkout.session.completed") {
    const { id, amount_total, metadata } = event.data.object;

    const order = {
      stripeId: id,
      eventId: metadata?.eventId || "",
      buyerId: metadata?.buyerId || "",
      totalAmount: amount_total ? (amount_total / 100).toString() : "0",
      createdAt: new Date(),
    };

    const newOrder = await createOrder(order);
    return NextResponse.json({ message: "OK", order: newOrder });
  }

  return new Response("", { status: 200 });
}
