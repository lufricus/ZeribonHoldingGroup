import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertPartnerSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Contact submission received successfully",
        id: submission.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        console.error("Contact submission error:", error);
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while processing your request" 
        });
      }
    }
  });

  // Get contact submissions (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ 
        success: false, 
        message: "An error occurred while fetching submissions" 
      });
    }
  });

  // Partner/vendor registration
  app.post("/api/partners", async (req, res) => {
    try {
      const validatedData = insertPartnerSchema.parse(req.body);
      const registration = await storage.createPartnerRegistration(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Partner registration received successfully",
        id: registration.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        console.error("Partner registration error:", error);
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while processing your request" 
        });
      }
    }
  });

  // Get partner registrations (for admin purposes)
  app.get("/api/partners", async (req, res) => {
    try {
      const registrations = await storage.getPartnerRegistrations();
      res.json(registrations);
    } catch (error) {
      console.error("Error fetching partner registrations:", error);
      res.status(500).json({ 
        success: false, 
        message: "An error occurred while fetching registrations" 
      });
    }
  });

  return httpServer;
}
