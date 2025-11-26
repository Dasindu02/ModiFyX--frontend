import { useState, useEffect } from "react";
import img1 from "../assets/bgimage.jpg";
import img2 from "../assets/bg2.jpg";
import img3 from "../assets/bg3.jpg";


const Dashboard = () => {
  const [currentBg, setCurrentBg] = useState(0);

  const backgroundImages = [img1, img2, img3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 15000); // 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
   <div className="fixed inset-0 h-screen w-screen overflow-hidden">


      <div
        key={currentBg}
        className="absolute inset-0 bg-cover bg-center transition-all duration-[1500ms] animate-slide"
        style={{ backgroundImage: `url(${backgroundImages[currentBg]})` }}
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
            <a href="/" className="hover:text-yellow-500">Home</a>
            <a href="/Login" className="hover:text-yellow-500">Modifications</a>
            <a href="/Login" className="hover:text-yellow-500">Gallery</a>
            <a href="/Login" className="hover:text-yellow-500">AR View</a>
            <a href="/Contact" className="hover:text-yellow-500">Contact</a>
          </div>
        </div>
      </nav>
     {/* Hero Section */}
<div className="relative z-20 flex h-full items-center px-8 md:px-20">

  <div className="text-left max-w-2xl ">
    <h1
      className="text-4xl font-bold md:text-5xl text-white drop-shadow-xl "
      style={{ lineHeight: "1.3" }}
    >
      Try AR-powered car customization    
      <br />with VR Reality Solutions
    </h1>


    <p className="text-gray-100 mt-6 text-lg leading-relaxed max-w-xl -mb-4">
      Together with AI you can display on the interface only those parameters 
      that are interesting to the user, in addition to the default ones.
    </p>

    {/* Buttons */}
    <div className="flex flex-wrap gap-4 mt-16">
      <a
        href="/ModiFyX-Technologies"
        className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full 
        hover:bg-white/30 transition-all duration-300 flex items-center gap-2"
      >
        Our technologies →
      </a>

       <a
          href="/Login"
          className="bg-yellow-500  text-black px-6 py-3 rounded-full font-semibold 
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
