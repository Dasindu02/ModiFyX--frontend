import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requiredRole 
}) => {
  const [isChecking, setIsChecking] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      try {
        const user = localStorage.getItem("user");
        if (!user) {
          setIsAuthenticated(false);
          return;
        }

        const userData = JSON.parse(user);
        const isValidUser = !!(userData && userData.id && userData.email);
        
        setIsAuthenticated(isValidUser);
      } catch (error) {
        console.error("Auth check error:", error);
        setIsAuthenticated(false);
      } finally {
        setIsChecking(false);
      }
    };

    checkAuth();
  }, []);

  if (isChecking) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Checking authentication...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
       return <Navigate to="/access-denied" replace />;

  }

  return <>{children}</>;
};

export default ProtectedRoute;