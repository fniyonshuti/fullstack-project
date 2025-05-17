import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [userData, setUserData] = useState({ name: "", email: "", role: "User" });
  const [viewType, setViewType] = useState("grid"); // State to toggle between grid and list views

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.get("https://career-connect-backend-xyxu.onrender.com/api/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(response.data);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      const token = localStorage.getItem("authToken");
      await axios.delete(`https://career-connect-backend-xyxu.onrender.com/api/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(users.filter((user) => user._id !== id));
    } catch (err) {
      alert("Failed to delete user");
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setUserData(user);
    setShowModal(true);
  };

  const handleAdd = () => {
    setEditingUser(null);
    setUserData({ name: "", email: "", role: "User" });
    setShowModal(true);
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (editingUser) {
        await axios.put(`https://career-connect-backend-xyxu.onrender.com/api/users/${editingUser._id}`, userData, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        await axios.post("https://career-connect-backend-xyxu.onrender.com/api/users", userData, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      fetchUsers();
      setShowModal(false);
    } catch (err) {
      alert("Failed to save user");
    }
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">User Management</h2>
        <div className="mb-4 flex justify-between">
          <input
            type="text"
            placeholder="Search users..."
            className="border p-2 w-full max-w-md rounded-lg focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleAdd} className="bg-green-500 text-white px-4 py-2 rounded">Add User</button>
        </div>

        <div className="flex justify-between mb-4">
          <button
            onClick={() => setViewType("grid")}
            className={`px-4 py-2 rounded ${viewType === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            Grid View
          </button>
          <button
            onClick={() => setViewType("list")}
            className={`px-4 py-2 rounded ${viewType === "list" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            List View
          </button>
        </div>

        {loading ? (
          <p className="text-gray-500 text-center">Loading users...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : filteredUsers.length === 0 ? (
          <p className="text-center text-gray-500">No users found.</p>
        ) : (
          <motion.div
            className={`${
              viewType === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-6"
            }`}
          >
            {filteredUsers.map((user) => (
              <motion.div key={user._id} whileHover={{ scale: 1.05 }} className="bg-white shadow-md p-4 border rounded-lg">
                <h3 className="text-xl font-semibold text-gray-700">{user.name}</h3>
                <p className="text-gray-500">{user.email}</p>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm mt-2">{user.role || "User"}</span>
                <div className="mt-4 flex justify-between">
                  {editingUser?._id === user._id ? (
                    <div className="flex space-x-2">
                      <button onClick={handleSubmit} className="bg-blue-500 text-white px-3 py-1 rounded">Save</button>
                      <button onClick={() => setEditingUser(null)} className="bg-gray-500 text-white px-3 py-1 rounded">Cancel</button>
                    </div>
                  ) : (
                    <div className="flex space-x-2">
                      <button onClick={() => handleEdit(user)} className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>
                      <button onClick={() => handleDelete(user._id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">{editingUser ? "Edit User" : "Add User"}</h2>
            <input
              type="text"
              placeholder="Name"
              className="border p-2 w-full mb-2"
              value={userData.name}
              onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              className="border p-2 w-full mb-2"
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            />
            <select
              className="border p-2 w-full mb-4"
              value={userData.role}
              onChange={(e) => setUserData({ ...userData, role: e.target.value })}
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
            <div className="flex justify-end gap-2">
              <button onClick={() => setShowModal(false)} className="bg-gray-500 text-white px-3 py-1 rounded">Cancel</button>
              <button onClick={handleSubmit} className="bg-blue-500 text-white px-3 py-1 rounded">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
