// middlewares/authMiddleware.js
import jwt from 'jsonwebtoken';
import User from "../models/User.js"; // Assuming you have a User model to store user data

// Verify JWT token and extract user information
export const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Get the token from the Authorization header
  if (!token) return res.status(401).json({ error: 'Access Denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token with secret key
    req.user = decoded; // Attach user info to request object
    next();
  } catch (err) {
    res.status(400).json({ error: 'Invalid Token' });
  }
};

export const isEmployer = async (req, res, next) => {
  try {
    const user = req.user; // User is already attached by verifyToken

    if (!user) {
      return res.status(404).json({ error: 'User not found' }); // Handle missing user
    }

    if (user.role !== 'employer') {
      return res.status(403).json({ error: 'Access Denied' }); // Forbidden if not an employer
    }

    next(); // Continue to next middleware or route handler
  } catch (err) {
    console.error(err); // Log error for debugging
    res.status(500).json({ error: 'Server Error' }); // Generic server error
  }
};
