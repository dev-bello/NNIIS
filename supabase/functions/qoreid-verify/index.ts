import { corsHeaders } from "../_shared/cors.ts";

const QOREID_API_URL = "https://api.qoreid.com";
const QOREID_CLIENT_ID = Deno.env.get("QOREID_CLIENT_ID") ?? "";
const QOREID_SECRET_KEY = Deno.env.get("QOREID_SECRET_KEY") ?? "";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { idType, idNumber, dob } = await req.json();

    // 1. Get an access token from QoreID
    const tokenResponse = await fetch(`${QOREID_API_URL}/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clientId: QOREID_CLIENT_ID,
        secret: QOREID_SECRET_KEY,
      }),
    });

    if (!tokenResponse.ok) {
      throw new Error("Failed to authenticate with QoreID");
    }

    const { accessToken } = await tokenResponse.json();

    // 2. Call the QoreID verification endpoint
    const verificationResponse = await fetch(
      `${QOREID_API_URL}/verify/${idType}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          id: idNumber,
          dateOfBirth: dob,
        }),
      }
    );

    if (!verificationResponse.ok) {
      throw new Error("ID verification failed");
    }

    const verificationData = await verificationResponse.json();

    // 3. Check if the verification was successful
    if (verificationData.summary.status === "verified") {
      return new Response(
        JSON.stringify({ success: true, data: verificationData }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        }
      );
    } else {
      return new Response(
        JSON.stringify({ success: false, message: "Verification failed" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400,
        }
      );
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
});
