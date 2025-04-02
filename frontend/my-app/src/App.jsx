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
import Dashboard from './pages/Jobseekerdashboard';
import SignupPage from './pages/Signup';
import LoginPage from './pages/login';
import UsersList from './pages/UsersList';
import NotFound from './pages/Notfound';
import JobDetail from './pages/JobDetail';
import JobDetailModal from './pages/JobDetail';
import AuthProvider from "./context/AuthContext.jsx";




function App() {
  return (
    <AuthProvider>
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
          <Route path="/jobseeker" element={<Dashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="list" element={<UsersList/>}/>
          <Route path="/jobs/:jobId" element={<JobDetailModal />} />
          <Route path="*" element={<NotFound/>}/>
          

          

        </Routes>
      </div>
      <Footer/>
    </Router>
    </AuthProvider>
  );
}

export default App;
