import { Schema, model } from "mongoose";

export interface IWorkout {
  title: string;
  description: string;
  durationMinutes: number;
  difficulty: "beginner" | "intermediate" | "advanced";
  focus: string;
  createdAt: Date;
}

const workoutSchema = new Schema<IWorkout>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    durationMinutes: { type: Number, required: true, min: 5 },
    difficulty: {
      type: String,
      required: true,
      enum: ["beginner", "intermediate", "advanced"],
    },
    focus: { type: String, required: true },
    createdAt: { type: Date, default: () => new Date() }
  },
  { timestamps: true }
);

export const Workout = model<IWorkout>("Workout", workoutSchema);
