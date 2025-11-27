import { Link } from "react-router-dom";

const AccessDenied = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
      {/* Main Content */}
      <div className="text-center max-w-md mx-auto">
        {/* Icon */}
        <div className="mb-4 sm:mb-6">
          <span className="text-5xl sm:text-6xl md:text-7xl">🚫</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          Access Denied
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
          You must be logged in to access this page.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            to="/Login"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold 
                       transition-colors duration-300 text-sm sm:text-base text-center
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Go to Login
          </Link>
          
          <Link
            to="/"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-semibold 
                       transition-colors duration-300 text-sm sm:text-base text-center
                       focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Go to Home
          </Link>
        </div>

        <div className="mt-6 sm:mt-8 hidden sm:block">
          <p className="text-sm text-gray-400">
            If you believe this is an error, please contact support.
          </p>
        </div>
      </div>

      <div className="mt-8 sm:hidden">
        <p className="text-xs text-gray-400 text-center">
          Contact support if you need assistance.
        </p>
      </div>
    </div>
  );
};

export default AccessDenied;