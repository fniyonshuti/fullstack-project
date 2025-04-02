import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-6">
      <h1 className="text-7xl font-bold text-gray-800">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mt-4">Oops! Page not found</h2>
      <p className="text-gray-500 mt-2">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all">
        Go Home
      </Link>
    </div>
  );
}
