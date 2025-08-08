import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import QRCode from "qrcode";

const resend = new Resend(process.env.VITE_RESEND_API_KEY);

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  console.log("send-qr function called");
  try {
    const { record } = request.body;
    console.log("Request body:", request.body);
    const {
      id,
      email,
      full_name,
      masterclasses,
      company_name,
      contact_person,
    } = record;

    const isAttendee = !!full_name;

    const qrCodeData = `${process.env.VITE_BASE_URL}/retrieve-qr/${id}`;

    console.log("QR code data:", qrCodeData);

    const qrCodeImage = await QRCode.toDataURL(qrCodeData);

    await resend.emails.send({
      from: "NNIIS 2025 <noreply@nniis.org>",
      to: email,
      subject: "Your NNIIS 2025 QR Code",
      html: `<p>Here is your QR code for NNIIS 2025.</p>`,
      attachments: [
        {
          filename: "qrcode.png",
          content: Buffer.from(qrCodeImage.split("base64,")[1], "base64"),
        },
      ],
    });
    console.log("QR code email sent successfully");
    response.status(200).send("QR code email sent.");
  } catch (error) {
    console.error("Error in send-qr function:", error);
    response.status(500).send("Error sending QR code email.");
  }
}
