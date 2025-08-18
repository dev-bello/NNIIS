import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.VITE_RESEND_API_KEY);
const NOTIFICATION_EMAIL = "devbelloy@gmail.com"; // Replace with your email

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  try {
    const { record } = request.body;
    const {
      name,
      email,
      previous_activities,
      phone_number,
      state_of_origin,
      gender,
      state_of_residence,
    } = record;

    await resend.emails.send({
      from: "NNIIS 2025 <noreply@nniis.org>",
      to: NOTIFICATION_EMAIL,
      subject: "New Volunteer Application",
      html: `
        <h1>New Volunteer Application</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Previous Activities:</strong> ${previous_activities}</p>
        <p><strong>Phone Number:</strong> ${phone_number}</p>
        <p><strong>State of Origin:</strong> ${state_of_origin}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>State of Residence:</strong> ${state_of_residence}</p>
      `,
    });

    response.status(200).send("Notification email sent.");
  } catch (error) {
    console.error("Error in send-volunteer-notification function:", error);
    response.status(500).send("Error sending notification email.");
  }
}
