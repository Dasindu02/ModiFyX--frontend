// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashborad";
import LoadingVideo from "./Pages/Loading";
import Contact from "./Pages/Contact";
import AccessDenied from "./Pages/AccessDenied";
import Home from "./Pages/Homepage";
import LogContact from "./Pages/Logcontacts";
import Profile from "./Pages/profile";
import Technologies from "./Pages/Technologies";
import Gallery from "./Pages/Gallery";

// import ProtectedRoute from "./Routes/ProtectedRoute";
// import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    // <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/Contact" element={<Contact />} />
            <Route path="/ModiFyX-Technologies" element={<Technologies />} />
            <Route path="/ModiFyX-Gallery" element={<Gallery />} />


          {/* Protected */}
          <Route
            path="/register"
            element={
              // <ProtectedRoute>
                <Register />
              // </ProtectedRoute>
            }
          />

          <Route
            path="/Profile"
            element={
              // <ProtectedRoute>
                <Profile />
              // </ProtectedRoute>
            }
          />

          <Route
            path="/Log-Contacts"
            element={
              // <ProtectedRoute>
                <LogContact />
              // </ProtectedRoute>
            }
          />

           <Route
            path="/Login"
            element={
              // <ProtectedRoute>
                <Login />
              // </ProtectedRoute>
            }
          />

           <Route
            path="/Home"
            element={
              // <ProtectedRoute>
                <Home />
              // </ProtectedRoute>
            }
          />

          <Route
            path="/Loading"
            element={
              // <ProtectedRoute>
                <LoadingVideo />
              // </ProtectedRoute>
            }
          />


          {/* Access Denied Page */}
          <Route path="/access-denied" element={<AccessDenied />} />


          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    // </AuthProvider>
  );
}

export default App;
