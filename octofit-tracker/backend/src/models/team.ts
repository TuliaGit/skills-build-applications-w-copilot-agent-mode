import { Schema, model } from "mongoose";

export interface ITeam {
  name: string;
  coach: string;
  members: number;
  active: boolean;
  createdAt: Date;
}

const teamSchema = new Schema<ITeam>(
  {
    name: { type: String, required: true, unique: true },
    coach: { type: String, required: true },
    members: { type: Number, required: true, min: 0 },
    active: { type: Boolean, default: true },
    createdAt: { type: Date, default: () => new Date() }
  },
  { timestamps: true }
);

export const Team = model<ITeam>("Team", teamSchema);
