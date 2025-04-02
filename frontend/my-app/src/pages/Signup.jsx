import React, { useState } from "react";
import axios from "axios";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setSuccess(""); // Clear success message

    try {
      const response = await axios.post("http://localhost:5000/api/users/register", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 201) {
        setSuccess("Registration successful! Redirecting...");
        setTimeout(() => {
          window.location.href = "/login"; // Redirect to login page
        }, 2000);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl text-center mb-4">Sign Up</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="border border-gray-300 p-2 w-full rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="border border-gray-300 p-2 w-full rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="border border-gray-300 p-2 w-full rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Role"
              className="border border-gray-300 p-2 w-full rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
