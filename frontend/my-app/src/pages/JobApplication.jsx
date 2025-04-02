import React, { useState, useRef } from "react";

const JobApplication = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    resume: null,
  });

  const [message, setMessage] = useState("");
  const messageRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, phone, resume } = formData;

    if (!fullName || !email || !phone || !resume) {
      setMessage("Please fill in all fields and upload a resume.");
    } else {
      setMessage("Your application has been submitted successfully!");
    }

    setTimeout(() => {
      messageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[url('/')] bg-no-repeat bg-cover h-full p-6 ">
      <div className="bg-black shadow-lg rounded-lg p-8 max-w-lg w-auto mt-50 mb-50 h-full  overflow-y-scroll text-white ">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-white-600 mb-6">
          Apply for a Job
        </h2>

        {/* Job Details */}
        <div className="bg-blue-50 p-4 rounded-md mb-6">
          <h3 className="text-lg font-semibold text-black">Software Developer</h3>
          <p className="text-gray-600 text-sm">Company: Career Connect</p>
          <p className="text-gray-600 text-sm mt-1">
            We are looking for a talented software developer to join our team.
            If you're passionate about building impactful applications, apply now!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full mt-1 p-3 border text-white border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Upload Resume</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
              accept=".pdf, .doc, .docx"
              required
            />
          </div>

          {/* Message Display */}
          {message && (
            <p ref={messageRef} className="text-center text-sm text-green-600 font-medium mt-2">
              {message}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md shadow-md font-semibold hover:bg-blue-700 transition duration-200"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApplication;
