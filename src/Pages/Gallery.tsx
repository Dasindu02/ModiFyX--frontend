import React, { useState, useMemo,useEffect } from 'react'
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";  


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
    name: "Body Kit",
    description: "Premium aerodynamic body kit for sporty look",
    price: 85000,
    rate: 4.8,
    image: "/assets/gallery/bodykit.jpg",
    category: "exterior"
  },
  {
    id: 2,
    name: "LED Headlights",
    description: "High-brightness LED headlights with DRL",
    price: 45000,
    rate: 4.6,
    image: "/assets/gallery/headlights.jpg",
    category: "lighting"
  },
  {
    id: 3,
    name: "Spoiler",
    description: "Sport spoiler for improved aerodynamics",
    price: 32000,
    rate: 4.5,
    image: "/assets/gallery/spoiler.jpg",
    category: "exterior"
  },
  {
    id: 4,
    name: "Alloy Wheels",
    description: "Lightweight premium alloy wheels",
    price: 120000,
    rate: 4.9,
    image: "/assets/gallery/alloy.jpg",
    category: "wheels"
  },
  {
    id: 5,
    name: "Performance Exhaust",
    description: "Stainless steel exhaust system for enhanced sound and performance",
    price: 65000,
    rate: 4.7,
    image: "/assets/gallery/exhaust.jpg",
    category: "performance"
  },
  {
    id: 6,
    name: "Coilover Suspension",
    description: "Adjustable suspension kit for improved handling",
    price: 95000,
    rate: 4.8,
    image: "/assets/gallery/suspension.jpg",
    category: "suspension"
  }
]

const categories = ["all", "exterior", "lighting", "wheels", "performance", "suspension"]

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
    return items
      .filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
        return matchesSearch && matchesCategory
      })
      .sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name)
        if (sortBy === 'price') return b.price - a.price
        return b.rate - a.rate
      })
  }, [searchTerm, selectedCategory, sortBy])

  const formatPrice = (price: number) => {
    return `LKR ${price.toLocaleString()}`
  }

  const handleViewDetails = (item: GalleryItem) => {
    console.log('Viewing details for:', item.name)
  }

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token"); 
    navigate("/");
  };

  return (
    <div className="min-h-screen w-full bg-black text-white font-poppins">
      {/* Navigation */}
      <nav className="relative bg-black bg-opacity-70 text-white p-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <div className="text-3xl font-bold font-pncb text-yellow-500 tracking-wider">
            ModiFyX
          </div>

          {/* Links + Avatar */}
          <div className="flex items-center gap-10">

            <a href="/Home" className="hover:text-yellow-500 transition-colors duration-300">Home</a>
            <a href="/Home#modifications" className="hover:text-yellow-500 transition-colors duration-300">Modifications</a>
            <a href="/ModiFyX-Gallery" className="text-yellow-500 font-semibold">Gallery</a>
            <a href="/profile" className="hover:text-yellow-500 transition-colors duration-300">Profile</a>
            <a href="/Home#ar-view" className="hover:text-yellow-500 transition-colors duration-300">AR View</a>
            <a href="/Log-Contacts" className="hover:text-yellow-500 transition-colors duration-300">Contact</a>

            {/* Avatar Dropdown */}
            <div className="relative dropdown-container">

              {/* Avatar Button */}
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className="w-10 h-10 flex items-center justify-center bg-yellow-500 text-black font-bold rounded-full 
                            hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
              >
                {user?.fullName ? user.fullName.charAt(0).toUpperCase() : "U"}
              </button>

              {/* Dropdown */}
              {moreOpen && (
                <div className="absolute right-0 mt-3 w-52 bg-black bg-opacity-90 backdrop-blur-md 
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