import mongoose from "mongoose";

export const jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    company: { type: String, required: true },
    salary: { type: Number, required: true },
    // jobType: { type: String, enum: ['full-time', 'part-time', 'freelance'], required: true },
    // status: { type: String, enum: ['active', 'inactive'], default: 'active' },
    // skills: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill' }]
})

const Job = mongoose.model("Job", jobSchema);

export default Job;