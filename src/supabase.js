// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

// Replace with your Supabase project URL and API key
const SUPABASE_URL = "https://awnetmgqftagwqsdzgkd.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bmV0bWdxZnRhZ3dxc2R6Z2tkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIyOTgwMTAsImV4cCI6MjA0Nzg3NDAxMH0._LkLHyWp_LLqKF6tIrvnHseOPUfjIR1i9HiMCJTh7_Q";

// Create a Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
