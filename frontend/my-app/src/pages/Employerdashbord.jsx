import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBriefcase, FaClipboardList, FaUsers, FaEnvelope } from "react-icons/fa";

export default function EmployerDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  // Dummy data for job listings and applications
  const dashboardData = {
    totalJobsPosted: 15,
    totalApplications: 85,
    totalActiveApplicants: 42,
    jobStats: [
      { jobTitle: "Software Engineer", applicants: 15 },
      { jobTitle: "Product Manager", applicants: 20 },
      { jobTitle: "Data Scientist", applicants: 10 },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-blue-800 text-white p-6">
          <h1 className="text-2xl font-bold mb-8">Career Connect</h1>
          <ul>
            <li className={`p-4 cursor-pointer ${activeTab === "overview" ? "bg-blue-700" : ""}`} onClick={() => setActiveTab("overview")}>
              Overview
            </li>
            <li className={`p-4 cursor-pointer ${activeTab === "jobs" ? "bg-blue-700" : ""}`} onClick={() => setActiveTab("jobs")}>
              Job Listings
            </li>
            <li className={`p-4 cursor-pointer ${activeTab === "applications" ? "bg-blue-700" : ""}`} onClick={() => setActiveTab("applications")}>
              Applications
            </li>
            <li className={`p-4 cursor-pointer ${activeTab === "messages" ? "bg-blue-700" : ""}`} onClick={() => setActiveTab("messages")}>
              Messages
            </li>
            <li className="p-4 cursor-pointer">Manage Profile</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-semibold text-gray-800">Employer Dashboard</h2>
            <div className="flex items-center space-x-4">
              <Link to="/profile" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Profile</Link>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg">Logout</button>
            </div>
          </div>

          {/* Dashboard Overview */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Total Jobs Posted */}
              <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4">
                <FaBriefcase className="text-blue-600 text-4xl" />
                <div>
                  <h3 className="text-xl font-semibold">Jobs Posted</h3>
                  <p className="text-gray-500">{dashboardData.totalJobsPosted}</p>
                </div>
              </div>

              {/* Total Applications */}
              <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4">
                <FaClipboardList className="text-green-600 text-4xl" />
                <div>
                  <h3 className="text-xl font-semibold">Applications</h3>
                  <p className="text-gray-500">{dashboardData.totalApplications}</p>
                </div>
              </div>

              {/* Active Applicants */}
              <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4">
                <FaUsers className="text-purple-600 text-4xl" />
                <div>
                  <h3 className="text-xl font-semibold">Active Applicants</h3>
                  <p className="text-gray-500">{dashboardData.totalActiveApplicants}</p>
                </div>
              </div>
            </div>
          )}

          {/* Job Listings */}
          {activeTab === "jobs" && (
            <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Your Job Listings</h3>
              <ul>
                {dashboardData.jobStats.map((job, index) => (
                  <li key={index} className="flex justify-between items-center p-4 border-b">
                    <span className="text-lg font-semibold">{job.jobTitle}</span>
                    <span className="text-gray-500">{job.applicants} applicants</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Messages */}
          {activeTab === "messages" && (
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Recent Messages</h3>
              <div className="p-4 border-b">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">John Doe</span>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
                <p className="text-gray-600">Interested in the Software Engineer position. Looking forward to hearing from you!</p>
              </div>
              <div className="p-4 border-b">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Jane Smith</span>
                  <span className="text-sm text-gray-500">1 day ago</span>
                </div>
                <p className="text-gray-600">Just applied for the Data Scientist position. Hope to connect soon!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
