import { Router } from "express";
import { User } from "../models/user.js";

const router = Router();

router.get("/", async (_req, res) => {
  const users = await User.find().lean();
  res.json({ users, message: "List users" });
});

router.post("/", async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({ user, message: "Create a new user" });
});

export default router;
