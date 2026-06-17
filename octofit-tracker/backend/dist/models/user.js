import { Schema, model } from "mongoose";
const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true, enum: ["user", "coach", "admin"], default: "user" },
    team: { type: String, required: false },
    createdAt: { type: Date, default: () => new Date() }
}, { timestamps: true });
export const User = model("User", userSchema);
//# sourceMappingURL=user.js.map