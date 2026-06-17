import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/octofit";

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "OctoFit Tracker API is running" });
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok", mongodb: mongoose.connection.readyState });
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
      console.log(`Connected to MongoDB at ${MONGO_URI}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });
