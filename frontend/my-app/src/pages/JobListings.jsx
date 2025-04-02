import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaFilter, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import axios from "axios"; // Import axios

export default function JobListings() {
  const [jobs, setJobs] = useState([]); // Store jobs fetched from the backend
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedJobType, setSelectedJobType] = useState("");

  // Fetch jobs from backend API using axios
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/jobs") 
      .then((response) => {
        setJobs(response.data); // Set jobs data to state
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });
  }, []);

  // Filter function
  const filteredJobs = jobs.filter((job) => {
    return (
      (job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedLocation ? job.location.includes(selectedLocation) : true) &&
      (selectedJobType ? job.type === selectedJobType : true)
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-semibold text-gray-800">Job Listings</h2>
        <Link
          to="/post-job"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Post a Job
        </Link>
      </div>

      {/* Filters Section */}
      <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-8">
        <div className="flex items-center space-x-4">
          <div className="flex items-center border p-2 rounded-lg">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search jobs"
              className="ml-2 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center border p-2 rounded-lg">
            <FaMapMarkerAlt className="text-gray-500" />
            <select
              className="ml-2 outline-none"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="">Location</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Remote">Remote</option>
            </select>
          </div>

          <div className="flex items-center border p-2 rounded-lg">
            <FaBriefcase className="text-gray-500" />
            <select
              className="ml-2 outline-none"
              value={selectedJobType}
              onChange={(e) => setSelectedJobType(e.target.value)}
            >
              <option value="">Job Type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
            </select>
          </div>
        </div>

        <button
          className="bg-blue-600 text-white p-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition"
        >
          <FaFilter />
          <span>Filter</span>
        </button>
      </div>

      {/* Job Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job._id} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
              <p className="text-gray-600 mb-4">{job.company}</p>
              <p className="text-gray-500 mb-2">
                <FaMapMarkerAlt className="inline mr-2" />
                {job.location}
              </p>
              <p className="text-gray-500 mb-4">{job.type}</p>
              <p className="text-gray-700 mb-6">{job.description}</p>
              <Link
                to={`/jobs/${job._id}`}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                View Details{console.log(job)}
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No jobs found.</p>
        )}
      </div>
    </div>
  );
}
