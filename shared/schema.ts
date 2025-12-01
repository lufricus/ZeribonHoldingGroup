import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact form submissions
export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  organization: text("organization"),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  submissionType: text("submission_type").notNull().default("general"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertContactSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
}).extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional().nullable(),
  organization: z.string().optional().nullable(),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  submissionType: z.string().default("general"),
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

// Partner/Vendor registrations
export const partnerRegistrations = pgTable("partner_registrations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  companyName: text("company_name").notNull(),
  contactName: text("contact_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  address: text("address"),
  registrationType: text("registration_type").notNull(),
  capabilities: text("capabilities"),
  certifications: text("certifications"),
  naicsCodes: text("naics_codes"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertPartnerSchema = createInsertSchema(partnerRegistrations).omit({
  id: true,
  createdAt: true,
}).extend({
  companyName: z.string().min(2, "Company name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  address: z.string().optional().nullable(),
  registrationType: z.string().min(1, "Please select a registration type"),
  capabilities: z.string().optional().nullable(),
  certifications: z.string().optional().nullable(),
  naicsCodes: z.string().optional().nullable(),
  message: z.string().optional().nullable(),
});

export type InsertPartner = z.infer<typeof insertPartnerSchema>;
export type PartnerRegistration = typeof partnerRegistrations.$inferSelect;
