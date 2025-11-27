import { useState, useEffect } from "react";
import img1 from "../assets/bgimage.jpg";
import img2 from "../assets/bg2.jpg";
import img3 from "../assets/bg3.jpg";

const Dashboard = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const backgroundImages = [img1, img2, img3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden">
      <div
        key={currentBg}
        className="absolute inset-0 bg-cover bg-center transition-all duration-[1500ms]"
        style={{ backgroundImage: `url(${backgroundImages[currentBg]})` }}
      ></div>

      <div className="absolute inset-0 bg-black/40"></div>

      <nav className="relative bg-black/70 text-white p-4 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-3xl font-bold font-pncb text-yellow-500 tracking-wider">
            ModiFyX
          </div>

          <div className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-yellow-500">Home</a>
            <a href="/Login" className="hover:text-yellow-500">Modifications</a>
            <a href="/Login" className="hover:text-yellow-500">Gallery</a>
            <a href="/Login" className="hover:text-yellow-500">AR View</a>
            <a href="/Contact" className="hover:text-yellow-500">Contact</a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 space-y-3 text-center animate-fadeIn">
            <a href="/" className="block hover:text-yellow-500">Home</a>
            <a href="/Login" className="block hover:text-yellow-500">Modifications</a>
            <a href="/Login" className="block hover:text-yellow-500">Gallery</a>
            <a href="/Login" className="block hover:text-yellow-500">AR View</a>
            <a href="/Contact" className="block hover:text-yellow-500">Contact</a>
          </div>
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
