import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Home';
import JobListings from './pages/JobListings';
import JobApplication from './pages/JobApplication';
import UserProfile from './pages/UserProfile';
import Nav from './pages/Navbar';
import Footer from './pages/Footer';
import AdminDashboard from './pages/Dashboard';
import EmployerDashboard from './pages/Employerdashbord';
import JobseekerDashboard from './pages/Jobseekerdashboard';



function App() {
  return (
    <Router>
      <Nav/>
      <div>
        {/* <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/jobs">Job Listings</a></li>
            <li><a href="/apply">Apply for a Job</a></li>
            <li><a href="/profile">User Profile</a></li>
          </ul>
        </nav> */}

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/jobs" element={<JobListings />} />
          <Route path="/apply" element={<JobApplication />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/employer" element={<EmployerDashboard />} />
          <Route path="/jobseeker" element={<JobseekerDashboard />} />
          

        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
