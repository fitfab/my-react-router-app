import { defineConfig } from "drizzle-kit"

// Direct access to the environment variables
const connectionString = process.env.VITE_SUPABASE_CONN_STRING

export default defineConfig({
  schema: "./app/db/schema.ts",
  out: "./app/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: connectionString!,
  },
  verbose: true,
  strict: true,
})
