import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../src/Pages/Register";
import Login from "../src/Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>

      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>

    </BrowserRouter>
    
  );
}

export default App;
