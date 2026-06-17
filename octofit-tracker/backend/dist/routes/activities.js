import { Router } from "express";
import { Activity } from "../models/activity.js";
const router = Router();
router.get("/", async (_req, res) => {
    const activities = await Activity.find().lean();
    res.json({ activities, message: "List activities" });
});
router.post("/", async (req, res) => {
    const activity = await Activity.create(req.body);
    res.status(201).json({ activity, message: "Record a new activity" });
});
export default router;
//# sourceMappingURL=activities.js.map