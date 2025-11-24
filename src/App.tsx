import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../src/Pages/Register";
import Login from "../src/Pages/Login";
import Dashboard from "./Pages/Dashborad";
import LoadingVideo from "./Pages/Loading";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
      

      
        <Route path="/" element={<Login />} />

        <Route path="/Loading" element={<LoadingVideo />} />
      

      
        <Route path="/ModiFyX-Dashboard" element={<Dashboard />} />
      </Routes>

    </BrowserRouter>
    
  );
}

export default App;
