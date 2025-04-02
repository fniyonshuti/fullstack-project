import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function JobDetail() {
  const { jobId } = useParams(); // Get job ID from the URL
  const [job, setJob] = useState(null);
  const [isApplying, setIsApplying] = useState(false); // Track application state
  const navigate = useNavigate(); // Initialize the navigate function

  // Fetch job details based on the jobId
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/jobs/${jobId}`)
      .then((response) => {
        setJob(response.data);
      })
      .catch((error) => {
        console.error("Error fetching job details:", error);
      });
  }, [jobId]);

  // Function to handle job application
  const handleApply = async () => {
    setIsApplying(true); // Show loading state

    const token = localStorage.getItem("authToken"); // Get token from local storage

    if (!token) {
      alert("You must be logged in to apply for a job.");
      navigate("/login"); // Redirect to login if not authenticated
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/applications",
        { jobId }, // Send only jobId (userId is handled in the backend)
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send token for authentication
            "Content-Type": "application/json",
          },
        }
      );

      alert("Application submitted successfully!");
    } catch (error) {
      console.error("Error applying for the job:", error);
      alert(error.response?.data?.error || "Failed to apply for the job.");
    } finally {
      setIsApplying(false);
    }
  };

  if (!job) {
    return <div>Loading job details...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-29">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">{job.title}</h1>
        <p className="text-xl text-gray-600 mb-2">{job.company}</p>
        <p className="text-lg text-gray-500 mb-2">
          <strong>Location:</strong> {job.location}
        </p>
        <p className="text-lg text-gray-500 mb-4">
          <strong>Type:</strong> {job.type}
        </p>
        <p className="text-gray-700 mb-6">{job.description}</p>

        {/* Application Instructions */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700">How to Apply</h2>
          <p className="text-gray-600">{job.applicationInstructions}</p>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 mt-6">
          <button
            className="bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-700 transition"
            onClick={() => navigate(-1)} // Navigate back
          >
            Go Back to Jobs
          </button>

          <button
            className={`bg-blue-600 text-white p-2 rounded-lg transition ${
              isApplying ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
            }`}
            onClick={handleApply}
            disabled={isApplying}
          >
            {isApplying ? "Applying..." : "Apply Now"}
          </button>
        </div>
      </div>
    </div>
  );
}
