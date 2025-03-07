import React, { useState } from "react";

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  // Functions to toggle the forms
  const toggleLogin = () => {
    setShowLogin(true);
    setShowSignup(false); // Hide signup form when login is clicked
  };

  const toggleSignup = () => {
    setShowSignup(true);
    setShowLogin(false); // Hide login form when signup is clicked
  };

  return (
    <div>
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-blue-600">
                CareerConnect
              </a>
            </div>

            {/* Navigation Links (Hidden on Mobile) */}
            <div className="hidden md:flex space-x-6">
              <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="/jobs" className="text-gray-700 hover:text-blue-600">Jobs</a>
              <a href="/companies" className="text-gray-700 hover:text-blue-600">Companies</a>
              <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>

            {/* Buttons */}
            <div className="hidden md:flex space-x-4">
              <button
                onClick={toggleLogin}
                className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
              >
                Login
              </button>
              <button
                onClick={toggleSignup}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button className="text-gray-700 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Conditionally Render the Login or Signup Form */}
      {showLogin && (
        <div className="bg-gray-100 p-8">
          <h2 className="text-3xl text-center mb-4">Login</h2>
          {/* Your Login form code here */}
          <form>
            {/* Add login fields here */}
          </form>
        </div>
      )}

      {showSignup && (
        <div className="bg-gray-100 p-8">
          <h2 className="text-3xl text-center mb-4">Sign Up</h2>
          {/* Your Sign Up form code here */}
          <form>
            {/* Add signup fields here */}
          </form>
        </div>
      )}
    </div>
  );
}
