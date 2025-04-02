import React from "react";

const HiringMetrics = () => {
  // Sample data for hiring metrics
  const metrics = {
    totalApplicants: 120,
    interviewsScheduled: 35,
    hiresMade: 15,
    openPositions: 5,
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        Hiring Metrics
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Applicants */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-medium text-gray-700">Total Applicants</h3>
          <p className="text-3xl font-semibold text-blue-600">{metrics.totalApplicants}</p>
        </div>

        {/* Interviews Scheduled */}
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-medium text-gray-700">Interviews Scheduled</h3>
          <p className="text-3xl font-semibold text-yellow-600">{metrics.interviewsScheduled}</p>
        </div>

        {/* Hires Made */}
        <div className="bg-green-100 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-medium text-gray-700">Hires Made</h3>
          <p className="text-3xl font-semibold text-green-600">{metrics.hiresMade}</p>
        </div>

        {/* Open Positions */}
        <div className="bg-red-100 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-medium text-gray-700">Open Positions</h3>
          <p className="text-3xl font-semibold text-red-600">{metrics.openPositions}</p>
        </div>
      </div>

      {/* Additional Data Section (if needed) */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Recent Activity</h3>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-medium text-gray-700">Recent Applicants</h4>
          <ul className="space-y-4 mt-4">
            {/* Sample applicant list */}
            <li className="flex justify-between text-gray-600">
              <span>John Doe</span>
              <span className="font-semibold text-blue-600">Interview Scheduled</span>
            </li>
            <li className="flex justify-between text-gray-600">
              <span>Jane Smith</span>
              <span className="font-semibold text-blue-600">Hired</span>
            </li>
            <li className="flex justify-between text-gray-600">
              <span>James Wilson</span>
              <span className="font-semibold text-yellow-600">Interview Scheduled</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HiringMetrics;
