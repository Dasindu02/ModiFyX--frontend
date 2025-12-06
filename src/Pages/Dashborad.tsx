import { useState } from "react";
import videoBg from "../assets/1201.mp4";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <nav className="relative bg-black/70 text-white p-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl lg:text-3xl font-bold font-pncb text-yellow-500 tracking-wider">
            ModiFyX
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6">
            <a href="/" className="hover:text-yellow-500 transition-colors">Home</a>
            <a href="/Login" className="hover:text-yellow-500 transition-colors">Modifications</a>
            <a href="/Login" className="hover:text-yellow-500 transition-colors">Gallery</a>
            <a href="/Login" className="hover:text-yellow-500 transition-colors">AR View</a>
            <a href="/Contact" className="hover:text-yellow-500 transition-colors">Contact</a>
          </div>

          <button 
            className="lg:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black bg-opacity-90 mt-4 rounded-lg p-4"
          >
            <div className="flex flex-col space-y-4">
              <a 
                href="/" 
                className="hover:text-yellow-500 transition-colors py-2" 
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="/Login" 
                className="hover:text-yellow-500 transition-colors py-2" 
                onClick={() => setMenuOpen(false)}
              >
                Modifications
              </a>
              <a 
                href="/Login" 
                className="hover:text-yellow-500 transition-colors py-2" 
                onClick={() => setMenuOpen(false)}
              >
                Gallery
              </a>
              <a 
                href="/Login" 
                className="hover:text-yellow-500 transition-colors py-2" 
                onClick={() => setMenuOpen(false)}
              >
                AR View
              </a>
              <a 
                href="/Contact" 
                className="hover:text-yellow-500 transition-colors py-2" 
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      <div className="relative z-20 flex h-full items-center px-6 md:px-20">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-xl leading-snug">
            Try AR-powered car customization
            <br className="hidden sm:block" />
            with VR Reality Solutions
          </h1>

          <p className="text-gray-100 mt-6 text-base sm:text-lg leading-relaxed max-w-xl">
            Together with AI you can display on the interface only those
            parameters that are interesting to the user.
          </p>

          <div className="flex flex-wrap gap-4 mt-12 sm:mt-16">
            <a
              href="/ModiFyX-Technologies"
              className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full 
              hover:bg-white/30 transition-all duration-300 flex items-center gap-2"
            >
              Our technologies →
            </a>

            <a
              href="/Login"
              className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold 
              hover:bg-gray-200 transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;