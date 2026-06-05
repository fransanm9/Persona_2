import { createClient } from '@supabase/supabase-js';

// Estas URLs y clave las obtendrás de la persona 5 (DevOps) cuando levanten Supabase local.
// Por ahora las dejamos como marcadores de posición; la app no se romperá si no están definidas.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'http://localhost:54321';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0'; // clave de ejemplo

export const supabase = createClient(supabaseUrl, supabaseAnonKey);