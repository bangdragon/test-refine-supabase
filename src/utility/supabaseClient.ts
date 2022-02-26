import { createClient } from "@pankod/refine-supabase";

const SUPABASE_URL = "https://wqixyunkzhnfswvclhup.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTgwMjMwMiwiZXhwIjoxOTQ3Mzc4MzAyfQ.0o0LmOfStllVWQJpivzU74gqSo4TUsg_zjkTlL_bvbI";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);
