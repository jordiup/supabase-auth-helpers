/// <reference types="@sveltejs/kit" />
/// <reference types="@supabase/supabase-js" />
// import type { User } from '@supabase/supabase-js';

declare namespace App {
  interface Locals {
    user: User;
    accessToken: string | null;
    error: ApiError;
  }

  interface Platform {}

  interface Session {}

  interface Stuff {}
}
