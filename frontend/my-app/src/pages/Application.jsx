import React, { useEffect, useState } from "react";
import axios from "axios";

const UserStatusTable = () => {
  const [data, setData] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/applications/");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleViewDetails = (application) => {
    setSelectedApplication(application);
  };

  const handleStatusChange = (id, newStatus) => {
    setData((prevData) =>
      prevData.map((app) =>
        app._id === id ? { ...app, status: newStatus } : app
      )
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Applications Overview</h2>
      <p className="mb-4 text-gray-600">Employers can view and manage applications.</p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="py-2 px-4 border-b">User ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Role</th>
              <th className="py-2 px-4 border-b">Job Applied</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id} className="text-center">
                <td className="py-2 px-4 border-b">{item.userId._id}</td>
                <td className="py-2 px-4 border-b">{item.userId.name}</td>
                <td className="py-2 px-4 border-b">{item.userId.email}</td>
                <td className="py-2 px-4 border-b capitalize">{item.userId.role}</td>
                <td className="py-2 px-4 border-b">{item.jobId ? item.jobId.title : "N/A"}</td>
                <td
                  className={`py-2 px-4 border-b font-semibold ${
                    item.status === "Pending" ? "text-yellow-500" : "text-green-500"
                  }`}
                >
                  {item.status}
                </td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleViewDetails(item)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedApplication && (
        <div className="mt-6 p-4 border border-gray-300 rounded bg-gray-50">
          <h3 className="text-xl font-semibold">Application Details</h3>
          <p><strong>Name:</strong> {selectedApplication.userId.name}</p>
          <p><strong>Email:</strong> {selectedApplication.userId.email}</p>
          <p><strong>Role:</strong> {selectedApplication.userId.role}</p>
          <p><strong>Job Applied:</strong> {selectedApplication.jobId ? selectedApplication.jobId.title : "N/A"}</p>
          <p><strong>Status:</strong> {selectedApplication.status}</p>
          <div className="mt-4">
            <button
              onClick={() => handleStatusChange(selectedApplication._id, "Approved")}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2"
            >
              Approve
            </button>
            <button
              onClick={() => handleStatusChange(selectedApplication._id, "Rejected")}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Reject
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserStatusTable;
