import React, { useState } from "react";

// Mock data for employers
const employersData = [
  { id: 1, name: "TechCorp", email: "contact@techcorp.com", jobTitle: "Software Engineer", role: "Admin" },
  { id: 2, name: "Web Solutions", email: "support@websolutions.com", jobTitle: "Product Manager", role: "Editor" },
  { id: 3, name: "GreenTech", email: "hr@greentech.com", jobTitle: "UX Designer", role: "Viewer" },
  { id: 4, name: "EduTech", email: "info@edutech.com", jobTitle: "Marketing Specialist", role: "Admin" }
];

export default function Employers() {
  const [employers, setEmployers] = useState(employersData);
  const [viewMode, setViewMode] = useState("list");
  const [newEmployer, setNewEmployer] = useState({ name: "", email: "", jobTitle: "", role: "" });
  const [isEditing, setIsEditing] = useState(null); // Track which employer is being edited

  // Handle delete action
  const handleDelete = (id) => {
    const updatedEmployers = employers.filter((employer) => employer.id !== id);
    setEmployers(updatedEmployers);
  };

  // Handle edit action (switch to edit mode)
  const handleEdit = (id) => {
    const employerToEdit = employers.find((employer) => employer.id === id);
    setNewEmployer({ ...employerToEdit });
    setIsEditing(id); // Set the employer ID that is being edited
  };

  // Handle save action (save the changes)
  const handleSave = () => {
    const updatedEmployers = employers.map((employer) =>
      employer.id === isEditing ? { ...employer, ...newEmployer } : employer
    );
    setEmployers(updatedEmployers);
    setIsEditing(null); // Exit edit mode
    setNewEmployer({ name: "", email: "", jobTitle: "", role: "" });
  };

  // Handle cancel action (exit edit mode without saving)
  const handleCancel = () => {
    setIsEditing(null); // Exit edit mode
    setNewEmployer({ name: "", email: "", jobTitle: "", role: "" });
  };

  // Handle input changes
  const handleChange = (e) => {
    setNewEmployer({ ...newEmployer, [e.target.name]: e.target.value });
  };

  // Toggle between grid and list view
  const toggleView = () => {
    setViewMode(viewMode === "list" ? "grid" : "list");
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h3 className="text-xl font-bold mb-4">Employers List</h3>

      {/* Toggle View Button */}
      <button onClick={toggleView} className="bg-gray-300 p-2 rounded mb-6">
        Toggle to {viewMode === "list" ? "Grid" : "List"} View
      </button>

      {/* Employers Display */}
      {viewMode === "list" ? (
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border border-gray-300">Company Name</th>
              <th className="px-4 py-2 border border-gray-300">Email</th>
              <th className="px-4 py-2 border border-gray-300">Job Title</th>
              <th className="px-4 py-2 border border-gray-300">Role</th>
              <th className="px-4 py-2 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employers.map((employer) => (
              <tr key={employer.id} className="border-b border-gray-200">
                <td className="px-4 py-2">
                  {isEditing === employer.id ? (
                    <input
                      type="text"
                      name="name"
                      value={newEmployer.name}
                      onChange={handleChange}
                      className="border px-2 py-1 rounded w-full"
                    />
                  ) : (
                    employer.name
                  )}
                </td>
                <td className="px-4 py-2">
                  {isEditing === employer.id ? (
                    <input
                      type="email"
                      name="email"
                      value={newEmployer.email}
                      onChange={handleChange}
                      className="border px-2 py-1 rounded w-full"
                    />
                  ) : (
                    employer.email
                  )}
                </td>
                <td className="px-4 py-2">
                  {isEditing === employer.id ? (
                    <input
                      type="text"
                      name="jobTitle"
                      value={newEmployer.jobTitle}
                      onChange={handleChange}
                      className="border px-2 py-1 rounded w-full"
                    />
                  ) : (
                    employer.jobTitle
                  )}
                </td>
                <td className="px-4 py-2">
                  {isEditing === employer.id ? (
                    <select
                      name="role"
                      value={newEmployer.role}
                      onChange={handleChange}
                      className="border px-2 py-1 rounded w-full"
                    >
                      <option value="Admin">Admin</option>
                      <option value="Editor">Editor</option>
                      <option value="Viewer">Viewer</option>
                    </select>
                  ) : (
                    employer.role
                  )}
                </td>
                <td className="px-4 py-2">
                  {isEditing === employer.id ? (
                    <>
                      <button
                        onClick={handleSave}
                        className="bg-blue-500 text-white px-4 py-1 rounded mr-2"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancel}
                        className="bg-gray-500 text-white px-4 py-1 rounded"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEdit(employer.id)}
                        className="bg-yellow-500 text-white px-4 py-1 rounded mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(employer.id)}
                        className="bg-red-500 text-white px-4 py-1 rounded"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {employers.map((employer) => (
            <div key={employer.id} className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center">
              <h4 className="text-xl font-bold mb-2">{employer.name}</h4>
              <p className="text-gray-600 mb-2">{employer.jobTitle}</p>
              <p className="text-gray-500 mb-2">{employer.email}</p>
              <span className="text-sm text-gray-700 mb-4">{employer.role}</span>
              <div className="flex space-x-2">
                {isEditing === employer.id ? (
                  <>
                    <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-1 rounded">
                      Save
                    </button>
                    <button onClick={handleCancel} className="bg-gray-500 text-white px-4 py-1 rounded">
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleEdit(employer.id)}
                      className="bg-yellow-500 text-white px-4 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(employer.id)}
                      className="bg-red-500 text-white px-4 py-1 rounded"
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
