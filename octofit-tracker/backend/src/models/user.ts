import { Schema, model } from "mongoose";

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  role: "user" | "coach" | "admin";
  team?: string;
  createdAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true, enum: ["user", "coach", "admin"], default: "user" },
    team: { type: String, required: false },
    createdAt: { type: Date, default: () => new Date() }
  },
  { timestamps: true }
);

export const User = model<IUser>("User", userSchema);
