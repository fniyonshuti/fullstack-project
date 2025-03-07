import { useState } from "react";
import { FaUserAlt, FaBriefcase, FaSearch, FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function JobseekerDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data
  const dashboardData = {
    profileComplete: 85,
    jobApplications: 12,
    jobsApplied: 8,
    jobsRecommended: 5,
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-blue-800 text-white p-6">
          <h1 className="text-2xl font-bold mb-8">Career Connect</h1>
          <ul>
            <li
              className={`p-4 cursor-pointer ${activeTab === "overview" ? "bg-blue-700" : ""}`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </li>
            <li
              className={`p-4 cursor-pointer ${activeTab === "applications" ? "bg-blue-700" : ""}`}
              onClick={() => setActiveTab("applications")}
            >
              My Applications
            </li>
            <li
              className={`p-4 cursor-pointer ${activeTab === "recommended" ? "bg-blue-700" : ""}`}
              onClick={() => setActiveTab("recommended")}
            >
              Recommended Jobs
            </li>
            <li className={`p-4 cursor-pointer ${activeTab === "profile" ? "bg-blue-700" : ""}`} onClick={() => setActiveTab("profile")}>
              My Profile
            </li>
            <li className="p-4 cursor-pointer">Job Search</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-semibold text-gray-800">Jobseeker Dashboard</h2>
            <div className="flex items-center space-x-4">
              <Link to="/profile" className="bg-blue-600 text-white px-4 py-2 rounded-lg">My Profile</Link>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg">Logout</button>
            </div>
          </div>

          {/* Dashboard Content */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Profile Completion */}
              <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4">
                <FaUserAlt className="text-blue-600 text-4xl" />
                <div>
                  <h3 className="text-xl font-semibold">Profile Completion</h3>
                  <p className="text-gray-500">{dashboardData.profileComplete}% Complete</p>
                </div>
              </div>

              {/* Job Applications */}
              <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4">
                <FaClipboardList className="text-green-600 text-4xl" />
                <div>
                  <h3 className="text-xl font-semibold">Job Applications</h3>
                  <p className="text-gray-500">{dashboardData.jobApplications} Applications</p>
                </div>
              </div>

              {/* Jobs Recommended */}
              <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4">
                <FaBriefcase className="text-purple-600 text-4xl" />
                <div>
                  <h3 className="text-xl font-semibold">Recommended Jobs</h3>
                  <p className="text-gray-500">{dashboardData.jobsRecommended} Jobs</p>
                </div>
              </div>
            </div>
          )}

          {/* Job Applications Section */}
          {activeTab === "applications" && (
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">My Job Applications</h3>
              <ul>
                {/* Displaying mock job applications */}
                {[...Array(dashboardData.jobsApplied)].map((_, index) => (
                  <li key={index} className="flex justify-between items-center p-4 mb-4 bg-gray-50 rounded-lg shadow-sm">
                    <div>
                      <p className="font-semibold text-gray-800">Job Title #{index + 1}</p>
                      <p className="text-gray-500">Application Status: Pending</p>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">View Details</button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Recommended Jobs Section */}
          {activeTab === "recommended" && (
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Recommended Jobs</h3>
              <ul>
                {/* Displaying recommended jobs */}
                {[...Array(dashboardData.jobsRecommended)].map((_, index) => (
                  <li key={index} className="flex justify-between items-center p-4 mb-4 bg-gray-50 rounded-lg shadow-sm">
                    <div>
                      <p className="font-semibold text-gray-800">Job Title #{index + 1}</p>
                      <p className="text-gray-500">Location: Remote</p>
                    </div>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg">Apply Now</button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Profile Section */}
          {activeTab === "profile" && (
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">My Profile</h3>
              <div className="flex flex-col items-center">
                <img src="https://via.placeholder.com/150" alt="Profile" className="w-32 h-32 rounded-full mb-4" />
                <p className="text-xl font-semibold">John Doe</p>
                <p className="text-gray-500 mb-4">Software Engineer</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">Edit Profile</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
