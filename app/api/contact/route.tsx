import clientPromise from "../../../lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // const body = await req.json();
  // const { name, email, phone, organization, message } = body;

  // // 👉 Here you can save to DB or send email
  // console.log("Form Data:", { name, email, phone, organization, message });

  // return NextResponse.json({ message: "Thank you! We’ll get back to you soon." });
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    await db.collection("customer_contacts").insertOne({
      name: body.name,
      email: body.email,
      message: body.message,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, message: "Form saved!" });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}