import { createClient } from "@supabase/supabase-js";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase URL or key");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "POST") {
    const {
      fullName,
      email,
      phone,
      organization,
      role,
      sectorOfFocus,
      userType,
      impact,
      whyAttend,
    } = req.body;

    const { data, error } = await supabase.from("registrations").insert([
      {
        full_name: fullName,
        email,
        phone,
        organization,
        role,
        sector_of_focus: sectorOfFocus,
        user_type: userType,
        impact,
        why_attend: whyAttend,
      },
    ]);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ data });
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
