import { useState } from "react";
import videoBg from "../assets/1201.mp4";

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    
    <div className="md:fixed md:inset-0 md:h-screen md:w-screen md:overflow-hidden relative min-h-screen w-full overflow-auto">
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="min-w-full min-h-full w-auto h-auto absolute top-1/2 left-1/2 
                     -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Navigation */}
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

      {/* Main Content */}
      <div className="relative z-20 flex min-h-screen items-center px-6 md:px-20 py-20">
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

      <div className="block md:hidden h-20"></div>
    </div>
  );
};

export default Dashboard;
