import React, { useState } from "react";

const SkillDevelopment = () => {
  // State for holding skills data
  const [skills, setSkills] = useState([
    {
      id: 1,
      name: "JavaScript",
      proficiency: 80,
    },
    {
      id: 2,
      name: "React",
      proficiency: 70,
    },
    {
      id: 3,
      name: "Node.js",
      proficiency: 60,
    },
  ]);

  // State for adding a new skill
  const [newSkill, setNewSkill] = useState({
    name: "",
    proficiency: 0,
  });

  // State for holding resources data
  const [resources, setResources] = useState([
    {
      id: 1,
      title: "How to Apply for Jobs Effectively",
      url: "https://www.youtube.com/watch?v=example1",
      type: "YouTube Video",
    },
    {
      id: 2,
      title: "Top Online Courses to Boost Your Career",
      url: "https://www.coursera.org/courses?query=career%20development",
      type: "Online Course",
    },
    {
      id: 3,
      title: "Mastering Job Interviews: Tips & Techniques",
      url: "https://www.udemy.com/course/job-interviews/",
      type: "Online Course",
    },
  ]);

  // State for toggle between grid and list view
  const [view, setView] = useState("list");

  // Handle form input change for new skill
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSkill((prevSkill) => ({
      ...prevSkill,
      [name]: value,
    }));
  };

  // Add new skill to the list
  const addSkill = () => {
    if (newSkill.name && newSkill.proficiency >= 0 && newSkill.proficiency <= 100) {
      setSkills([
        ...skills,
        { id: Date.now(), name: newSkill.name, proficiency: parseInt(newSkill.proficiency) },
      ]);
      setNewSkill({ name: "", proficiency: 0 });
    }
  };

  // Update proficiency of an existing skill
  const updateProficiency = (id, proficiency) => {
    setSkills(
      skills.map((skill) =>
        skill.id === id ? { ...skill, proficiency: parseInt(proficiency) } : skill
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        Jobseeker Skill Development
      </h2>

      {/* View toggle buttons */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setView("list")}
          className={`px-4 py-2 border rounded-lg mr-2 ${
            view === "list" ? "bg-blue-600 text-white" : "bg-white text-blue-600"
          }`}
        >
          List View
        </button>
        <button
          onClick={() => setView("grid")}
          className={`px-4 py-2 border rounded-lg ${
            view === "grid" ? "bg-blue-600 text-white" : "bg-white text-blue-600"
          }`}
        >
          Grid View
        </button>
      </div>

      {/* Current Skills Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Your Skills</h3>
        <div className={`grid gap-6 ${view === "grid" ? "grid-cols-3" : "grid-cols-1"}`}>
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <div className="font-medium text-gray-700">{skill.name}</div>
                <div className="text-gray-600">Proficiency: {skill.proficiency}%</div>
              </div>
              <div className="w-1/3">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={skill.proficiency}
                  onChange={(e) => updateProficiency(skill.id, e.target.value)}
                  className="w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add New Skill Section */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Add New Skill</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-lg font-medium text-gray-700" htmlFor="skillName">
              Skill Name
            </label>
            <input
              type="text"
              id="skillName"
              name="name"
              value={newSkill.name}
              onChange={handleInputChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter skill name"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700" htmlFor="proficiency">
              Proficiency (0 - 100)
            </label>
            <input
              type="number"
              id="proficiency"
              name="proficiency"
              value={newSkill.proficiency}
              onChange={handleInputChange}
              min="0"
              max="100"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter proficiency percentage"
            />
          </div>

          <button
            onClick={addSkill}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none transition duration-300"
          >
            Add Skill
          </button>
        </div>
      </div>

      {/* Career Resources Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Career Resources</h3>
        <div className={`grid gap-6 ${view === "grid" ? "grid-cols-3" : "grid-cols-1"}`}>
          {resources.map((resource) => (
            <div key={resource.id} className="p-4 bg-gray-100 rounded-lg shadow-sm">
              <div className="flex justify-between items-center">
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  {resource.title}
                </a>
                <span className="text-gray-500">{resource.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillDevelopment;
