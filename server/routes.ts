import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertConsultationSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for consultation form submissions
  app.post("/api/consultations", async (req, res) => {
    try {
      const validatedData = insertConsultationSchema.parse(req.body);
      
      const consultation = await storage.createConsultation({
        ...validatedData,
        createdAt: new Date().toISOString()
      });
      
      res.status(201).json({
        message: "Consultation request submitted successfully",
        consultation
      });
    } catch (error) {
      console.error("Error creating consultation:", error);
      res.status(400).json({ 
        message: "Invalid consultation data", 
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
