import React, { useState } from "react";

const notificationsData = [
  {
    id: 1,
    title: "New Job Seeker Applied",
    message: "John Doe has applied for the Software Engineer position.",
    date: "2025-03-30",
    isRead: false,
  },
  {
    id: 2,
    title: "New Candidate Profile",
    message: "A new candidate profile has been created by Jane Smith.",
    date: "2025-03-29",
    isRead: true,
  },
  {
    id: 3,
    title: "Job Listing Updated",
    message: "The job listing for Data Analyst has been updated.",
    date: "2025-03-28",
    isRead: false,
  },
];

const NotificationComponent = () => {
  const [notifications, setNotifications] = useState(notificationsData);

  // Mark notification as read
  const markAsRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        Employer Notifications
      </h2>

      {/* Notification List */}
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 border rounded-lg flex justify-between items-center ${
              notification.isRead ? "bg-gray-100" : "bg-blue-50"
            }`}
          >
            <div>
              <h3
                className={`font-semibold text-lg ${
                  notification.isRead ? "text-gray-500" : "text-gray-800"
                }`}
              >
                {notification.title}
              </h3>
              <p
                className={`text-sm ${
                  notification.isRead ? "text-gray-600" : "text-gray-800"
                }`}
              >
                {notification.message}
              </p>
            </div>
            <div className="text-sm text-gray-500">
              <p>{notification.date}</p>
              <button
                onClick={() => markAsRead(notification.id)}
                className={`mt-2 text-sm font-medium ${
                  notification.isRead
                    ? "text-gray-500"
                    : "text-blue-600 hover:text-blue-800"
                }`}
              >
                {notification.isRead ? "Read" : "Mark as Read"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationComponent;
