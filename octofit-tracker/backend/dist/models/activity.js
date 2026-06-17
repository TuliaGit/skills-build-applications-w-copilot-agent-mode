import { Schema, model } from "mongoose";
const activitySchema = new Schema({
    userEmail: { type: String, required: true },
    type: { type: String, required: true },
    durationMinutes: { type: Number, required: true, min: 1 },
    caloriesBurned: { type: Number, required: true, min: 0 },
    distanceKm: { type: Number, required: false, min: 0 },
    date: { type: Date, required: true }
}, { timestamps: true });
export const Activity = model("Activity", activitySchema);
//# sourceMappingURL=activity.js.map