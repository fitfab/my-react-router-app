CREATE TABLE "address_table" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar NOT NULL,
	"street" varchar NOT NULL,
	"number" integer NOT NULL,
	"city" varchar NOT NULL,
	"state" varchar NOT NULL,
	"zip" integer NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
