import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";

Deno.serve(async (req) => {
  // This is needed if you're planning to invoke your function from a browser.
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { exhibitorData } = await req.json();

    // Create a Supabase client with the service role key
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Create the user in auth.users
    const { data: authData, error: authError } =
      await supabaseAdmin.auth.admin.createUser({
        email: exhibitorData.email,
        password: Math.random().toString(36).slice(-8),
        user_metadata: {
          company_name: exhibitorData.company_name,
          type: "exhibitor",
        },
        email_confirm: true, // You might want to set this to false and send a confirmation email
      });

    if (authError) {
      throw authError;
    }

    // Insert into the exhibitors table
    const { error: insertError } = await supabaseAdmin
      .from("exhibitors")
      .insert([
        {
          id: authData.user.id,
          company_name: exhibitorData.company_name,
          email: exhibitorData.email,
          industry: exhibitorData.industry,
          website: exhibitorData.website,
          package: exhibitorData.package,
        },
      ]);

    if (insertError) {
      // If the insert fails, you might want to delete the user from auth.users
      await supabaseAdmin.auth.admin.deleteUser(authData.user.id);
      throw insertError;
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
});
