import { integer, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core"
export const addressTable = pgTable("address_table", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name").notNull(),
  street: varchar("street").notNull(),
  number: integer("number").notNull(),
  city: varchar("city").notNull(),
  state: varchar("state").notNull(),
  zip: integer("zip").notNull(),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
})
