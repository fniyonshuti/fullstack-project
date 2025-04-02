import React, { useState } from "react";

const CompanyProfile = () => {
  // State for company details
  const [companyDetails, setCompanyDetails] = useState({
    companyName: "Career Connect Inc.",
    companyEmail: "contact@careerconnect.com",
    companyWebsite: "https://www.careerconnect.com",
    companyDescription:
      "We are a global recruitment platform connecting employers with top talent across industries.",
    companyLogo: "",
  });

  // State for editing mode
  const [isEditing, setIsEditing] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Handle file upload for company logo
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCompanyDetails((prevDetails) => ({
          ...prevDetails,
          companyLogo: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Toggle editing mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
        Company Profile
      </h2>

      {/* Company Logo Upload */}
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-blue-500 shadow-md">
          {companyDetails.companyLogo ? (
            <img
              src={companyDetails.companyLogo}
              alt="Company Logo"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-500 text-lg">
              No Logo
            </div>
          )}
        </div>

        {isEditing && (
          <label className="cursor-pointer text-blue-600 hover:text-blue-800 transition">
            Change Logo
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        )}

        {/* Edit/Save Button */}
        <button
          onClick={toggleEdit}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none transition duration-300"
        >
          {isEditing ? "Save Changes" : "Edit Profile"}
        </button>
      </div>

      {/* Company Info Form */}
      <div className="mt-6 space-y-6">
        <div>
          <label className="block text-lg font-medium text-gray-700" htmlFor="companyName">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={companyDetails.companyName}
            onChange={handleChange}
            disabled={!isEditing}
            className={`w-full p-3 border rounded-lg ${
              isEditing ? "border-blue-500 focus:ring-2 focus:ring-blue-500" : "border-gray-300 bg-gray-100"
            }`}
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700" htmlFor="companyEmail">
            Company Email
          </label>
          <input
            type="email"
            id="companyEmail"
            name="companyEmail"
            value={companyDetails.companyEmail}
            onChange={handleChange}
            disabled={!isEditing}
            className={`w-full p-3 border rounded-lg ${
              isEditing ? "border-blue-500 focus:ring-2 focus:ring-blue-500" : "border-gray-300 bg-gray-100"
            }`}
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700" htmlFor="companyWebsite">
            Company Website
          </label>
          <input
            type="url"
            id="companyWebsite"
            name="companyWebsite"
            value={companyDetails.companyWebsite}
            onChange={handleChange}
            disabled={!isEditing}
            className={`w-full p-3 border rounded-lg ${
              isEditing ? "border-blue-500 focus:ring-2 focus:ring-blue-500" : "border-gray-300 bg-gray-100"
            }`}
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700" htmlFor="companyDescription">
            Company Description
          </label>
          <textarea
            id="companyDescription"
            name="companyDescription"
            value={companyDetails.companyDescription}
            onChange={handleChange}
            disabled={!isEditing}
            className={`w-full p-3 border rounded-lg ${
              isEditing ? "border-blue-500 focus:ring-2 focus:ring-blue-500" : "border-gray-300 bg-gray-100"
            }`}
            rows="4"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
