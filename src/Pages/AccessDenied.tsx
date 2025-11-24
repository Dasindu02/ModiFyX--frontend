import { Link } from "react-router-dom";

const AccessDenied = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">🚫 Access Denied</h1>
      <p className="text-lg mb-6">You must login to access this page.</p>

      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold"
      >
        Go to Login
      </Link>
    </div>
  );
};

export default AccessDenied;
