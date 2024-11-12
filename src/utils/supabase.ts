import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL as string;
// const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY as string;
const supabaseUrl = "https://wrchkxovzkebzqazjrdf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyY2hreG92emtlYnpxYXpqcmRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0MDUzNDEsImV4cCI6MjA0Njk4MTM0MX0.8VPcG80pndfrUmnTnzspDoqmkEr3UpdX0B-lH110NKA";

export const supabase = createClient(supabaseUrl, supabaseKey);
