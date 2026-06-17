import { Schema, model } from "mongoose";

export interface ILeaderboardEntry {
  userEmail: string;
  teamName?: string;
  rank: number;
  score: number;
  lastUpdated: Date;
}

const leaderboardSchema = new Schema<ILeaderboardEntry>(
  {
    userEmail: { type: String, required: true },
    teamName: { type: String, required: false },
    rank: { type: Number, required: true, min: 1 },
    score: { type: Number, required: true, min: 0 },
    lastUpdated: { type: Date, default: () => new Date() }
  },
  { timestamps: true }
);

export const Leaderboard = model<ILeaderboardEntry>("Leaderboard", leaderboardSchema);
