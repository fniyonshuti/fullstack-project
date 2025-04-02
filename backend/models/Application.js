// models/Application.js
import mongoose from "mongoose";
import Job from "./Job.js";  // Correct path to Job model file
import User from "./User.js";  // Correct path to User model file

const applicationSchema = new mongoose.Schema({
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: Job, required: true },  // Foreign Key to Job
  userId: { type: mongoose.Schema.Types.ObjectId, ref: User, required: true }, // Foreign Key to User
  status: { type: String, enum: ["Pending", "Accepted", "Rejected"], default: "Pending" },
});

export default mongoose.model("Application", applicationSchema);
