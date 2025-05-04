import { 
  users, 
  type User, 
  type InsertUser,
  consultations,
  type Consultation,
  type InsertConsultation 
} from "@shared/schema";

// Storage interface with CRUD methods
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Consultation methods
  createConsultation(consultation: InsertConsultation & { createdAt: string }): Promise<Consultation>;
  getConsultations(): Promise<Consultation[]>;
  getConsultation(id: number): Promise<Consultation | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private consultationsMap: Map<number, Consultation>;
  private userId: number;
  private consultationId: number;

  constructor() {
    this.users = new Map();
    this.consultationsMap = new Map();
    this.userId = 1;
    this.consultationId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createConsultation(insertConsultation: InsertConsultation & { createdAt: string }): Promise<Consultation> {
    const id = this.consultationId++;
    const consultation: Consultation = { ...insertConsultation, id };
    this.consultationsMap.set(id, consultation);
    return consultation;
  }

  async getConsultations(): Promise<Consultation[]> {
    return Array.from(this.consultationsMap.values());
  }

  async getConsultation(id: number): Promise<Consultation | undefined> {
    return this.consultationsMap.get(id);
  }
}

export const storage = new MemStorage();
