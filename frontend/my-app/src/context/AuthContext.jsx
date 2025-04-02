import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  // Function to log in and fetch user data
  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error("Login failed");

      const data = await response.json();
      localStorage.setItem("token", data.token);
      setToken(data.token);

      // Fetch user details after login
      const userData = await fetchUserData(data.token);
      return userData; // Return the user data after successful login
    } catch (error) {
      console.error("Login error:", error);
      throw error; // Propagate the error to the component
    }
  };

  // Fetch user details from API
  const fetchUserData = async (authToken) => {
    try {
      const response = await fetch("http://localhost:5000/api/users/user", {
        method: "GET",
        headers: { Authorization: `Bearer ${authToken}` },
      });

      if (!response.ok) throw new Error("Failed to fetch user data");

      const userData = await response.json();
      setUser(userData); // Store user details in state
      return userData; // Return the fetched user data
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error; // Propagate the error to the component
    }
  };

  // Fetch user data on app load if token exists
  useEffect(() => {
    if (token) fetchUserData(token);
  }, [token]);
  const logout = () => {
    setUser(null);
    setToken(null)
    localStorage.removeItem("user");
    // navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, token, login,logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export default AuthProvider;
