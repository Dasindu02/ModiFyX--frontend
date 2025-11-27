import { useEffect, useState } from "react";
import BGIMG from "../assets/back2.jpg";
import { useNavigate } from "react-router-dom";  


type User = {
  id: string;
  fullName: string;
  email: string;
};

const Home: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const [moreOpen, setMoreOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showARPopup, setShowARPopup] = useState(false);


  
  useEffect(() => {
  if (window.location.hash) {
    const id = window.location.hash.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }
}, []);


  useEffect(() => {
    try {
      if (typeof window === "undefined") return;
      const raw = localStorage.getItem("user");
      if (!raw) return;
      const parsed: User = JSON.parse(raw);
      setUser(parsed);
    } catch (err) {
      console.error("Could not read user from localStorage:", err);
    }
  }, []);

  const handleLogout = () => {
  localStorage.removeItem("user");
  navigate("/");
};

useEffect(() => {
    const userData = localStorage.getItem("user");

    if (userData) {
      try {
        const user = JSON.parse(userData);
        setUser(user);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);


  const triggerFireworks = () => {
  const container = document.getElementById('fireworks-container');
  if (!container) return;

  container.innerHTML = '';

  createFireworkWave(container, 60, 0); // First wave
  setTimeout(() => createFireworkWave(container, 25, 500), 500); // Second wave
  setTimeout(() => createFireworkWave(container, 30, 1000), 1000); // Third wave
  setTimeout(() => createFireworkWave(container, 20, 1500), 1500); // Fourth wave
  setTimeout(() => createFireworkWave(container, 15, 2000), 2000); // Final wave
};

const createFireworkWave = (container: HTMLElement, count: number, delay: number) => {
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      createFirework(container);
    }, delay + Math.random() * 800);
  }
};

const createFirework = (container: HTMLElement) => {
  const firework = document.createElement('div');
  const colors = ['#FFD700', '#FFA500', '#FF6B00', '#FF4081', '#4CAF50', '#2196F3', '#9C27B0', '#00BCD4', '#8BC34A'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  
  const left = 30 + Math.random() * 40;
  const top = 20 + Math.random() * 60;
  
  firework.style.cssText = `
    position: absolute;
    left: ${left}%;
    top: ${top}%;
    width: 8px;
    height: 8px;
    background: ${color};
    border-radius: 50%;
    pointer-events: none;
    z-index: 9998;
    box-shadow: 0 0 10px ${color}, 0 0 20px ${color};
  `;
  
  container.appendChild(firework);
  
  createExplosionParticles(container, left, top, color);
  
  const animation = firework.animate([
    { 
      transform: 'scale(1) translateY(0) rotate(0deg)', 
      opacity: 1,
      boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`
    },
    { 
      transform: 'scale(1.5) translateY(-10px) rotate(180deg)', 
      opacity: 0.8,
      boxShadow: `0 0 20px ${color}, 0 0 40px ${color}`
    },
    { 
      transform: `scale(0) translateY(-${Math.random() * 80 + 40}px) translateX(${Math.random() * 60 - 30}px) rotate(360deg)`, 
      opacity: 0,
      boxShadow: `0 0 5px ${color}, 0 0 10px ${color}`
    }
  ], {
    duration: Math.random() * 2000 + 2000, 
    easing: 'cubic-bezier(0.2, 0.8, 0.4, 1)'
  });
  
 
  animation.onfinish = () => {
    firework.remove();
  };
};

const createExplosionParticles = (container: HTMLElement, left: number, top: number, color: string) => {
  const particleCount = 12 + Math.floor(Math.random() * 12);
  
  for (let i = 0; i < particleCount; i++) {
    setTimeout(() => {
      const particle = document.createElement('div');
      const angle = (i * 360 / particleCount) * (Math.PI / 180);
      const distance = 30 + Math.random() * 50;
      
      particle.style.cssText = `
        position: absolute;
        left: ${left}%;
        top: ${top}%;
        width: 4px;
        height: 4px;
        background: ${color};
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        box-shadow: 0 0 8px ${color};
      `;
      
      container.appendChild(particle);
      
      const particleAnimation = particle.animate([
        { 
          transform: 'scale(1) translate(0, 0)', 
          opacity: 1 
        },
        { 
          transform: `scale(0.5) translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`, 
          opacity: 0 
        }
      ], {
        duration: 1500 + Math.random() * 1000,
        easing: 'cubic-bezier(0.3, 0.7, 0.4, 1)'
      });
      
      particleAnimation.onfinish = () => {
        particle.remove();
      };
    }, Math.random() * 300);
  }
};






  const features = [
    {
      title: "Virtual Modifications",
      description: "See how different modifications look on your vehicle before making any physical changes",
      icon: "🔧"
    },
    {
      title: "Real-time Preview",
      description: "Use your camera to overlay modifications directly onto your vehicle in real-time",
      icon: "📱"
    },
    {
      title: "Cost Estimation",
      description: "Get instant price estimates for your desired modifications",
      icon: "💰"
    },
    {
      title: "Performance Stats",
      description: "See how modifications affect your vehicle's performance metrics",
      icon: "📊"
    }
  ];

  const modificationTypes = [
    "Body Kits & Spoilers",
    "Wheel & Tire Upgrades",
    "Lighting Modifications",
    "Performance Enhancements",
    "Wrap & Paint Jobs",
    "Interior Customizations"
  ];

  return (
    <div className="fixed bg-black inset-0 h-screen w-screen overflow-y-auto">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${BGIMG})` }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* show greeting only when user exists */}
      {user && (
        <p className="absolute top-24 left-10 text-xl text-white z-20 font-poppins">
          Hello <span className="text-white">{user.fullName},</span>
        </p>
      )}

      <nav className="relative bg-black bg-opacity-70 text-white p-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <div className="text-3xl font-bold font-pncb text-yellow-500 tracking-wider">
            ModiFyX
          </div>

          {/* Links + Avatar */}
          <div className="flex items-center gap-10">

            <a href="/Home" className="hover:text-yellow-500">Home</a>
            <a href="#modifications" className="hover:text-yellow-500">Modifications</a>
            <a href="/ModiFyX-Gallery" className="hover:text-yellow-500">Gallery</a>
            <a href="/profile" className="hover:text-yellow-500">Profile</a>
            <a href="#ar-view" className="hover:text-yellow-500">AR View</a>
            <a href="/Log-Contacts" className="hover:text-yellow-500">Contact</a>

            {/* Avatar Dropdown */}
            <div className="relative dropdown-container">

              {/* Avatar Button */}
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className="w-10 h-10 flex items-center justify-center bg-yellow-500 text-black font-bold rounded-full 
                            hover:bg-yellow-400 transition"
              >
                {user?.fullName ? user.fullName.charAt(0).toUpperCase() : "U"}
              </button>

              {/* Dropdown */}
              {moreOpen && (
                <div className="absolute right-0 mt-5 w-52 bg-black bg-opacity-90 backdrop-blur-md 
                                border border-gray-700 rounded-2xl shadow-lg p-4 z-50">

                  {/* User Full Name Display */}
                  <div className="border-b border-gray-700 pb-3 mb-3">
                   
                    <p className="text-yellow-500 font-semibold truncate">
                      {user?.fullName || "User"}
                    </p>
                  </div>
                  
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-2 rounded-lg bg-red-600 hover:bg-red-700 
                              text-white transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </nav>


      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 font-poppins">
          Transform Your Vehicle with <span className="text-yellow-500">AR</span>
        </h1>
        <p className="text-xl text-gray-300 mb-64 max-w-3xl">
          Visualize and plan your vehicle modifications using Augmented Reality technology. 
          See real-time previews of modifications before you commit.
        </p>
        <div className="flex gap-4 -mt-36">

          <button  onClick={() => setShowPopup(true)}
          className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300">
            Try AR Experience
          </button>

             {showPopup && (
                <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999] backdrop-blur-md">
                  {/* Fireworks Container */}
                  <div className="absolute inset-0 pointer-events-none" id="fireworks-container"></div>
                  
                  <div className="relative bg-gradient-to-br from-gray-800 to-black border border-yellow-500/40 text-white p-8 rounded-3xl shadow-2xl w-90 max-w-md text-center overflow-hidden">
                    {/* Close Button */}
                    <button
                      onClick={() => setShowPopup(false)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-yellow-500 transition-colors duration-300 z-20"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500 rounded-full -translate-y-16 translate-x-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500 rounded-full -translate-x-12 translate-y-12"></div>
                    </div>

                    <div className="relative z-10">
                      {/* Animated Icon */}
                      <div className="text-5xl mb-4 animate-bounce">🚗✨</div>
                      
                      {/* Header */}
                      <h2 className="text-3xl font-bold text-white mb-2">
                        AR Experience
                      </h2>
                      <div className="text-yellow-400 text-lg font-semibold mb-4">Coming January 2026</div>

                      {/* Progress Bar */}
                      <div className="w-full bg-gray-700 rounded-full h-2 mb-6">
                        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full w-3/4"></div>
                      </div>

                      {/* Description */}
                      <div className="mb-6">
                        <p className="text-gray-300 mb-4">
                        We’re crafting an advanced AR system that will let you preview real-time car modifications directly through your phone’s camera. Get ready for a whole new way to customize your ride!                        </p>
                        
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="bg-yellow-500/10 rounded p-2">
                            <div className="text-yellow-400">📱</div>
                            <div>Mobile AR</div>
                          </div>
                          <div className="bg-yellow-500/10 rounded p-2">
                            <div className="text-yellow-400">🎨</div>
                            <div>3D Preview</div>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="space-y-3">
                      <button
                onClick={() => {
                  triggerFireworks();
                  // Close popup after longer celebration (6 seconds)
                  setTimeout(() => setShowPopup(false), 6000);
                }}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-3 rounded-xl font-bold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                Can't Wait! 🚀
              </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition duration-300">
            View Gallery
          </button>
          {/* <button
    onClick={handleLogout}
    className="ml-4 px-4 py-2 border border-red-500 text-red-500 rounded-lg 
               hover:bg-red-500 hover:text-white transition duration-300"
  >
    Logout
  </button> */}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Why Choose <span className="text-yellow-500">AR Modification</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-black bg-opacity-50 p-6 rounded-lg border border-gray-700 hover:border-yellow-500 transition duration-300">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AR Experience Section */}
      <section id="ar-view" className="relative z-10 py-20 px-4 bg-black bg-opacity-70">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Experience Modifications in <span className="text-yellow-500">Augmented Reality</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Point your camera at your vehicle and see modifications appear instantly. Our advanced AR system
                 accurately detects your vehicle and overlays upgrades in real time—so you can see every detail before making any changes.
              </p>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">✓</span>
                  Real-time modification preview
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">✓</span>
                  Accurate vehicle detection
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">✓</span>
                  Multiple modification options
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">✓</span>
                  Save and compare different looks
                </li>
              </ul>
              <button onClick={() => setShowARPopup(true)}
                className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300">
                Launch AR Camera
              </button>
            {showARPopup && (
                  <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999]">
                    <div className="bg-white text-black p-6 rounded-xl shadow-xl w-80 text-center">
                      
                      <h2 className="text-xl font-bold mb-3">Coming Soon 🚧</h2>

                      <p className="text-gray-700 mb-5 leading-relaxed">
                        The ModiFyX AR App is not launched yet.
                        <br />
                        This feature will be available soon.
                      </p>

                      <button
                        onClick={() => setShowARPopup(false)}
                        className="bg-yellow-500 px-5 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
                      >
                        Close
                      </button>

                    </div>
                  </div>
                )}


            </div>
            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-8 border border-gray-700">
              <div className="aspect-video bg-gray-900 rounded flex items-center justify-center">
                <span className="text-gray-400 text-lg">AR Preview Demo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modification Types */}
      <section id="modifications" className="relative z-10 py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Available <span className="text-yellow-500">Modifications</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modificationTypes.map((type, index) => (
              <div key={index} className="bg-black bg-opacity-50 p-6 rounded-lg border border-gray-700 hover:border-yellow-500 transition duration-300 group">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-500 transition duration-300">
                  {type}
                </h3>
                <p className="text-gray-300">
                  Visualize and plan {type.toLowerCase()} with our AR technology. See exactly how changes will look on your vehicle.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            Start your modification journey today with our AR technology. See the possibilities before you spend a dime.
          </p>
          <div className="flex justify-center gap-4">
           
            <button className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300">
              Schedule Consultation
            </button>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black bg-opacity-80 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 ModiFyX. All rights reserved-Dasindu Dinsara. Transform your vehicle with AR technology.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;