import express from 'express';
import Job from '../models/Job.js';
import { verifyToken } from '../middleware/authemployer.js';
import { isEmployer } from '../middleware/authemployer.js';

const router = express.Router();

// POST: Create a new job
router.post('/jobs', verifyToken, isEmployer, async (req, res) => {
  try {
    const { title, company, location, type, description } = req.body;

    // Check if all fields are provided
    if (!title || !company || !location || !type || !description) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create the new job with employer ID
    const newJob = new Job({
      title,
      company,
      location,
      type,
      description,
      employer: req.user._id, // Attach employer's ID
    });

    // Save the job to the database
    await newJob.save();

    // Send response
    res.status(201).json({
      message: 'Job posted successfully',
      job: newJob,
    });
  } catch (err) {
    console.error('Error posting job:', err); // Log error for debugging
    res.status(500).json({ error: err.message || 'Failed to post job' }); // Provide actual error message
  }
});

export default router;
