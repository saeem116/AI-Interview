
import { serial, text, pgTable, varchar } from "drizzle-orm/pg-core";
export const MockInterview = pgTable("mockInterview", {
  id: serial("id").primaryKey(),
  jsonMOckResp: text("jsonMOckResp").notNull(),
  jobPosition: varchar("jobPosition").notNull(),
  jobDesc: varchar("jobDesc").notNull(),
  jobExperience: varchar("jobExperience").notNull(),
  createdBy: varchar("createdBy").notNull(),
  createdAt: varchar("createdAt").notNull(),
  mocId: varchar("mocId").notNull(),

})


export const UserAnswer = pgTable("userAnswer", {
  id: serial("id").primaryKey(),
  mocIdRef: varchar("mocId").notNull(),
  question: varchar("question").notNull(),
  correctAns: text("correctAns"),
  userAns: text("userAns"),
  feedback: text("feedback"),
  rating: varchar("rating"),
  userEmail: varchar("userEmail"),
  createdAt: varchar("createdAt"),
})