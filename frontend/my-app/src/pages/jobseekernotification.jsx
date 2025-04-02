import React, { useState } from "react";

const JobSeekerNotification = () => {
  // Sample notification data
  const notifications = [
    {
      id: 1,
      title: "New Job Opening: Software Engineer",
      description:
        "A new job opportunity has been posted for the role of Software Engineer at TechSolutions. Apply now to be part of an innovative tech team.",
      date: "2025-03-29",
      read: false,
    },
    {
      id: 2,
      title: "Application Status: Interview Scheduled",
      description:
        "Your application for the Marketing Manager position at GreenTech has been shortlisted. An interview has been scheduled for April 2nd, 2025.",
      date: "2025-03-28",
      read: true,
    },
    {
      id: 3,
      title: "Job Opportunity: Data Analyst",
      description:
        "A Data Analyst role at DataPro is now available. Check the job details and apply if you're interested.",
      date: "2025-03-27",
      read: false,
    },
  ];

  // State for tracking notifications
  const [notificationsState, setNotificationsState] = useState(notifications);
  // State for toggling view (list/grid)
  const [isGridView, setIsGridView] = useState(false);

  // Handle marking a notification as read
  const handleMarkAsRead = (id) => {
    setNotificationsState(
      notificationsState.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-xl rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        Job Notifications
      </h2>

      {/* Toggle View Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setIsGridView(!isGridView)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none transition duration-300"
        >
          {isGridView ? "Switch to List View" : "Switch to Grid View"}
        </button>
      </div>

      {/* Notification List/Grid */}
      <div className={`grid gap-6 ${isGridView ? "grid-cols-3" : "grid-cols-1"}`}>
        {notificationsState.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 border rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-lg ${
              notification.read ? "bg-gray-100" : "bg-blue-100"
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <h3
                className={`text-xl font-semibold ${
                  notification.read ? "text-gray-600" : "text-blue-600"
                }`}
              >
                {notification.title}
              </h3>
              <span
                className={`text-sm ${
                  notification.read ? "text-gray-500" : "text-blue-500"
                }`}
              >
                {notification.date}
              </span>
            </div>
            <p
              className={`text-gray-700 ${
                notification.read ? "text-gray-500" : "text-gray-700"
              }`}
            >
              {notification.description}
            </p>
            {!notification.read && (
              <button
                onClick={() => handleMarkAsRead(notification.id)}
                className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none transition duration-300"
              >
                Mark as Read
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobSeekerNotification;
