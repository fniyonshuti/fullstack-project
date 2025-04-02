import React, { useState } from "react";

const UpcomingEvents = () => {
  // Sample event data
  const events = [
    {
      id: 1,
      title: "React Developer Conference",
      date: "2025-04-15",
      description:
        "Join industry leaders and developers from around the world to discuss the latest trends and techniques in React development.",
    },
    {
      id: 2,
      title: "JavaScript Mastery Workshop",
      date: "2025-05-20",
      description:
        "A hands-on workshop where you'll deep dive into JavaScript, explore advanced concepts, and work on real-world projects.",
    },
    {
      id: 3,
      title: "Full Stack Developer Meetup",
      date: "2025-06-10",
      description:
        "A meetup for full-stack developers to connect, share experiences, and learn new technologies in both front-end and back-end development.",
    },
  ];

  // State to toggle between list and grid views
  const [isGridView, setIsGridView] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 bg-white shadow-xl rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        Upcoming Events
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

      {/* Event List */}
      <div className={`grid gap-6 ${isGridView ? "grid-cols-3" : "grid-cols-1"}`}>
        {events.map((event) => (
          <div
            key={event.id}
            className="p-6 bg-gray-100 rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{event.date}</p>
            <p className="text-gray-700">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
