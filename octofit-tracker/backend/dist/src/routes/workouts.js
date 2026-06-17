import { Router } from "express";
const router = Router();
router.get("/", (_req, res) => {
    res.json({ workouts: [], message: "List workouts" });
});
router.post("/", (_req, res) => {
    res.status(201).json({ message: "Create a new workout" });
});
export default router;
//# sourceMappingURL=workouts.js.map