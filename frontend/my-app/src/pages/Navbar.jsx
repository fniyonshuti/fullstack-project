import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Show navbar only on the homepage ("/")
  if (location.pathname !== "/") {
    return null;
  }

  return (
    <div>
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 mt-3 mr-3 ml-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-blue-600">
                CareerConnect
              </Link>
            </div>

            {/* Navigation Links (Hidden on Mobile) */}
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-blue-600">
                Home
              </Link>
              {/* <Link to="/jobs" className="text-gray-700 hover:text-blue-600">
                Jobs
              </Link> */}
              {/* <Link to="/employer" className="text-gray-700 hover:text-blue-600">
                Employer
              </Link> */}
              <HashLink smooth to="/#about" className="text-gray-700 hover:text-blue-600">
                About
              </HashLink>
              <HashLink smooth to="/#contact" className="text-gray-700 hover:text-blue-600">
                Contact
              </HashLink>
            </div>

            {/* Buttons */}
            <div className="hidden md:flex space-x-4">
              <button
                onClick={() => navigate("/login")}
                className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
