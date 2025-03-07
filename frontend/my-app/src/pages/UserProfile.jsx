import { useState } from "react";

export default function UserProfile() {
  const [user, setUser] = useState({
    name: "Jane Doe",
    bio: "Full-Stack Developer passionate about building scalable web applications.",
    avatar: "https://via.placeholder.com/150",
    email: "jane.doe@example.com",
    phone: "+1 (123) 456-7890",
    location: "San Francisco, CA",
    resumeLink: "#",
    portfolioLink: "#",
    skills: ["React", "Node.js", "JavaScript", "TailwindCSS"],
    experience: [
      {
        company: "Tech Corp",
        role: "Frontend Developer",
        duration: "2021 - Present",
      },
      {
        company: "Startup Inc.",
        role: "Backend Developer",
        duration: "2019 - 2021",
      },
    ],
    savedJobs: ["Frontend Developer at Google", "Software Engineer at Microsoft"],
    applications: ["Product Designer at Apple", "Backend Developer at Amazon"],
  });

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        
        {/* User Info */}
        <div className="text-center">
          <img src={user.avatar} alt="User Avatar" className="w-24 h-24 mx-auto rounded-full shadow-md" />
          <h2 className="text-2xl font-bold text-gray-900 mt-4">{user.name}</h2>
          <p className="text-gray-600">{user.bio}</p>
        </div>

        {/* Contact & Links */}
        <div className="mt-6 space-y-4">
          <p className="text-gray-700"><strong>Email:</strong> {user.email}</p>
          <p className="text-gray-700"><strong>Phone:</strong> {user.phone}</p>
          <p className="text-gray-700"><strong>Location:</strong> {user.location}</p>
          <div className="flex gap-4 mt-4">
            <a href={user.resumeLink} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              View Resume
            </a>
            <a href={user.portfolioLink} className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">
              Portfolio
            </a>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-900">Skills</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {user.skills.map((skill, index) => (
              <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-900">Experience</h3>
          <ul className="mt-2 space-y-3">
            {user.experience.map((exp, index) => (
              <li key={index} className="bg-gray-100 p-3 rounded-lg shadow-sm">
                <strong>{exp.company}</strong> - {exp.role} <span className="text-gray-500">({exp.duration})</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Saved Jobs */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-900">Saved Jobs</h3>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            {user.savedJobs.map((job, index) => (
              <li key={index}>{job}</li>
            ))}
          </ul>
        </div>

        {/* Applications */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-900">Job Applications</h3>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            {user.applications.map((app, index) => (
              <li key={index}>{app}</li>
            ))}
          </ul>
        </div>

        {/* Edit Profile Button */}
        <div className="mt-6 text-center">
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
            Edit Profile
          </button>
        </div>

      </div>
    </section>
  );
}
