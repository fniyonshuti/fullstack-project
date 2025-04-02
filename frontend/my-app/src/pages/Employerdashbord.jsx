import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaBriefcase, FaUsers, FaBuilding, FaClipboardList, FaBell, FaCog, FaSignOutAlt } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { AuthContext } from "../context/AuthContext"; // Import AuthContext
import CompanyProfile from "./Companyprofile";
import JobManagement from "./Application";
import HiringMetrics from "./Hiringmetrics";
import NotificationComponent from "./EmployerNotification";
import EmployerDashboardSettings from "./Employersetting";
import UserStatusTable from "./Application";

const EmployerDashboard = () => {
  const { logout } = useContext(AuthContext); // Access logout from context
  const [activeSection, setActiveSection] = useState("job-listings");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showNavbar, setShowNavbar] = useState(true);
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/jobs");
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleNavigation = (section) => {
    setActiveSection(section);
    navigate(`#${section}`);
  };

  const handleLogout = () => {
    logout(); // Call logout function from context
    setShowNavbar(false);
    navigate("/"); // Redirect to login
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-indigo-600 to-blue-500">
      {/* Sidebar */}
      {showNavbar && (
        <aside
          className={`w-72 bg-gradient-to-b from-blue-700 to-blue-800 text-white p-6 space-y-8 shadow-lg rounded-lg sticky top-0 transition-all duration-300 ${
            isMobile ? "absolute inset-0 z-10" : ""
          }`}
        >
          <h2 className="text-3xl font-bold text-center">Career Connect</h2>
          <p className="text-center text-sm italic">Employer Dashboard</p>
          <nav className="space-y-6">
            <button
              onClick={() => handleNavigation("job-listings")}
              className={`flex items-center space-x-4 p-3 rounded-lg transition-all duration-200 w-full text-left ${
                activeSection === "job-listings" ? "bg-indigo-600" : "hover:bg-indigo-600"
              }`}
            >
              <FaBriefcase className="text-xl" /> <span className="text-lg">Job Listings</span>
            </button>
            <button
              onClick={() => handleNavigation("applications")}
              className={`flex items-center space-x-4 p-3 rounded-lg transition-all duration-200 w-full text-left ${
                activeSection === "applications" ? "bg-indigo-600" : "hover:bg-indigo-600"
              }`}
            >
              <FaUsers className="text-xl" /> <span className="text-lg">Applications</span>
            </button>
            <button
              onClick={() => handleNavigation("company-profile")}
              className={`flex items-center space-x-4 p-3 rounded-lg transition-all duration-200 w-full text-left ${
                activeSection === "company-profile" ? "bg-indigo-600" : "hover:bg-indigo-600"
              }`}
            >
              <FaBuilding className="text-xl" /> <span className="text-lg">Company Profile</span>
            </button>
            <button
              onClick={() => handleNavigation("hiring-metrics")}
              className={`flex items-center space-x-4 p-3 rounded-lg transition-all duration-200 w-full text-left ${
                activeSection === "hiring-metrics" ? "bg-indigo-600" : "hover:bg-indigo-600"
              }`}
            >
              <FaClipboardList className="text-xl" /> <span className="text-lg">Hiring Metrics</span>
            </button>
            <button
              onClick={() => handleNavigation("notifications")}
              className={`flex items-center space-x-4 p-3 rounded-lg transition-all duration-200 w-full text-left ${
                activeSection === "notifications" ? "bg-indigo-600" : "hover:bg-indigo-600"
              }`}
            >
              <FaBell className="text-xl" /> <span className="text-lg">Notifications</span>
            </button>
            <button
              onClick={() => handleNavigation("settings")}
              className={`flex items-center space-x-4 p-3 rounded-lg transition-all duration-200 w-full text-left ${
                activeSection === "settings" ? "bg-indigo-600" : "hover:bg-indigo-600"
              }`}
            >
              <FaCog className="text-xl" /> <span className="text-lg">Settings</span>
            </button>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="flex items-center space-x-4 p-3 rounded-lg transition-all duration-200 w-full text-left bg-red-600 hover:bg-red-700"
            >
              <FaSignOutAlt className="text-xl" /> <span className="text-lg">Logout</span>
            </button>
          </nav>
        </aside>
      )}

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto bg-white shadow-xl rounded-lg mx-4 my-6">
        <section className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-800">Welcome Back, [Employer Name]!</h1>
          <p className="text-lg text-gray-600 mt-2">Manage your job postings, view applicants, and track your hiring process.</p>
        </section>

        {activeSection === "job-listings" && (
          <section id="job-listings" className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-800">Manage Job Listings</h2>
            {loading ? (
              <p className="text-gray-600">Loading job listings...</p>
            ) : error ? (
              <p className="text-red-600">{error}</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {jobs.map((job) => (
                  <div key={job.id} className="bg-white p-6 shadow-2xl rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                    <h3 className="font-semibold text-xl text-gray-800">{job.title}</h3>
                    <p className="text-gray-600">{job.company} - {job.location}</p>
                    <div className="mt-4 space-y-2">
                      <p className="text-gray-800 font-medium"><strong>Description:</strong> {job.description}</p>
                      <p className="text-gray-800 font-medium"><strong>Salary:</strong> {job.salary}</p>
                    </div>
                    <div className="mt-6 flex space-x-4">
                      <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
                        Edit Listing
                      </button>
                      <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300">
                        Delete Listing
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {activeSection === "applications" && <UserStatusTable />}
        {activeSection === "company-profile" && <CompanyProfile />}
        {activeSection === "hiring-metrics" && <HiringMetrics />}
        {activeSection === "notifications" && <NotificationComponent />}
        {activeSection === "settings" && <EmployerDashboardSettings />}
      </main>
    </div>
  );
};

export default EmployerDashboard;
