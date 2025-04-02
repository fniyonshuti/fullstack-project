import express from "express";
import Application from "../models/Application.js";
import Job from "../models/Job.js"; 
import authenticateUser from "../Middleware/authenticateuser.js";


const router = express.Router();

// Apply for a Job
router.post("/", authenticateUser, async (req, res) => {
  try {
    // Extract userId from the authenticated user
    const userId = req.user.id; 
    console.log(req.user);

    // Extract jobId from request body
    const { jobId } = req.body;

    // Ensure jobId is provided
    if (!jobId) {
      return res.status(400).json({ error: "Job ID is required." });
    }

    // Create a new application with userId from authentication and status set to "Pending"
    const application = new Application({
      jobId,
      userId,
      status: "Pending"
    });

    // Save the application to the database
    await application.save();

    res.status(201).json(application);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


// Get All Applications
router.get("/", async (req, res) => {
  try {
    const applications = await Application.find().populate("userId").populate("jobId");
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
