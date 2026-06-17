import { Router } from "express";
const router = Router();
router.get("/", (_req, res) => {
    res.json({ leaderboard: [], message: "Get leaderboard standings" });
});
export default router;
//# sourceMappingURL=leaderboard.js.map