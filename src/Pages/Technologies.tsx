import React, { useState, useEffect } from "react";
import img1 from "../assets/backg.jpg";



const Technologies: React.FC = () => {
  const [currentBg, setCurrentBg] = useState(0);
  
   const backgroundImages = [img1];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const technologies = [
    {
      number: "01",
      title: "Augmented Reality (AR)",
      description: "ModiFyX uses powerful Augmented Reality technology to bring real-time car modifications to life With your Android phone’s camera, you can preview 3D body kits, headlights, taillights, paint colors, wheels, and more—directly on your actual vehicle. Simply point your camera at your car, choose the modification you want, and ModiFyX will place the selected 3D part on your vehicle instantly.",
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
    <div className="fixed bg-black inset-0 h-screen w-screen overflow-y-auto">
      {/* Animated Background */}
      <div
        key={currentBg}
        className="absolute inset-0 bg-cover bg-center transition-all duration-[1500ms] animate-slide"
        style={{ backgroundImage: `url(${backgroundImages[currentBg]})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Navbar */}
      <nav className="relative bg-black bg-opacity-70 text-white p-4 z-10 backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-3xl font-bold font-pncb text-yellow-500 tracking-wider">
            ModiFyX
          </div>

          <div className="space-x-6">
            <a href="/" className="hover:text-yellow-500 transition-colors duration-300">Home</a>
            <a href="/Login" className="hover:text-yellow-500 transition-colors duration-300">Modifications</a>
            <a href="/Login" className="hover:text-yellow-500 transition-colors duration-300">Gallery</a>
            <a href="/Login" className="hover:text-yellow-500 transition-colors duration-300">AR View</a>
            <a href="/Contact" className="hover:text-yellow-500 transition-colors duration-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-1 min-h-screen text-white px-6 py-16 font-poppins">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent drop-shadow-2xl">
            Our Technologies
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
               Powered by AR and VR technologies to transform how you customize your car.          </p>
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
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-black/50 to-gray-900/50 backdrop-blur-md rounded-3xl p-12 border border-white/10 shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4">
                First UI Experience
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A seamless, futuristic interface designed for intuitive car customization
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* UI Description */}
              <div className="space-y-8">
                <div className="group">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3 group-hover:animate-pulse"></span>
                    Splash Screen
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Modern app logo animation with dark neon aesthetics that creates a powerful first impression and builds brand recognition.
                  </p>
                  <ul className="mt-4 space-y-2">
                    {['App logo "ModiFyX"', 'Smooth loading animation', 'Dark/neon theme', 'Quick initialization'].map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="group">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <span className="w-3 h-3 bg-orange-500 rounded-full mr-3 group-hover:animate-pulse"></span>
                    Welcome Screen
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Clean, intuitive interface featuring gradient designs and glass-morphism effects that guide users seamlessly into the app.
                  </p>
                  <ul className="mt-4 space-y-2">
                    {['"Welcome to ModiFyX" title', 'Start/Login/Register buttons', 'Futuristic gradient background', '3D car preview model', 'App description'].map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* UI Preview Placeholder */}
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border-2 border-yellow-500/30 shadow-2xl">
                  <div className="bg-gray-800 rounded-lg h-80 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🚗</div>
                      <p className="text-gray-400 text-lg">App UI Preview</p>
                      <p className="text-gray-500 text-sm mt-2">Modern & Intuitive Design</p>
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

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-600/20 backdrop-blur-md rounded-2xl p-8 border border-yellow-500/30 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Car?
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Experience the future of car customization with ModiFyX. Preview modifications in real-time before making any commitments.
            </p>
            <div className="space-x-4">
              <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Download App
              </button>
              <button className="border border-yellow-500 text-yellow-500 px-8 py-3 rounded-full font-bold hover:bg-yellow-500 hover:text-black transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
        <footer className="relative z-10 bg-black bg-opacity-80 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 ModiFyX. All rights reserved-Dasindu Dinsara. Transform your vehicle with AR technology.</p>
        </div>
      </footer>
    </div>
  );
};

export default Technologies;