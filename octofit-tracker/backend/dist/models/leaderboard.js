import { Schema, model } from "mongoose";
const leaderboardSchema = new Schema({
    userEmail: { type: String, required: true },
    teamName: { type: String, required: false },
    rank: { type: Number, required: true, min: 1 },
    score: { type: Number, required: true, min: 0 },
    lastUpdated: { type: Date, default: () => new Date() }
}, { timestamps: true });
export const Leaderboard = model("Leaderboard", leaderboardSchema);
//# sourceMappingURL=leaderboard.js.map