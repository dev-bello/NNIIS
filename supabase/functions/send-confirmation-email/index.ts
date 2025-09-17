import { serve } from "https://deno.land/std@0.201.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { email } = await req.json();

    // This is a placeholder for the actual email sending logic.
    // In a real application, you would use an email service like SendGrid or AWS SES.
    console.log(`Sending confirmation email to ${email}`);

    return new Response(
      JSON.stringify({ message: "Confirmation email sent" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
});
