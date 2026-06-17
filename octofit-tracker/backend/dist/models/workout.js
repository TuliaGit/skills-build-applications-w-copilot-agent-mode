import { Schema, model } from "mongoose";
const workoutSchema = new Schema({
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
}, { timestamps: true });
export const Workout = model("Workout", workoutSchema);
//# sourceMappingURL=workout.js.map