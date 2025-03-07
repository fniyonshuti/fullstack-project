// JobApplication.jsx
import React, { useState } from "react";

const JobApplication = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !resume) {
      setMessage("Please fill all fields and upload a resume.");
      return;
    }
    setMessage("Application Submitted Successfully!");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md mt-20 size-150">
        <h2 className="text-2xl font-bold mb-4">Job Application</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Job Title: Software Developer</h3>
          <p className="text-gray-600">Company: TechCorp</p>
          <p className="text-gray-600">
            We are looking for a passionate software developer to join our team. This role requires proficiency in modern web technologies and the ability to work collaboratively.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Resume Upload */}
          <div className="mb-6">
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
              Upload Resume
            </label>
            <input
              type="file"
              id="resume"
              onChange={handleFileChange}
              className="mt-1 block w-full text-sm text-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              accept=".pdf, .doc, .docx"
              required
            />
          </div>

          {/* Message */}
          {message && <p className="text-red-500 text-sm mb-4">{message}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApplication;
