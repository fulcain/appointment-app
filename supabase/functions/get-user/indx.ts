// supabase/functions/get-users/index.ts
import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import { createClient } from "https://deno.land/x/supabase_js@1.35.8/mod.ts";

const supabaseUrl = Deno.env.get("SUPABASE_URL");
const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

const supabase = createClient(supabaseUrl, serviceRoleKey);

serve(async (req) => {
  const { data, error } = await supabase.auth.admin.listUsers();
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
  return new Response(JSON.stringify(data), { status: 200 });
});
