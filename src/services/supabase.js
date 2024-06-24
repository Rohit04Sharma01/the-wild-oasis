import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://naymwdgkbtpwihfupydt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5heW13ZGdrYnRwd2loZnVweWR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg5NTE5MTgsImV4cCI6MjAzNDUyNzkxOH0.6IDJQSg7ctO1WNMMuR9DZN01O1I9fmhbMVrzJmMFKEs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
