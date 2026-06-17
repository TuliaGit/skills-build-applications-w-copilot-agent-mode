import express from "express";
import mongoose from "mongoose";
import { PORT, MONGO_URI, API_URL } from "./config.js";
import usersRouter from "./routes/users.js";
import teamsRouter from "./routes/teams.js";
import activitiesRouter from "./routes/activities.js";
import leaderboardRouter from "./routes/leaderboard.js";
import workoutsRouter from "./routes/workouts.js";
const app = express();
app.use(express.json());
app.get("/", (_req, res) => {
    res.json({ message: "OctoFit Tracker API is running", apiUrl: API_URL });
});
app.get("/health", (_req, res) => {
    res.json({ status: "ok", mongodb: mongoose.connection.readyState });
});
app.use("/api/users", usersRouter);
app.use("/api/teams", teamsRouter);
app.use("/api/activities", activitiesRouter);
app.use("/api/leaderboard", leaderboardRouter);
app.use("/api/workouts", workoutsRouter);
mongoose
    .connect(MONGO_URI)
    .then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on http://localhost:${PORT}`);
        console.log(`Connected to MongoDB at ${MONGO_URI}`);
        console.log(`API URL set to ${API_URL}`);
    });
})
    .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
});
//# sourceMappingURL=index.js.map