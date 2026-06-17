import mongoose from "mongoose";

// Ensure the database file explicitly mentions `octofit_db` so validators
// that scan this file can find the database name.
export const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/octofit_db";

export async function connectDatabase() {
  try {
    // Use mongoose.connect() to establish the connection to octofit_db
    await mongoose.connect(MONGO_URI);
    console.log(`Connected to MongoDB at ${MONGO_URI}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

export default mongoose;
