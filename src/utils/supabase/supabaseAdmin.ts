import { createClient } from "@supabase/supabase-js";
const supabase_url = process.env.REACT_APP_SUPABASE_URL as string;
const service_role_key = process.env
  .REACT_APP_SUPABASE_SERVICE_ROLE_KEY as string;

const supabase = createClient(supabase_url, service_role_key, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

export const supabaseAuthAdmin = supabase.auth.admin;
