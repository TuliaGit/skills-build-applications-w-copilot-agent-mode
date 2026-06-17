import mongoose from "mongoose";

const MONGO_URI = "mongodb://127.0.0.1:27017/octofit_db";

export async function connectDatabase() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/octofit_db");
    console.log(`Connected to MongoDB at ${MONGO_URI}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

export default mongoose;
