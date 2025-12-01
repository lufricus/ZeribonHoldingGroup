import { 
  type User, type InsertUser, 
  type ContactSubmission, type InsertContact,
  type PartnerRegistration, type InsertPartner 
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  
  createPartnerRegistration(partner: InsertPartner): Promise<PartnerRegistration>;
  getPartnerRegistrations(): Promise<PartnerRegistration[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactSubmissions: Map<string, ContactSubmission>;
  private partnerRegistrations: Map<string, PartnerRegistration>;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.partnerRegistrations = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(insertContact: InsertContact): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = { 
      id,
      name: insertContact.name,
      email: insertContact.email,
      phone: insertContact.phone ?? null,
      organization: insertContact.organization ?? null,
      subject: insertContact.subject,
      message: insertContact.message,
      submissionType: insertContact.submissionType ?? "general",
      createdAt: new Date()
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async createPartnerRegistration(insertPartner: InsertPartner): Promise<PartnerRegistration> {
    const id = randomUUID();
    const registration: PartnerRegistration = { 
      id,
      companyName: insertPartner.companyName,
      contactName: insertPartner.contactName,
      email: insertPartner.email,
      phone: insertPartner.phone,
      address: insertPartner.address ?? null,
      registrationType: insertPartner.registrationType,
      capabilities: insertPartner.capabilities ?? null,
      certifications: insertPartner.certifications ?? null,
      naicsCodes: insertPartner.naicsCodes ?? null,
      message: insertPartner.message ?? null,
      createdAt: new Date()
    };
    this.partnerRegistrations.set(id, registration);
    return registration;
  }

  async getPartnerRegistrations(): Promise<PartnerRegistration[]> {
    return Array.from(this.partnerRegistrations.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }
}

export const storage = new MemStorage();
