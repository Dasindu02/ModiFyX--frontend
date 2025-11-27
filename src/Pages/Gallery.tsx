import React, { useState, useMemo, useEffect } from 'react'
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom"; 
import allo1 from "../assets/allo1.jpg";
import allo2 from "../assets/allo2.jpg";
import allo3 from "../assets/allo4.jpg";
import allo4 from "../assets/allo3.jpg";
import allo5 from "../assets/allo5.jpg";
import allo6 from "../assets/allo6.jpg";
import allo7 from "../assets/allo7.jpg";
import allo8 from "../assets/allo8.jpg";
import allo9 from "../assets/allo9.jpg";
import allo10 from "../assets/allo10.jpg";

import hl1 from "../assets/hl1.jpg";
import hl2 from "../assets/hl2.jpg";
import hl3 from "../assets/hl3.jpg";
import hl4 from "../assets/hl4.jpg";
import hl5 from "../assets/hl5.jpg";

import bd1 from "../assets/bd1.jpg";
import bd2 from "../assets/bd2.jpg";
import bd3 from "../assets/bd3.jpg";
import bd4 from "../assets/bd4.jpg";
import bd5 from "../assets/bd5.jpg";

import spoiler1 from "../assets/spoiler1.jpg";
import spoiler2 from "../assets/spoiler2.jpg";
import spoiler3 from "../assets/spoiler3.jpg";
import spoiler4 from "../assets/spoiler4.jpg";
import spoiler5 from "../assets/spoiler5.jpg";

interface GalleryItem {
  id: number
  name: string
  description: string
  price: number
  rate: number
  image: string
  category: string
}

const items: GalleryItem[] = [
  {
    id: 1,
    name: "Sport Aero Body Kit",
    description: "Premium aerodynamic body kit designed to enhance sporty exterior styling.",
    price: 85000,
    rate: 4.8,
    image: bd1,
    category: "exterior"
  },
  {
    id: 2,
    name: "GT Line Body Kit",
    description: "Aggressive GT-style body kit with enhanced front and rear bumpers.",
    price: 30000,
    rate: 4.7,
    image: bd2,
    category: "exterior"
  },
  {
    id: 3,
    name: "Street Edition Body Kit",
    description: "Lightweight street-inspired design with side skirts and lip extensions.",
    price: 95000,
    rate: 4.6,
    image: bd3,
    category: "exterior"
  },
  {
    id: 4,
    name: "Carbon Fiber Body Kit",
    description: "High-performance carbon fiber styled kit for improved aerodynamics.",
    price: 35000,
    rate: 4.9,
    image: bd4,
    category: "exterior"
  },
  {
    id: 5,
    name: "Urban Style Body Kit",
    description: "Modern body kit with smooth curves and premium exterior detailing.",
    price: 78000,
    rate: 4.4,
    image: bd5,
    category: "exterior"
  },
  {
    id: 6,
    name: "Premium LED Headlight",
    description: "Ultra-bright LED headlight with crystal-clear projection.",
    price: 42000,
    rate: 4.5,
    image: hl1,
    category: "lighting"
  },
  {
    id: 7,
    name: "Matrix LED Headlight",
    description: "Advanced matrix beam technology for excellent visibility.",
    price: 55000,
    rate: 4.7,
    image: hl2,
    category: "lighting"
  },
  {
    id: 8,
    name: "Projector LED Headlight",
    description: "Sharp-cut projector LED system ideal for night driving.",
    price: 48000,
    rate: 4.6,
    image: hl3,
    category: "lighting"
  },
  {
    id: 9,
    name: "Bi-Xenon + LED Combo Headlights",
    description: "Dual-beam performance headlights with LED DRL strip.",
    price: 60000,
    rate: 4.8,
    image: hl4,
    category: "lighting"
  },
  {
    id: 10,
    name: "Full LED Headlight Assembly",
    description: "Full assembly upgrade with high-intensity LED modules.",
    price: 75000,
    rate: 4.9,
    image: hl5,
    category: "lighting"
  },
  {
    id: 11,
    name: "Sport Rear Spoiler",
    description: "Lightweight sport rear spoiler designed to improve stability and enhance exterior styling.",
    price: 32000,
    rate: 4.5,
    image: spoiler1,
    category: "exterior"
  },
  {
    id: 12,
    name: "GT Wing Spoiler",
    description: "High-rise GT wing spoiler offering maximum downforce for performance vehicles.",
    price: 42000,
    rate: 4.7,
    image: spoiler2,
    category: "exterior"
  },
  {
    id: 13,
    name: "Ducktail Lip Spoiler",
    description: "Sleek ducktail lip design that provides a subtle sporty upgrade with improved airflow.",
    price: 34000,
    rate: 4.4,
    image: spoiler3,
    category: "exterior"
  },
  {
    id: 14,
    name: "Carbon Fiber Style Spoiler",
    description: "Premium carbon-style spoiler offering an aggressive look and better rear-end aerodynamics.",
    price: 78000,
    rate: 4.8,
    image: spoiler4,
    category: "exterior"
  },
  {
    id: 15,
    name: "OEM Style Rear Spoiler",
    description: "Factory-style spoiler with a perfect fit for modern sedans and hatchbacks.",
    price: 25000,
    rate: 4.3,
    image: spoiler5,
    category: "exterior"
  },
  {
    id: 16,
    name: "13x6 Bronze Alloy Car Wheels",
    description: "Premium 13-inch bronze finished alloy wheels suitable for compact cars. Lightweight and stylish.",
    price: 38000,
    rate: 4.3,
    image: allo1,
    category: "wheels"
  },
  {
    id: 17,
    name: "Toyota Premio Original Alloy Wheel Set",
    description: "Genuine used Toyota Premio alloy wheels with durable build and smooth finish.",
    price: 65000,
    rate: 4.4,
    image: allo2,
    category: "wheels"
  },
  {
    id: 18,
    name: "17-inch Black Machine-Face Alloy Wheels",
    description: "Sporty 17-inch black machine-face alloy set ideal for sedans and SUVs.",
    price: 115000,
    rate: 4.8,
    image: allo3,
    category: "wheels"
  },
  {
    id: 19,
    name: "BMW Sportline 5-Spoke Alloy Wheel",
    description: "Original BMW-style 5-spoke alloy wheel offering a premium look and high performance.",
    price: 145000,
    rate: 4.7,
    image: allo4,
    category: "wheels"
  },
  {
    id: 20,
    name: "Mercedes-Benz AMG Twin-Spoke Alloy Wheel",
    description: "High-quality Mercedes AMG twin-spoke alloy wheels with a luxury finish.",
    price: 185000,
    rate: 4.9,
    image: allo5,
    category: "wheels"
  },
  {
    id: 21,
    name: "Nissan GTR Performance Alloy Wheel",
    description: "Stunning performance-inspired alloy wheel compatible with many Nissan models.",
    price: 120000,
    rate: 4.6,
    image: allo6,
    category: "wheels"
  },
  {
    id: 22,
    name: "Toyota Axio / Corolla Sport Alloy Wheel",
    description: "Lightweight and durable alloy wheel set designed for Toyota Axio and Corolla.",
    price: 72000,
    rate: 4.4,
    image: allo7,
    category: "wheels"
  },
  {
    id: 23,
    name: "Honda Vezel RS Black Alloy Wheel",
    description: "Sleek black alloy wheel designed for Honda Vezel RS models. Strong and stylish.",
    price: 88000,
    rate: 4.6,
    image: allo8,
    category: "wheels"
  },
  {
    id: 24,
    name: "BMW M-Sport Performance Alloy Wheel",
    description: "M-Sport inspired alloy wheel offering aggressive looks and improved handling.",
    price: 165000,
    rate: 4.9,
    image: allo9,
    category: "wheels"
  },
  {
    id: 25,
    name: "Mercedes-Benz Diamond-Cut Luxury Alloy Wheel",
    description: "Premium diamond-cut alloy wheel providing unmatched luxury aesthetics.",
    price: 195000,
    rate: 5.0,
    image: allo10,
    category: "wheels"
  }
]

const categories = ["all", "exterior", "lighting", "wheels"]

interface User {
  id: string;
  fullName: string;
  email: string;
}

const Gallery: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rate'>('name')
  const [moreOpen, setMoreOpen] = useState(false)
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const filteredItems = useMemo(() => {
    let filtered = items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
      return matchesSearch && matchesCategory
    })

    // Sorting logic
    filtered = [...filtered].sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name)
      } else if (sortBy === 'price') {
        return a.price - b.price // Ascending order for price
      } else if (sortBy === 'rate') {
        return b.rate - a.rate // Descending order for rating 
      }
      return 0
    })

    return filtered
  }, [searchTerm, selectedCategory, sortBy])

  const formatPrice = (price: number) => {
    return `LKR ${price.toLocaleString()}`
  }

  const handleViewDetails = (item: GalleryItem) => {
    console.log('Viewing details for:', item.name)
    // You can add navigation to detail page here if needed
  }

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token"); 
    navigate("/");
  };

  return (
    <div className="fixed bg-black inset-0 h-screen w-screen overflow-y-auto">
      {/* Navigation */}
      <nav className="relative bg-black bg-opacity-70 text-white p-4 z-50">
          <div className="container mx-auto flex justify-between items-center">
            
            {/* Logo */}
            <div className="text-xl sm:text-2xl md:text-3xl font-bold font-pncb text-yellow-500 tracking-wider">
              ModiFyX
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              {/* Avatar Button for Mobile */}
              <div className="relative">
                <button
                  onClick={() => setMoreOpen(!moreOpen)}
                  className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-yellow-500 text-black font-bold rounded-full 
                              hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                >
                  {user?.fullName ? user.fullName.charAt(0).toUpperCase() : "U"}
                </button>

                {/* Dropdown for Mobile */}
                {moreOpen && (
                  <div className="absolute right-0 mt-3 w-48 bg-black bg-opacity-95 backdrop-blur-md 
                                  border border-gray-700 rounded-2xl shadow-lg p-4 z-50">
                    <div className="border-b border-gray-700 pb-3 mb-3">
                      <p className="text-yellow-500 font-semibold truncate text-sm">
                        {user?.fullName || "User"}
                      </p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-3 py-2 rounded-lg bg-red-600 hover:bg-red-700 
                                text-white transition text-sm"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop Navigation Links + Avatar */}
            <div className="hidden md:flex items-center gap-6 lg:gap-10">
              <a href="/Home" className="hover:text-yellow-500 transition-colors duration-300 text-sm lg:text-base">Home</a>
              <a href="/Home#modifications" className="hover:text-yellow-500 transition-colors duration-300 text-sm lg:text-base">Modifications</a>
              <a href="/ModiFyX-Gallery" className="text-yellow-500 font-semibold text-sm lg:text-base">Gallery</a>
              <a href="/profile" className="hover:text-yellow-500 transition-colors duration-300 text-sm lg:text-base">Profile</a>
              <a href="/Home#ar-view" className="hover:text-yellow-500 transition-colors duration-300 text-sm lg:text-base">AR View</a>
              <a href="/Log-Contacts" className="hover:text-yellow-500 transition-colors duration-300 text-sm lg:text-base">Contact</a>

              {/* Avatar Dropdown for Desktop */}
              <div className="relative dropdown-container">
                <button
                  onClick={() => setMoreOpen(!moreOpen)}
                  className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center bg-yellow-500 text-black font-bold rounded-full 
                              hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 text-sm lg:text-base"
                >
                  {user?.fullName ? user.fullName.charAt(0).toUpperCase() : "U"}
                </button>

                {moreOpen && (
                  <div className="absolute right-0 mt-3 w-52 bg-black bg-opacity-90 backdrop-blur-md 
                                  border border-gray-700 rounded-2xl shadow-lg p-4 z-50">
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

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                className="fixed inset-0 bg-black bg-opacity-95 z-40 md:hidden"
              >
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                  <a
                    href="/Home"
                    className="text-2xl text-white hover:text-yellow-500 transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </a>
                  <a
                    href="/Home#modifications"
                    className="text-2xl text-white hover:text-yellow-500 transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Modifications
                  </a>
                  <a
                    href="/ModiFyX-Gallery"
                    className="text-2xl text-yellow-500 font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Gallery
                  </a>
                  <a
                    href="/profile"
                    className="text-2xl text-white hover:text-yellow-500 transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Profile
                  </a>
                  <a
                    href="/Home#ar-view"
                    className="text-2xl text-white hover:text-yellow-500 transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    AR View
                  </a>
                  <a
                    href="/Log-Contacts"
                    className="text-2xl text-white hover:text-yellow-500 transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </a>
                  
                  {/* Mobile Logout Button */}
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="mt-8 px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white transition text-lg"
                  >
                    Logout
                  </button>

                  {/* Close Button */}
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="absolute top-6 right-6 p-2 text-white hover:text-yellow-500"
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </nav>

      {/* Main Content */}
      <div className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4">
              Modification Gallery
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover premium automotive modifications to enhance your vehicle's performance and style
            </p>
          </motion.div>

          {/* Search and Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 space-y-4"
          >
            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="relative w-full md:w-auto flex-1 max-w-2xl">
                <input
                  type="text"
                  placeholder="Search modifications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-3 bg-gray-900 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </div>
              </div>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'rate')}
                className="px-4 py-3 bg-gray-900 border border-gray-700 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="rate">Sort by Rating</option>
              </select>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl font-medium capitalize transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-yellow-500 text-black'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6"
          >
            <p className="text-gray-400">
              Showing {filteredItems.length} of {items.length} products
            </p>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl transition-all duration-300 group-hover:shadow-yellow-500/10 group-hover:border-yellow-500/30">
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-full text-yellow-400 text-sm font-semibold">
                      ⭐ {item.rate}
                    </div>
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                      {item.category.toUpperCase()}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-green-400">
                        {formatPrice(item.price)}
                      </span>
                    </div>

                    <button
                      onClick={() => handleViewDetails(item)}
                      className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-yellow-500/25"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-300 mb-2">
                No products found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Gallery