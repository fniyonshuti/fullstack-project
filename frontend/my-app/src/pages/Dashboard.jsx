import { useState } from "react";
import { FaUser, FaChartBar, FaShoppingCart, FaClipboardList, FaBriefcase, FaBell, FaEnvelope, FaUsers, FaRegIdCard, FaSignOutAlt } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import UsersList from "./UsersList";
import Employers from "./EmployerList";
import JobManagement from "./AdminJobManagement"; 
import JobSeeker from "./Adminjobseeker";

const data = [
  { name: "Mar 25", value: 2000 },
  { name: "Mar 26", value: 2500 },
  { name: "Mar 27", value: 1800 },
  { name: "Mar 28", value: 3000 },
  { name: "Mar 29", value: 3500 }
];

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("dashboard");

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  const handleLogout = () => {
    // Clear authentication tokens or session data
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("userSession");

    console.log("Admin logged out");

    // Optionally redirect to login or homepage
    window.location.href = "/"; // Adjust the path to your login page
  };

  return (
    <div className="flex h-screen bg-gray-100 mt-40 mb-40">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-5 space-y-6">
        <h2 className="text-2xl font-bold">Career Connect</h2>
        <nav>
          <a
            href="#"
            onClick={() => handleNavigation("dashboard")}
            className={`flex items-center p-2 space-x-3 hover:bg-gray-700 rounded ${activeSection === "dashboard" ? "bg-gray-700" : ""}`}
          >
            <FaChartBar /> <span>Dashboard</span>
          </a>
          <a
            href="#"
            onClick={() => handleNavigation("users")}
            className={`flex items-center p-2 space-x-3 hover:bg-gray-700 rounded ${activeSection === "users" ? "bg-gray-700" : ""}`}
          >
            <FaUser /> <span>Users</span>
          </a>
          <a
            href="#"
            onClick={() => handleNavigation("jobseekers")}
            className={`flex items-center p-2 space-x-3 hover:bg-gray-700 rounded ${activeSection === "jobseekers" ? "bg-gray-700" : ""}`}
          >
            <FaRegIdCard /> <span>Job Seekers</span>
          </a>
          <a
            href="#"
            onClick={() => handleNavigation("employers")}
            className={`flex items-center p-2 space-x-3 hover:bg-gray-700 rounded ${activeSection === "employers" ? "bg-gray-700" : ""}`}
          >
            <FaBriefcase /> <span>Employers</span>
          </a>
          <a
            href="#"
            onClick={() => handleNavigation("jobs")}
            className={`flex items-center p-2 space-x-3 hover:bg-gray-700 rounded ${activeSection === "jobs" ? "bg-gray-700" : ""}`}
          >
            <FaShoppingCart /> <span>Jobs</span>
          </a>
          <a
            href="#"
            onClick={() => handleNavigation("applications")}
            className={`flex items-center p-2 space-x-3 hover:bg-gray-700 rounded ${activeSection === "applications" ? "bg-gray-700" : ""}`}
          >
            <FaUsers /> <span>Applications</span>
          </a>
          <a
            href="#"
            onClick={() => handleNavigation("reports")}
            className={`flex items-center p-2 space-x-3 hover:bg-gray-700 rounded ${activeSection === "reports" ? "bg-gray-700" : ""}`}
          >
            <FaClipboardList /> <span>Reports</span>
          </a>
          <a
            href="#"
            onClick={() => handleNavigation("notifications")}
            className={`flex items-center p-2 space-x-3 hover:bg-gray-700 rounded ${activeSection === "notifications" ? "bg-gray-700" : ""}`}
          >
            <FaBell /> <span>Notifications</span>
          </a>
          <a
            href="#"
            onClick={() => handleNavigation("messages")}
            className={`flex items-center p-2 space-x-3 hover:bg-gray-700 rounded ${activeSection === "messages" ? "bg-gray-700" : ""}`}
          >
            <FaEnvelope /> <span>Messages</span>
          </a>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center p-2 space-x-3 hover:bg-red-700 rounded text-red-400 mt-6"
          >
            <FaSignOutAlt /> <span>Logout</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        {/* Conditional Content */}
        {activeSection === "dashboard" && (
          <div>
            {/* Stats Cards */}
            <div className="grid grid-cols-4 gap-6">
              <div className="bg-white p-4 shadow rounded-lg">
                <p className="text-gray-600">Visitors</p>
                <h2 className="text-xl font-bold">1,294</h2>
              </div>
              <div className="bg-white p-4 shadow rounded-lg">
                <p className="text-gray-600">Subscribers</p>
                <h2 className="text-xl font-bold">1,303</h2>
              </div>
              <div className="bg-white p-4 shadow rounded-lg">
                <p className="text-gray-600">Jobs Posted</p>
                <h2 className="text-xl font-bold">245</h2>
              </div>
              <div className="bg-white p-4 shadow rounded-lg">
                <p className="text-gray-600">Applications</p>
                <h2 className="text-xl font-bold">576</h2>
              </div>
            </div>

            {/* Chart */}
            <div className="mt-6 bg-white p-6 shadow rounded-lg">
              <h3 className="text-xl font-bold mb-4">User Statistics</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activeSection === "users" && <div><UsersList /></div>}
        {activeSection === "jobseekers" && <div><JobSeeker /></div>}
        {activeSection === "employers" && <div><Employers /></div>}
        {activeSection === "jobs" && <div><JobManagement /></div>}
        {activeSection === "applications" && <div>Applications Section Content</div>}
        {activeSection === "reports" && <div>Reports Section Content</div>}
        {activeSection === "notifications" && <div>Notifications Section Content</div>}
        {activeSection === "messages" && <div>Messages Section Content</div>}
      </main>
    </div>
  );
}
