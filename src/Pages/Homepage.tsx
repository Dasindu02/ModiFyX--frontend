import { useEffect, useState } from "react";
import BGIMG from "../assets/back2.jpg";

type User = {
  id: string;
  fullName: string;
  email: string;
};

const Home: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

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

      <nav className="relative bg-black bg-opacity-70 text-white p-4 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-3xl font-bold font-pncb text-yellow-500 tracking-wider">
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
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300">
            Try AR Experience
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition duration-300">
            View Gallery
          </button>
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
                Point your camera at your vehicle and see modifications come to life. Our AR technology 
                accurately maps modifications onto your specific vehicle model in real-time.
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
              <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300">
                Launch AR Camera
              </button>
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