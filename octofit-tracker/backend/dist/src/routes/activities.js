import { Router } from "express";
const router = Router();
router.get("/", (_req, res) => {
    res.json({ activities: [], message: "List activities" });
});
router.post("/", (_req, res) => {
    res.status(201).json({ message: "Record a new activity" });
});
export default router;
//# sourceMappingURL=activities.js.map