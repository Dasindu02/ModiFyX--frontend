import React, { useState, useEffect } from "react";
import img1 from "../assets/backg.jpg";
import interfaceApp from "../assets/interface app.png"; 
import { Link, useNavigate } from "react-router-dom";


const Technologies: React.FC = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

  
  const backgroundImages = [img1];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Launch date: January 1, 2026
  const launchDate = new Date('2026-01-01').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = launchDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const technologies = [
    {
      number: "01",
      title: "Augmented Reality (AR)",
      description: "ModiFyX uses powerful Augmented Reality technology to bring real-time car modifications to life With your Android phone's camera, you can preview 3D body kits, headlights, taillights, paint colors, wheels, and more—directly on your actual vehicle. Simply point your camera at your car, choose the modification you want, and ModiFyX will place the selected 3D part on your vehicle instantly.",
      features: ["Real-time preview", "360° view", "No workshop visits needed", "Instant visualization"],
      icon: "🔍"
    },
    {
      number: "02",
      title: "3D Vehicle & Part Rendering",
      description: "ModiFyX features high-quality, ultra-detailed 3D models for all car modifications. Every body panel, light, rim, and paint texture is designed to look realistic and accurate when previewed in AR.",
      features: ["High-quality models", "Realistic textures", "Accurate scaling", "Detailed components"],
      icon: "🎨"
    },
    {
      number: "03",
      title: "Smart Car Detection",
      description: "Using advanced surface tracking and object detection algorithms, ModiFyX automatically recognizes your car's shape and positions modification parts in the correct alignment.",
      features: ["Auto shape recognition", "Surface tracking", "Perfect alignment", "No manual adjustments"],
      icon: "🤖"
    },
    {
      number: "04",
      title: "Real-Time Color Customization",
      description: "With ModiFyX's real-time paint engine, users can switch between matte, metallic, glossy, and custom wrap designs instantly. Every color change updates live on your vehicle through AR.",
      features: ["Live color changes", "Multiple finishes", "Wrap designs", "Instant updates"],
      icon: "🎯"
    },
    {
      number: "05",
      title: "Modern Android Development",
      description: "The ModiFyX mobile app is powered by modern tools like Android Studio, ARCore, and advanced 3D rendering engines for smooth performance and realistic visuals.",
      features: ["Android Studio", "ARCore integration", "3D rendering", "Cross-device compatibility"],
      icon: "📱"
    },
    {
      number: "06",
      title: "Cloud-Based Design Library",
      description: "Our cloud system keeps the app updated with the latest car models, new bodykits, paint packs, and user-generated ideas without requiring app updates.",
      features: ["Auto updates", "Latest models", "User content", "Continuous growth"],
      icon: "☁️"
    },
    {
      number: "07",
      title: "Social Sharing & Community",
      description: "Share your customized dream car with the community or export it to social platforms. Explore other creators' builds for inspiration and collaboration.",
      features: ["Social sharing", "Community gallery", "Inspiration feed", "Workshop collaboration"],
      icon: "👥"
    },
    {
      number: "08",
      title: "Security & Data Protection",
      description: "All user data is securely stored using encrypted communication and protected database systems. Your designs and profile details are safe with ModiFyX.",
      features: ["Encrypted data", "Secure storage", "Privacy protection", "Safe accounts"],
      icon: "🔒"
    }
  ];

  return (
    <div className="min-h-screen fixed inset-0  bg-black text-white overflow-x-hidden">
      
      {/* Animated Background */}
      <div
        key={currentBg}
        className="fixed inset-0 bg-cover bg-center transition-all duration-[1500ms] animate-slide"
        style={{ backgroundImage: `url(${backgroundImages[currentBg]})` }}
      ></div>
      
       <button
        onClick={() => navigate(-1)}
        className="fixed top-4 mt-10 left-4 z-50 bg-black/40 backdrop-blur-md p-3 rounded-full 
                  hover:bg-black/60 transition shadow-lg border border-white/20
                  lg:absolute lg:top-6 lg:left-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="white"
          className="w-2 h-2 lg:w-6 lg:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>


      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-60"></div>

      {/* Navbar */}
      <nav className="relative bg-black bg-opacity-70 text-white p-4 z-50 backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl lg:text-3xl font-bold font-pncb text-yellow-500 tracking-wider">
            ModiFyX
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6">
            <a href="/" className="hover:text-yellow-500 transition-colors duration-300">Home</a>
            <a href="/Login" className="hover:text-yellow-500 transition-colors duration-300">Modifications</a>
            <a href="/Login" className="hover:text-yellow-500 transition-colors duration-300">Gallery</a>
            <a href="/Login" className="hover:text-yellow-500 transition-colors duration-300">AR View</a>
            <a href="/Contact" className="hover:text-yellow-500 transition-colors duration-300">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black bg-opacity-90 mt-4 rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              <a href="/" className="hover:text-yellow-500 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="/Login" className="hover:text-yellow-500 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Modifications</a>
              <a href="/Login" className="hover:text-yellow-500 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Gallery</a>
              <a href="/Login" className="hover:text-yellow-500 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>AR View</a>
              <a href="/Contact" className="hover:text-yellow-500 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="relative z-10 text-white px-4 lg:px-6 py-8 lg:py-16 font-poppins">
        
        {/* MOBILE DESIGN */}
        <div className="lg:hidden space-y-8">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">
              Our Technologies
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Powered by AR and VR technologies to transform how you customize your car.
            </p>
          </div>

          {/* Technologies Grid - Mobile */}
          <div className="space-y-6">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <span className="text-3xl">{tech.icon}</span>
                  <div>
                    <span className="text-yellow-500 text-sm font-mono font-bold tracking-widest">
                      {tech.number}
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {tech.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                  {tech.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {tech.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-300 text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* App UI Section - Mobile */}
          <div className="bg-gradient-to-br from-black/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-3">
                Our App Interface
              </h2>
              <p className="text-gray-300">
                Experience the future of car customization with our intuitive mobile app
              </p>
            </div>

            {/* App UI Preview - Mobile */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-4 border-2 border-yellow-500/30 mb-6">
              <div className="bg-gray-800 rounded-xl p-3 mx-auto max-w-[280px]">
                <img 
                  src={interfaceApp}
                  alt="ModiFyX App Interface"
                  className="w-full rounded-xl"
                />
              </div>
            </div>

            {/* App Features - Mobile */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  Welcome to ModiFyX
                </h3>
                <p className="text-gray-300 text-sm mb-3">
                  Our app greets you with a clean, modern interface that makes car customization accessible to everyone.
                </p>
                <ul className="space-y-2 text-sm">
                  {[
                    "Visualize modifications before you make them",
                    "Simple sign-in and account creation",
                    "Clean layout with clear navigation",
                    "Optimized for mobile experience"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <span className="w-1 h-1 bg-yellow-500 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Launch Countdown - Mobile */}
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-600/20 backdrop-blur-md rounded-2xl p-6 border border-yellow-500/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Launching January 2026
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              Get ready to transform how you customize your car with revolutionary AR technology.
            </p>

            {/* Countdown Timer - Mobile */}
            <div className="grid grid-cols-4 gap-2 mb-6">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Mins', value: timeLeft.minutes },
                { label: 'Secs', value: timeLeft.seconds }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-black/50 rounded-lg p-3 border border-yellow-500/30">
                    <div className="text-xl font-bold text-yellow-500 mb-1">
                      {item.value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-gray-300 text-xs uppercase tracking-wider">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Join Us Section - Mobile */}
            <div className="bg-black/30 rounded-xl p-4 border border-white/10">
              <h4 className="text-lg font-bold text-white mb-3">Join the Revolution</h4>
              <p className="text-gray-300 text-sm mb-4">
                Be among the first to experience the future of car customization.
              </p>
              <div className="space-y-3">
                <button className="w-full bg-yellow-500 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-600 transition-all duration-300">
                  Get Early Access
                </button>
                <button className="w-full border border-yellow-500 text-yellow-500 px-6 py-3 rounded-full font-bold hover:bg-yellow-500 hover:text-black transition-all duration-300">
                  Join Waitlist
                </button>
              </div>
              <p className="text-gray-400 text-xs mt-3">
                📧 Get notified when we launch • 🎁 Early access benefits
              </p>
            </div>
          </div>
        </div>

        {/* DESKTOP DESIGN - ORIGINAL PRESERVED */}
        <div className="hidden lg:block">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent drop-shadow-2xl">
              Our Technologies
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Powered by AR and VR technologies to transform how you customize your car.
            </p>
          </div>

          {/* Technologies Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="group relative bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-yellow-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/20"
              >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="text-4xl">{tech.icon}</span>
                      <div>
                        <span className="text-yellow-500 text-sm font-mono font-bold tracking-widest">
                          {tech.number}
                        </span>
                        <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                          {tech.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    {tech.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {tech.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-300 text-sm font-medium backdrop-blur-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* App UI Section */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="bg-gradient-to-br from-black/50 to-gray-900/50 backdrop-blur-md rounded-3xl p-12 border border-white/10 shadow-2xl">
              <div className="text-center mb-12">
                <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4">
                  Our App Interface
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Experience the future of car customization with our intuitive and modern mobile application
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* App UI Description */}
                <div className="space-y-8">
                  <div className="group">
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                      <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3 group-hover:animate-pulse"></span>
                      Welcome to ModiFyX
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg mb-4">
                      Our app greets you with a clean, modern interface that makes car customization accessible to everyone. The intuitive design guides you through the process of visualizing modifications on your vehicle.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                        <span className="font-semibold text-white">Visualize Your Car:</span> See modifications before you make them
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                        <span className="font-semibold text-white">Easy Access:</span> Simple sign-in and account creation
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                        <span className="font-semibold text-white">User-Friendly:</span> Clean layout with clear call-to-action buttons
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                        <span className="font-semibold text-white">Modern Design:</span> Sleek interface optimized for mobile experience
                      </li>
                    </ul>
                  </div>

                  <div className="group">
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                      <span className="w-3 h-3 bg-orange-500 rounded-full mr-3 group-hover:animate-pulse"></span>
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {[
                        "AR-powered car visualization",
                        "Real-time modification preview",
                        "Extensive parts library",
                        "Color and wrap customization",
                        "Social sharing capabilities",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* App UI Preview */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border-2 border-yellow-500/30 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    {/* iPhone Mockup */}
                    <div className="bg-gray-800 rounded-2xl p-4 mx-auto" style={{ maxWidth: '300px' }}>
                      {/* App Content */}
                      <div className="mx-auto overflow-hidden rounded-2xl" style={{ maxWidth: '300px' }}>
                        <img 
                          src={interfaceApp}
                          alt="ModiFyX App Interface"
                          className="w-full max-w-xs mx-auto rounded-2xl shadow-2xl"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-500 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-500 rounded-full animate-pulse delay-1000"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Launch Countdown Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-600/20 backdrop-blur-md rounded-3xl p-12 border border-yellow-500/30 text-center">
              <h3 className="text-4xl font-bold text-white mb-6">
                Launching January 2026
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Get ready to transform how you customize your car. ModiFyX is coming soon with revolutionary AR technology.
              </p>

              {/* Countdown Timer */}
              <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Minutes', value: timeLeft.minutes },
                  { label: 'Seconds', value: timeLeft.seconds }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-black/50 rounded-xl p-4 border border-yellow-500/30">
                      <div className="text-3xl font-bold text-yellow-500 mb-1">
                        {item.value.toString().padStart(2, '0')}
                      </div>
                      <div className="text-gray-300 text-sm uppercase tracking-wider">
                        {item.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Join Us Section */}
              <div className="bg-black/30 rounded-2xl p-8 border border-white/10">
                <h4 className="text-2xl font-bold text-white mb-4">Join the Revolution</h4>
                <p className="text-gray-300 mb-6">
                  Be among the first to experience the future of car customization. Sign up for early access and exclusive updates.
                </p>
                <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                  <button className="w-full sm:w-auto bg-yellow-500 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Get Early Access
                  </button>
                  <button className="w-full sm:w-auto border border-yellow-500 text-yellow-500 px-8 py-3 rounded-full font-bold hover:bg-yellow-500 hover:text-black transition-all duration-300">
                    Join Waitlist
                  </button>
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  📧 Get notified when we launch • 🎁 Early access benefits • 🔥 Exclusive content
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-black bg-opacity-80 text-white py-6 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm lg:text-base">
            &copy; 2025 ModiFyX. All rights reserved - Dasindu Dinsara. Transform your vehicle with AR technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Technologies;