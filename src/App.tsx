// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashborad";
import LoadingVideo from "./Pages/Loading";
import Contact from "./Pages/Contact";
import AccessDenied from "./Pages/AccessDenied";

import ProtectedRoute from "./Routes/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Contact" element={<Contact />} />

          {/* Protected */}
          <Route
            path="/ModiFyX-Dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/Loading"
            element={
              <ProtectedRoute>
                <LoadingVideo />
              </ProtectedRoute>
            }
          />


          {/* Access Denied Page */}
          <Route path="/access-denied" element={<AccessDenied />} />


          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
