import { useState, useEffect } from "react";

export default function AboutSection() {
  const [jobsData, setJobsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/jobs');
        const data = await response.json();
        setJobsData(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="bg-white py-20" id="about">
        <div className="text-center text-gray-600">Loading...</div>
      </section>
    );
  }

  return (
    <section className="bg-white py-20" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            About <span className="text-blue-600">Career Connect</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Empowering job seekers and businesses by bridging the gap between talent and opportunity.
          </p>
        </div>

        {/* Content Section */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">

          {/* Left: Image */}
          <div>
            <img 
              src="https://www.africa.engineering.cmu.edu/_files/images/students/career-services/career-services-med.png" 
              alt="About Career Connect" 
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right: Text */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Available Jobs</h3>
            <ul className="mt-4 space-y-3 text-gray-600">
              {jobsData.slice(0, 5).map((job) => (
                <li key={job.id} className="flex items-start space-x-2">
                  <span>✅</span>
                  <span>{job.title}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Statistics Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 text-center">
          <div>
            <h4 className="text-3xl font-bold text-blue-600">{jobsData.length}+</h4>
            <p className="text-gray-600">Jobs Listed</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-blue-600">500+</h4>
            <p className="text-gray-600">Companies</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-blue-600">50K+</h4>
            <p className="text-gray-600">Job Seekers</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-blue-600">98%</h4>
            <p className="text-gray-600">Success Rate</p>
          </div>
        </div>

      </div>
    </section>
  );
}
