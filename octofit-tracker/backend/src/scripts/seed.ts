/*
Seed the octofit_db database with test data.
*/

import mongoose from "mongoose";
import { User } from "../models/user.js";
import { Team } from "../models/team.js";
import { Activity } from "../models/activity.js";
import { Leaderboard } from "../models/leaderboard.js";
import { Workout } from "../models/workout.js";

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/octofit_db";

async function seed() {
  console.log("Seed the octofit_db database with test data");

  await mongoose.connect(MONGO_URI);
  console.log(`Connected to MongoDB at ${MONGO_URI}`);

  await Promise.all([
    User.deleteMany({}),
    Team.deleteMany({}),
    Activity.deleteMany({}),
    Leaderboard.deleteMany({}),
    Workout.deleteMany({}),
  ]);

  const users = await User.create([
    { firstName: "Ava", lastName: "Lopez", email: "ava.lopez@example.com", role: "user", team: "Team Phoenix" },
    { firstName: "Kai", lastName: "Morgan", email: "kai.morgan@example.com", role: "user", team: "Team Phoenix" },
    { firstName: "Nina", lastName: "Patel", email: "nina.patel@example.com", role: "coach", team: "Team Titan" },
  ]);

  const teams = await Team.create([
    { name: "Team Phoenix", coach: "Nina Patel", members: 12, active: true },
    { name: "Team Titan", coach: "Liam Reyes", members: 8, active: true },
  ]);

  const activities = await Activity.create([
    { userEmail: "ava.lopez@example.com", type: "Running", durationMinutes: 42, caloriesBurned: 520, distanceKm: 8.2, date: new Date("2026-06-15T08:30:00Z") },
    { userEmail: "kai.morgan@example.com", type: "Strength Training", durationMinutes: 55, caloriesBurned: 410, date: new Date("2026-06-15T10:00:00Z") },
    { userEmail: "nina.patel@example.com", type: "Yoga", durationMinutes: 35, caloriesBurned: 180, date: new Date("2026-06-14T18:00:00Z") },
  ]);

  const leaderboard = await Leaderboard.create([
    { userEmail: "ava.lopez@example.com", teamName: "Team Phoenix", rank: 1, score: 1440 },
    { userEmail: "kai.morgan@example.com", teamName: "Team Phoenix", rank: 2, score: 1320 },
    { userEmail: "nina.patel@example.com", teamName: "Team Titan", rank: 3, score: 1210 },
  ]);

  const workouts = await Workout.create([
    { title: "Morning HIIT Blast", description: "A 20-minute high-intensity interval training routine to kickstart the day.", durationMinutes: 20, difficulty: "intermediate", focus: "full body" },
    { title: "Core Strength Builder", description: "A steady workout targeting core stability and strength.", durationMinutes: 30, difficulty: "beginner", focus: "core" },
    { title: "Endurance Run Prep", description: "Build stamina with this distance training workout.", durationMinutes: 45, difficulty: "advanced", focus: "cardio" },
  ]);

  console.log(`Inserted ${users.length} users, ${teams.length} teams, ${activities.length} activities, ${leaderboard.length} leaderboard entries, and ${workouts.length} workouts.`);

  await mongoose.connection.close();
  console.log("Database seed complete.");
}

seed().catch((error) => {
  console.error("Seeding failed:", error);
  process.exit(1);
});
