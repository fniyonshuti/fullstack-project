import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

// Job Categories (you can fetch these from an API or define statically)
const jobCategories = ["Software", "Marketing", "Finance", "Design", "Operations"];

export default function JobManagement() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [jobData, setJobData] = useState({
    title: "",
    company: "",
    location: "",
    category: "",
    description: "",
    isFeatured: false,
    isApproved: false,
  });

  // Fetch all jobs
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.get("http://localhost:5000/api/jobs", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setJobs(response.data);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to fetch jobs");
    } finally {
      setLoading(false);
    }
  };

  // Handle job delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;
    try {
      const token = localStorage.getItem("authToken");
      await axios.delete(`http://localhost:5000/api/jobs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setJobs(jobs.filter((job) => job._id !== id));
    } catch (err) {
      alert("Failed to delete job");
    }
  };

  // Handle job approval/rejection
  const handleApproveReject = async (id, action) => {
    try {
      const token = localStorage.getItem("authToken");
      await axios.patch(
        `http://localhost:5000/api/jobs/${id}`,
        { isApproved: action === "approve" },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      fetchJobs();
    } catch (err) {
      alert(`Failed to ${action} job`);
    }
  };

  // Handle featured job toggle
  const handleToggleFeatured = async (id) => {
    const updatedJob = jobs.find((job) => job._id === id);
    updatedJob.isFeatured = !updatedJob.isFeatured;
    try {
      const token = localStorage.getItem("authToken");
      await axios.put(`http://localhost:5000/api/jobs/${id}`, updatedJob, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchJobs();
    } catch (err) {
      alert("Failed to toggle featured status");
    }
  };

  // Open modal for adding/editing job
  const handleEdit = (job) => {
    setEditingJob(job);
    setJobData(job);
    setShowModal(true);
  };

  // Handle add new job
  const handleAdd = () => {
    setEditingJob(null);
    setJobData({
      title: "",
      company: "",
      location: "",
      category: "",
      description: "",
      isFeatured: false,
      isApproved: false,
    });
    setShowModal(true);
  };

  // Handle job submit (add/edit)
  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (editingJob) {
        await axios.put(`http://localhost:5000/api/jobs/${editingJob._id}`, jobData, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        await axios.post("http://localhost:5000/api/jobs", jobData, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      fetchJobs();
      setShowModal(false);
    } catch (err) {
      alert("Failed to save job");
    }
  };

  // Filter jobs based on search (can be implemented based on specific criteria)
  const filteredJobs = jobs; // Can add search filter logic here

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">Job Management</h2>

        <div className="mb-4 flex justify-between">
          <button onClick={handleAdd} className="bg-green-500 text-white px-4 py-2 rounded">Add Job</button>
        </div>

        {loading ? (
          <p className="text-gray-500 text-center">Loading jobs...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : filteredJobs.length === 0 ? (
          <p className="text-center text-gray-500">No jobs found.</p>
        ) : (
          <motion.div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 text-left">Title</th>
                  <th className="py-2 px-4 text-left">Company</th>
                  <th className="py-2 px-4 text-left">Location</th>
                  <th className="py-2 px-4 text-left">Category</th>
                  <th className="py-2 px-4 text-left">Featured</th>
                  <th className="py-2 px-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredJobs.map((job) => (
                  <tr key={job._id} className="border-b">
                    <td className="py-2 px-4">{job.title}</td>
                    <td className="py-2 px-4">{job.company}</td>
                    <td className="py-2 px-4">{job.location}</td>
                    <td className="py-2 px-4">{job.category}</td>
                    <td className="py-2 px-4">
                      <span
                        className={`bg-${job.isFeatured ? "yellow" : "gray"}-500 text-white px-3 py-1 rounded-full text-sm`}
                      >
                        {job.isFeatured ? "Featured" : "Regular"}
                      </span>
                    </td>
                    <td className="py-2 px-4">
                      <button
                        onClick={() => handleEdit(job)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(job._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded mr-2"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handleApproveReject(job._id, job.isApproved ? "reject" : "approve")}
                        className={`bg-${job.isApproved ? "red" : "green"}-500 text-white px-3 py-1 rounded mr-2`}
                      >
                        {job.isApproved ? "Reject" : "Approve"}
                      </button>
                      <button
                        onClick={() => handleToggleFeatured(job._id)}
                        className="bg-blue-500 text-white px-3 py-1 rounded"
                      >
                        Toggle Featured
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}
      </div>

      {/* Modal for Adding/Editing Job */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg w-96 h-auto">
            <h2 className="text-xl font-bold mb-4">{editingJob ? "Edit Job" : "Add Job"}</h2>
            <input
              type="text"
              placeholder="Job Title"
              className="border p-3 w-full mb-2"
              value={jobData.title}
              onChange={(e) => setJobData({ ...jobData, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Company"
              className="border p-3 w-full mb-2"
              value={jobData.company}
              onChange={(e) => setJobData({ ...jobData, company: e.target.value })}
            />
            <input
              type="text"
              placeholder="Location"
              className="border p-3 w-full mb-2"
              value={jobData.location}
              onChange={(e) => setJobData({ ...jobData, location: e.target.value })}
            />
            <select
              className="border p-3 w-full mb-4"
              value={jobData.category}
              onChange={(e) => setJobData({ ...jobData, category: e.target.value })}
            >
              {jobCategories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <textarea
              placeholder="Job Description"
              className="border p-3 w-full mb-4"
              value={jobData.description}
              onChange={(e) => setJobData({ ...jobData, description: e.target.value })}
            />
            <div className="flex justify-between items-center mb-4">
              <label>
                <input
                  type="checkbox"
                  checked={jobData.isFeatured}
                  onChange={(e) => setJobData({ ...jobData, isFeatured: e.target.checked })}
                />
                Featured Job
              </label>
            </div>
            <div className="flex justify-end gap-2">
              <button onClick={() => setShowModal(false)} className="bg-gray-500 text-white px-3 py-1 rounded">Cancel</button>
              <button onClick={handleSubmit} className="bg-blue-500 text-white px-3 py-1 rounded">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
