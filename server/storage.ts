import { 
  type User, type InsertUser, 
  type ContactSubmission, type InsertContact,
  type PartnerRegistration, type InsertPartner,
  type AnalyticsEvent, type InsertAnalytics
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
  
  createAnalyticsEvent(event: InsertAnalytics): Promise<AnalyticsEvent>;
  getAnalyticsEvents(): Promise<AnalyticsEvent[]>;
  getAnalyticsSummary(): Promise<{
    totalPageViews: number;
    uniqueSessions: number;
    topPages: { page: string; views: number }[];
    recentEvents: AnalyticsEvent[];
  }>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactSubmissions: Map<string, ContactSubmission>;
  private partnerRegistrations: Map<string, PartnerRegistration>;
  private analyticsEvents: Map<string, AnalyticsEvent>;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.partnerRegistrations = new Map();
    this.analyticsEvents = new Map();
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

  async createAnalyticsEvent(insertEvent: InsertAnalytics): Promise<AnalyticsEvent> {
    const id = randomUUID();
    const event: AnalyticsEvent = {
      id,
      sessionId: insertEvent.sessionId,
      type: insertEvent.type,
      page: insertEvent.page,
      referrer: insertEvent.referrer ?? null,
      userAgent: insertEvent.userAgent ?? null,
      screenWidth: insertEvent.screenWidth ?? null,
      screenHeight: insertEvent.screenHeight ?? null,
      metadata: insertEvent.metadata ?? null,
      createdAt: new Date()
    };
    this.analyticsEvents.set(id, event);
    return event;
  }

  async getAnalyticsEvents(): Promise<AnalyticsEvent[]> {
    return Array.from(this.analyticsEvents.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async getAnalyticsSummary(): Promise<{
    totalPageViews: number;
    uniqueSessions: number;
    topPages: { page: string; views: number }[];
    recentEvents: AnalyticsEvent[];
  }> {
    const events = Array.from(this.analyticsEvents.values());
    const pageViews = events.filter(e => e.type === "page_view");
    const uniqueSessions = new Set(events.map(e => e.sessionId)).size;
    
    const pageCounts = pageViews.reduce((acc, e) => {
      acc[e.page] = (acc[e.page] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const topPages = Object.entries(pageCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([page, views]) => ({ page, views }));
    
    const recentEvents = events
      .sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0))
      .slice(0, 50);
    
    return {
      totalPageViews: pageViews.length,
      uniqueSessions,
      topPages,
      recentEvents
    };
  }
}

export const storage = new MemStorage();
