CREATE TABLE IF NOT EXISTS "project_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"technologies" text[] DEFAULT '{}'::text[] NOT NULL,
	"client_name" varchar(255) NOT NULL,
	"images" text[] DEFAULT '{}'::text[] NOT NULL,
	"features" text[] DEFAULT '{}'::text[] NOT NULL,
	"github_repo" varchar(255) NOT NULL,
	"live_demo" varchar(255) NOT NULL,
	"importance" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp
);
