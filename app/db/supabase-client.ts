import { createClient } from "@supabase/supabase-js"
import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

/**
 * Supabase client using supabase-js
 */
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAPIKey = import.meta.env.VITE_SUPABASE_API_KEY
export const supabase = createClient(supabaseUrl, supabaseAPIKey)

/**
 * Supabase client using Drizzle ORM
 */
const connectionString = import.meta.env.VITE_SUPABASE_CONN_STRING

// Disable prefetch as it is not supported for "Transaction" pool mode
export const client = postgres(connectionString, { prepare: false })
export const db = drizzle(client)
