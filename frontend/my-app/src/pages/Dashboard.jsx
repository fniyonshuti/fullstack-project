import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUsers, FaBriefcase, FaChartBar } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const dashboardData = {
  users: 250,
  jobsPosted: 125,
  applicationsReceived: 320,
};

const chartData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Applications Over Time",
      data: [30, 45, 60, 70, 85, 100],
      fill: true,
      backgroundColor: "rgba(38, 123, 255, 0.2)",
      borderColor: "rgba(38, 123, 255, 1)",
      tension: 0.3,
    },
  ],
};

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

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
            <li className={`p-4 cursor-pointer ${activeTab === "users" ? "bg-blue-700" : ""}`} onClick={() => setActiveTab("users")}>
              Users
            </li>
            <li className={`p-4 cursor-pointer ${activeTab === "jobs" ? "bg-blue-700" : ""}`} onClick={() => setActiveTab("jobs")}>
              Job Listings
            </li>
            <li className={`p-4 cursor-pointer ${activeTab === "applications" ? "bg-blue-700" : ""}`} onClick={() => setActiveTab("applications")}>
              Applications
            </li>
            <li className="p-4 cursor-pointer">Manage Users</li>
            <li className="p-4 cursor-pointer">Add Job</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-semibold text-gray-800">Admin Dashboard</h2>
            <div className="flex items-center space-x-4">
              <Link to="/profile" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Admin Profile</Link>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg">Logout</button>
            </div>
          </div>

          {/* Dashboard Overview */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Users */}
              <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4">
                <FaUsers className="text-blue-600 text-4xl" />
                <div>
                  <h3 className="text-xl font-semibold">Users</h3>
                  <p className="text-gray-500">{dashboardData.users}</p>
                </div>
              </div>

              {/* Jobs */}
              <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4">
                <FaBriefcase className="text-green-600 text-4xl" />
                <div>
                  <h3 className="text-xl font-semibold">Jobs Posted</h3>
                  <p className="text-gray-500">{dashboardData.jobsPosted}</p>
                </div>
              </div>

              {/* Applications */}
              <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4">
                <FaChartBar className="text-purple-600 text-4xl" />
                <div>
                  <h3 className="text-xl font-semibold">Applications Received</h3>
                  <p className="text-gray-500">{dashboardData.applicationsReceived}</p>
                </div>
              </div>
            </div>
          )}

          {/* Graph - Applications over Time */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Applications Over Time</h3>
            <Line data={chartData} />
          </div>
        </div>
      </div>
    </div>
  );
}
