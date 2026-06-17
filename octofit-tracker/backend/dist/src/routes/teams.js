import { Router } from "express";
const router = Router();
router.get("/", (_req, res) => {
    res.json({ teams: [], message: "List teams" });
});
router.post("/", (_req, res) => {
    res.status(201).json({ message: "Create a new team" });
});
export default router;
//# sourceMappingURL=teams.js.map