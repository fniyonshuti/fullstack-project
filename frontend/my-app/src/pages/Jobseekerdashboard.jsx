import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaBriefcase, FaGraduationCap, FaBell, FaCalendarAlt } from "react-icons/fa";
import UserProfile from "./UserProfile";
import JobListings from "./JobListings";
import JobSeekerNotification from "./jobseekernotification";
import SkillDevelopment from "./Skilldevelopment";
import UpcomingEvents from "./Upcomingevent";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("jobs"); // Default section is 'profile'
  const navigate = useNavigate();

  // Handle navigation and active section
  const handleNavigation = (section) => {
    setActiveSection(section);
    navigate(`#${section}`);
  };

  return (
    <div className="flex min-h-screen bg-red-100 mt-64 mb-40">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-6 space-y-6 sticky top-0 transition-all duration-300 ease-in-out">
        <h2 className="text-3xl font-semibold text-center mb-6">Career Connect</h2>
        <nav className="space-y-4">
          <button
            onClick={() => handleNavigation("profile")}
            className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 w-full text-left ${activeSection === "profile" ? "bg-red-700" : "hover:bg-blue-700"}`}
          >
            <FaUser /> <span className="text-lg">Profile</span>
          </button>
          <button
            onClick={() => handleNavigation("jobs")}
            className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 w-full text-left ${activeSection === "jobs" ? "bg-red-700" : "hover:bg-blue-700"}`}
          >
            <FaBriefcase /> <span className="text-lg">Job Listings</span>
          </button>
          <button
            onClick={() => handleNavigation("skills")}
            className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 w-full text-left ${activeSection === "skills" ? "bg-red-700" : "hover:bg-blue-700"}`}
          >
            <FaGraduationCap /> <span className="text-lg">Skill Development</span>
          </button>
          <button
            onClick={() => handleNavigation("notifications")}
            className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 w-full text-left ${activeSection === "notifications" ? "bg-red-700" : "hover:bg-blue-700"}`}
          >
            <FaBell /> <span className="text-lg">Notifications</span>
          </button>
          <button
            onClick={() => handleNavigation("events")}
            className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 w-full text-left ${activeSection === "events" ? "bg-blue-700" : "hover:bg-blue-700"}`}
          >
            <FaCalendarAlt /> <span className="text-lg">Events</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Sticky Header */}
        <section className="mb-8 sticky top-0 z-10 bg-white shadow-md py-4">
          <h1 className="text-3xl font-bold text-gray-700">Welcome Back, [User]!</h1>
          <p className="text-lg text-gray-600">Find opportunities, develop skills, and track your progress.</p>
        </section>

        {/* Section Transitions */}
        <div className="transition-all duration-300 ease-in-out">
          {/* Profile Section */}
          {activeSection === "profile" && <UserProfile />}

          {/* Job Listings Section */}
          {activeSection === "jobs" && <JobListings />}

          {/* Skill Development Section */}
          {activeSection === "skills" && <SkillDevelopment />}

          {/* Notifications Section */}
          {activeSection === "notifications" && <JobSeekerNotification />}

          {/* Events Section */}
          {activeSection === "events" && <UpcomingEvents />}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
