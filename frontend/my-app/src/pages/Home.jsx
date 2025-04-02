import AboutSection from './About';
import ContactSection from './Contact';
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <>
    <section className="bg-green-200 py-30 bg-[url(https://img.freepik.com/free-photo/abstract-business-people-city-buildings_53876-139657.jpg?t=st=1741201010~exp=1741204610~hmac=6d11e3cd158bbf0c9c431be947520e95480e88f33e269888b6070b9a3a4fd77a&w=1480)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center ">
        
        {/* Hero Section */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Find Your <span className="text-blue-600">Dream Job</span> Today
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Connecting job seekers with top companies worldwide.
        </p>

        {/* Job Search Bar */}
        <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4">
          <input 
            type="text" 
            placeholder="Job title, company, or keyword" 
            className="w-full md:w-1/3 p-3 border border-gray-300 rounded-lg focus:outline-none"
          />
          <input 
            type="text" 
            placeholder="Location (e.g., Remote, New York)" 
            className="w-full md:w-1/3 p-3 border border-gray-300 rounded-lg focus:outline-none"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Search
          </button>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">
          <Link to="/login" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Get Started as Job Seeker
          </Link>
          <Link to="/login" className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            Post a Job as Employer
          </Link>
        </div>

        {/* Image or Illustration */}
        <div className="mt-12">
          <img src="https://source.unsplash.com/1000x500/?office,work" alt="Career" className="rounded-lg shadow-lg w-full md:w-3/4 mx-auto"/>
        </div>

      </div>
    </section>
  <AboutSection id="#about"/>
  <ContactSection id="#contact"/>
  </>
  );
}
