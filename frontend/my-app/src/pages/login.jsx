import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(""); // Reset error message on new submit

    try {
      const user = await login(email, password); // Assuming `login` returns the user data with role
      const role = user?.user.role; // Fetch the user's role
      console.log(role,user);

      // Redirect based on user role
      if (role === "jobseeker") {
        navigate("/jobseeker");
      } else if (role === "admin") {
        navigate("/admin");
      } else if (role === "employer") {
        navigate("/employer");
      } else {
        // Redirect to a default page or show an error
        navigate("/"); 
      }
    } catch (error) {
      setErrorMessage("Invalid credentials. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Login</h2>
        {errorMessage && (
          <div className="bg-red-200 text-red-700 p-2 rounded-md mb-4 text-center">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 text-white font-semibold rounded-md ${
              isLoading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            } transition duration-200`}
          >
            {isLoading ? "Logging In..." : "Login"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-gray-600">Don't have an account? </span>
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
