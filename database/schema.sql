-- Database schema for the portfolio (SQLite dialect), generated with:
--   python manage.py sqlmigrate portfolio 0001
-- Django creates this for you when you run: python manage.py migrate

BEGIN;
--
-- Create model ContactMessage
--
CREATE TABLE "portfolio_contactmessage" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "name" varchar(120) NOT NULL, "email" varchar(254) NOT NULL, "message" text NOT NULL, "created_at" datetime NOT NULL);
--
-- Create model Education
--
CREATE TABLE "portfolio_education" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "kind" varchar(20) NOT NULL, "title" varchar(200) NOT NULL, "place" varchar(200) NOT NULL, "year" varchar(10) NOT NULL, "text" text NOT NULL, "order" smallint unsigned NOT NULL CHECK ("order" >= 0));
--
-- Create model Experience
--
CREATE TABLE "portfolio_experience" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "role" varchar(120) NOT NULL, "company" varchar(120) NOT NULL, "project" varchar(200) NOT NULL, "tech" text NOT NULL, "points" text NOT NULL, "order" smallint unsigned NOT NULL CHECK ("order" >= 0));
--
-- Create model Profile
--
CREATE TABLE "portfolio_profile" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "name" varchar(120) NOT NULL, "role" varchar(120) NOT NULL, "location" varchar(120) NOT NULL, "email" varchar(254) NOT NULL, "phone" varchar(30) NOT NULL, "linkedin" varchar(200) NOT NULL, "github" varchar(200) NOT NULL, "summary" text NOT NULL, "about" text NOT NULL);
--
-- Create model Project
--
CREATE TABLE "portfolio_project" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "title" varchar(200) NOT NULL, "subtitle" varchar(200) NOT NULL, "tech" text NOT NULL, "points" text NOT NULL, "github_url" varchar(200) NOT NULL, "live_url" varchar(200) NOT NULL, "order" smallint unsigned NOT NULL CHECK ("order" >= 0));
--
-- Create model SkillGroup
--
CREATE TABLE "portfolio_skillgroup" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "name" varchar(80) NOT NULL, "items" text NOT NULL, "order" smallint unsigned NOT NULL CHECK ("order" >= 0));
COMMIT;
