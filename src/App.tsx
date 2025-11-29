// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import ProtectedRoute from "./Routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/ModiFyX-Technologies" element={<Technologies />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />



        {/* Protected Routes  */}
        <Route
          path="/ModiFyX-Gallery"
          element={
            <ProtectedRoute>
              <Gallery />
            </ProtectedRoute>
          }
        />

        <Route path="/Loading" element={
            <ProtectedRoute>
              <LoadingVideo />
            </ProtectedRoute>
          } />



         <Route path="/access-denied" element={ 
              <AccessDenied />
            } 
            />



        <Route
          path="/Profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/Log-Contacts"
          element={
            <ProtectedRoute>
              <LogContact />
            </ProtectedRoute>
          }
        />

        <Route
          path="/Home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/Login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;