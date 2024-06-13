import { EmailTemplate } from "@/templates/email";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend("RESEND_API_KEY");

export async function POST(request: Request) {
  const body = await request.json();
  const { firstName, lastName, email, phone, text } = body;

  const { data, error } = await resend.emails.send({
    from: "Acessory Haven <onboarding@resend.dev>",
    to: ["avalynndev@gmail.com"],
    subject: "New Acessory Order",
    react: EmailTemplate({
      firstName,
      lastName,
      email,
      number: phone || "no phone number",
      text: text || "no message",
    }) as React.ReactElement,
  });

  if (error) {
    return Response.json({ error }, { status: 500 });
  }

  return Response.json({ data });
}
