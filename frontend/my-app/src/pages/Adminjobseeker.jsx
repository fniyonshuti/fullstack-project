import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function JobSeeker() {
  const [jobSeekers, setJobSeekers] = useState([]);
  const [applications, setApplications] = useState([]);
  const [selectedSeeker, setSelectedSeeker] = useState(null);
  const [analytics, setAnalytics] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch job seekers data
  useEffect(() => {
    fetchJobSeekers();
  }, []);

  const fetchJobSeekers = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.get("http://localhost:5000/api/job-seekers", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setJobSeekers(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to load job seekers.");
      setLoading(false);
    }
  };

  // Fetch applications for a specific job seeker
  const fetchApplications = async (jobSeekerId) => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.get(`http://localhost:5000/api/applications/${jobSeekerId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setApplications(response.data);
    } catch (err) {
      setError("Failed to load applications.");
    }
  };

  // Fetch job seeker analytics (could be historical data, success rates, etc.)
  const fetchAnalytics = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.get("http://localhost:5000/api/analytics/job-seekers", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAnalytics(response.data);
    } catch (err) {
      setError("Failed to load analytics.");
    }
  };

  // Handle profile verification
  const handleProfileVerification = async (jobSeekerId) => {
    try {
      const token = localStorage.getItem("authToken");
      await axios.patch(
        `http://localhost:5000/api/job-seekers/verify/${jobSeekerId}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchJobSeekers(); // Refresh job seekers list after verification
    } catch (err) {
      setError("Failed to verify profile.");
    }
  };

  const handleJobSeekerSelection = (jobSeeker) => {
    setSelectedSeeker(jobSeeker);
    fetchApplications(jobSeeker._id); // Fetch applications for selected job seeker
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">Admin Dashboard</h2>

        {loading ? (
          <p className="text-gray-500 text-center">Loading job seekers...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <>
            {/* Job Seekers List */}
            <motion.div className="overflow-x-auto mb-6">
              <h3 className="text-2xl font-semibold mb-4">Job Seekers</h3>
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="py-2 px-4 text-left">Name</th>
                    <th className="py-2 px-4 text-left">Email</th>
                    <th className="py-2 px-4 text-left">Applications</th>
                    <th className="py-2 px-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {jobSeekers.map((seeker) => (
                    <tr key={seeker._id} className="border-b">
                      <td className="py-2 px-4">{seeker.name}</td>
                      <td className="py-2 px-4">{seeker.email}</td>
                      <td className="py-2 px-4">{seeker.applications.length}</td>
                      <td className="py-2 px-4">
                        <button
                          onClick={() => handleJobSeekerSelection(seeker)}
                          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                        >
                          View Profile
                        </button>
                        <button
                          onClick={() => handleProfileVerification(seeker._id)}
                          className="bg-green-500 text-white px-4 py-2 rounded"
                        >
                          Verify Profile
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            {/* Job Seeker Profile and Applications */}
            {selectedSeeker && (
              <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">Profile: {selectedSeeker.name}</h3>
                <p><strong>Email:</strong> {selectedSeeker.email}</p>
                <p><strong>Phone:</strong> {selectedSeeker.phone || "N/A"}</p>
                <p><strong>Resume:</strong> <a href={selectedSeeker.resumeUrl} target="_blank" className="text-blue-500">Download Resume</a></p>

                <h4 className="text-xl font-semibold mt-4 mb-2">Applications</h4>
                <table className="min-w-full table-auto">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="py-2 px-4 text-left">Job Title</th>
                      <th className="py-2 px-4 text-left">Company</th>
                      <th className="py-2 px-4 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applications.map((application) => (
                      <tr key={application._id} className="border-b">
                        <td className="py-2 px-4">{application.jobTitle}</td>
                        <td className="py-2 px-4">{application.company}</td>
                        <td className="py-2 px-4">{application.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Job Seeker Analytics */}
            <motion.div className="mt-6 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold mb-4">Job Seeker Analytics</h3>
              <p><strong>Total Job Seekers:</strong> {analytics.totalJobSeekers}</p>
              <p><strong>Average Applications per Seeker:</strong> {analytics.avgApplicationsPerSeeker}</p>
              <p><strong>Successful Applications:</strong> {analytics.successfulApplications}</p>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
