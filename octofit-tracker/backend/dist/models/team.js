import { Schema, model } from "mongoose";
const teamSchema = new Schema({
    name: { type: String, required: true, unique: true },
    coach: { type: String, required: true },
    members: { type: Number, required: true, min: 0 },
    active: { type: Boolean, default: true },
    createdAt: { type: Date, default: () => new Date() }
}, { timestamps: true });
export const Team = model("Team", teamSchema);
//# sourceMappingURL=team.js.map