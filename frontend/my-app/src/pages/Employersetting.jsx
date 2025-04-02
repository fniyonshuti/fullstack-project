import React, { useState } from "react";

const EmployerDashboardSettings = () => {
  // State for employer settings
  const [settings, setSettings] = useState({
    companyName: "Career Connect Inc.",
    companyEmail: "contact@careerconnect.com",
    companyWebsite: "https://www.careerconnect.com",
    companyDescription:
      "We are a global recruitment platform connecting employers with top talent across industries.",
    companyLogo: "",
    companyLocation: "New York, USA",
    companyIndustry: "Recruitment",
  });

  // State for editing mode
  const [isEditing, setIsEditing] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  // Toggle editing mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        Employer Dashboard Settings
      </h2>

      {/* Company Logo */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
            {settings.companyLogo ? (
              <img
                src={settings.companyLogo}
                alt="Company Logo"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-4xl text-gray-500">No Logo</span>
            )}
          </div>
          <div>
            <button
              onClick={toggleEdit}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none transition duration-300"
            >
              {isEditing ? "Save" : "Edit"}
            </button>
          </div>
        </div>
      </div>

      {/* Employer Settings Form */}
      <div className="space-y-6">
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="companyName">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={settings.companyName}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="companyEmail">
            Company Email
          </label>
          <input
            type="email"
            id="companyEmail"
            name="companyEmail"
            value={settings.companyEmail}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="companyWebsite">
            Company Website
          </label>
          <input
            type="url"
            id="companyWebsite"
            name="companyWebsite"
            value={settings.companyWebsite}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="companyLocation">
            Company Location
          </label>
          <input
            type="text"
            id="companyLocation"
            name="companyLocation"
            value={settings.companyLocation}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="companyIndustry">
            Company Industry
          </label>
          <input
            type="text"
            id="companyIndustry"
            name="companyIndustry"
            value={settings.companyIndustry}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="companyDescription">
            Company Description
          </label>
          <textarea
            id="companyDescription"
            name="companyDescription"
            value={settings.companyDescription}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            rows="5"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboardSettings;
