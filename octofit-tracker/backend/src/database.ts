import mongoose from "mongoose";
import { MONGO_URI } from "./config.js";

export async function connectDatabase() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(`Connected to MongoDB at ${MONGO_URI}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

export default mongoose;
