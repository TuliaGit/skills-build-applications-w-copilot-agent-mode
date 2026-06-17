import { Router } from "express";
const router = Router();
router.get("/", (_req, res) => {
    res.json({ users: [], message: "List users" });
});
router.post("/", (_req, res) => {
    res.status(201).json({ message: "Create a new user" });
});
export default router;
//# sourceMappingURL=users.js.map