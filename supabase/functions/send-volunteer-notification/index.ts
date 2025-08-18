import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createTransport } from "npm:nodemailer@6.9.7";

// Email address to send notifications to.
// It's recommended to set this as a Supabase secret.
const NOTIFICATION_EMAIL = Deno.env.get("NOTIFICATION_EMAIL")!;

serve(async (req) => {
  try {
    const { record } = await req.json();
    const {
      name,
      email,
      previous_activities,
      phone_number,
      state_of_origin,
      gender,
      state_of_residence,
    } = record;

    // Nodemailer transporter using Supabase SMTP settings
    const transporter = createTransport({
      host: Deno.env.get("SMTP_HOST")!,
      port: 587,
      secure: false, // STARTTLS
      auth: {
        user: Deno.env.get("SMTP_USER")!,
        pass: Deno.env.get("SMTP_PASS")!,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: "NNIIS 2025 <noreply@nniis.org>",
      to: NOTIFICATION_EMAIL,
      subject: "New Volunteer Application",
      html: `
        <h1>New Volunteer Application</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Previous Activities:</strong> ${
          previous_activities || "N/A"
        }</p>
        <p><strong>Phone Number:</strong> ${phone_number}</p>
        <p><strong>State of Origin:</strong> ${state_of_origin}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>State of Residence:</strong> ${state_of_residence}</p>
      `,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        headers: { "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
});
