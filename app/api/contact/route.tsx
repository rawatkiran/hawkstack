import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, organization, message } = body;

  // 👉 Here you can save to DB or send email
  console.log("Form Data:", { name, email, phone, organization, message });

  return NextResponse.json({ message: "Thank you! We’ll get back to you soon." });
}