import React, { useState } from "react";

export default function UserProfile() {
  // Initial User Data
  const [user, setUser] = useState({
    name: "John Doe",
    jobTitle: "Full-Stack Developer",
    location: "San Francisco, CA",
    email: "johndoe@example.com",
    bio: "Passionate developer with 5+ years of experience in building web applications.",
    skills: ["JavaScript", "React", "Node.js", "Tailwind CSS"],
  });

  const [isEditing, setIsEditing] = useState(false); // Edit Mode State
  const [formData, setFormData] = useState(user); // Form Data State

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Save Changes
  const handleSave = () => {
    setUser(formData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
        {/* Profile Header */}
        <div className="flex items-center space-x-6">
          <img
            src="https://via.placeholder.com/100" // Replace with actual profile picture URL
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-4 border-blue-500"
          />
          <div>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="text-2xl font-bold text-gray-800 border border-gray-300 p-1 rounded"
              />
            ) : (
              <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
            )}
            {isEditing ? (
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                className="text-gray-600 border border-gray-300 p-1 rounded mt-1"
              />
            ) : (
              <p className="text-gray-600">{user.jobTitle}</p>
            )}
            {isEditing ? (
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="text-gray-500 border border-gray-300 p-1 rounded mt-1"
              />
            ) : (
              <p className="text-gray-500">{user.location}</p>
            )}
          </div>
        </div>

        {/* Bio Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-700">About Me</h3>
          {isEditing ? (
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded mt-2"
            />
          ) : (
            <p className="text-gray-600 mt-2">{user.bio}</p>
          )}
        </div>

        {/* Skills Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-700">Skills</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {user.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Contact & Actions */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-700">Contact</h3>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded mt-1"
            />
          ) : (
            <p className="text-gray-600 mt-1">{user.email}</p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex gap-4">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
