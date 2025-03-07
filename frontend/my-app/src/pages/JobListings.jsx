import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaFilter, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

export default function JobListings() {
  // Sample job data
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Innovators",
      location: "New York, NY",
      type: "Full-time",
      description: "Looking for a skilled frontend developer to join our dynamic team.",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Future Solutions",
      location: "Remote",
      type: "Part-time",
      description: "Seeking an experienced backend developer to manage server-side logic.",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Creative Minds",
      location: "Los Angeles, CA",
      type: "Contract",
      description: "We are looking for a creative UI/UX Designer to enhance user experiences.",
    },
  ];

  // Filters state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedJobType, setSelectedJobType] = useState("");

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
        {filteredJobs.map((job) => (
          <div key={job.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
            <p className="text-gray-600 mb-4">{job.company}</p>
            <p className="text-gray-500 mb-2">
              <FaMapMarkerAlt className="inline mr-2" />
              {job.location}
            </p>
            <p className="text-gray-500 mb-4">{job.type}</p>
            <p className="text-gray-700 mb-6">{job.description}</p>
            <Link
              to={`/job/${job.id}`}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
