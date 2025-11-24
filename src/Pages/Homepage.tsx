import { useState, useEffect } from "react";
// import { useAuth } from "../context/AuthContext";
import BGIMG from "../assets/back2.jpg";


const Home = () => {
  const [currentBg, setCurrentBg] = useState(0);
//   const { logout } = useAuth();

  

  return (
   <div className="fixed bg-black  inset-0 h-screen w-screen overflow-hidden">


      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${BGIMG})` }}
      ></div>
      

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Navbar */}
      <nav className="relative bg-black bg-opacity-70 text-white p-4 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-3xl font-bold font-pncb text-yellow-500 tracking-wider ">
            ModiFyX
          </div>

          <div className="space-x-6">
            <a href="/Home" className="hover:text-yellow-500">Home</a>
            <a href="#modifications" className="hover:text-yellow-500">Modifications</a>
            <a href="#gallery" className="hover:text-yellow-500">Gallery</a>
            <a href="#ar-view" className="hover:text-yellow-500">AR View</a>
            <a href="/Log-Contacts" className="hover:text-yellow-500">Contact</a>
          </div>
        </div>
      </nav>
  




    </div>
  );
};

export default Home;
