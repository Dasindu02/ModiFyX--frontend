import { motion } from "framer-motion";
import Bg from "../assets/back2.jpg";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState , useRef  } from "react";
import emailjs from '@emailjs/browser';
import type { FormEvent } from 'react';
import { useNavigate } from "react-router-dom";  

interface User {
  id: string;
  fullName: string;
  email: string;
}

export default function LogContact() {
  const mobileFormRef = useRef<HTMLFormElement>(null);
  const desktopFormRef = useRef<HTMLFormElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const formRef2 = useRef<HTMLFormElement>(null);

  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");

    if (userData) {
      try {
        const user = JSON.parse(userData);
        setUser(user);
        setEmail(user.email || "");
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token"); 
    navigate("/");
  };

   const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) {
      console.error('Form reference is null');
      return;
    }

    setIsSending(true);

    try {
      // Get form values manually to ensure data is captured
      const formData = new FormData(formRef.current);
      const user_name = formData.get('user_name') as string;
      const user_email = formData.get('user_email') as string;
      const message = formData.get('message') as string;

      console.log('Sending message:', { user_name, user_email, message });

      // Use send method instead of sendForm for better reliability
      await emailjs.send(
        "service_7dljqlj",
        "template_nuaaap4",
        {
          user_name,
          user_email,
          message
        },
        "R8ScU0lB5eGP5p4qu"
      );

      setMessageSent(true);
      formRef.current.reset();
      setTimeout(() => setMessageSent(false), 6000);
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };


 const handleSubmit2 = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formRef2.current) {
      console.error('Form reference is null');
      return;
    }

    setIsSending(true);

    try {
      // Get form values manually to ensure data is captured
      const formData = new FormData(formRef2.current);
      const user_name = formData.get('user_name') as string;
      const user_email = formData.get('user_email') as string;
      const message = formData.get('message') as string;

      console.log('Sending message:', { user_name, user_email, message });

      // Use send method instead of sendForm for better reliability
      await emailjs.send(
        "service_7dljqlj",
        "template_nuaaap4",
        {
          user_name,
          user_email,
          message
        },
        "R8ScU0lB5eGP5p4qu"
      );

      setMessageSent(true);
      formRef2.current.reset();
      setTimeout(() => setMessageSent(false), 6000);
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };




  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setMoreOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen fixed inset-0  bg-black text-white overflow-x-hidden">
      {/* BACKGROUND IMAGE */}
      <div
        className="fixed inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${Bg})` }}
      ></div>

      {/* NAVBAR */}
      <nav className="relative bg-black bg-opacity-70 text-white p-4 z-50 backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <div className="text-2xl lg:text-3xl font-bold font-pncb text-yellow-500 tracking-wider">
            ModiFyX
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="/Home" className="hover:text-yellow-500 transition-colors">Home</a>
            <a href="/Home#modifications" className="hover:text-yellow-500 transition-colors">Modifications</a>
            <a href="/ModiFyX-Gallery" className="hover:text-yellow-500 transition-colors">Gallery</a>
            <a href="/profile" className="hover:text-yellow-500 transition-colors">Profile</a>
            <a href="/Home#ar-view" className="hover:text-yellow-500 transition-colors">AR View</a>
            <a href="/Log-Contacts" className="text-yellow-500 font-semibold">Contact</a>

            {/* Avatar Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className="w-10 h-10 flex items-center justify-center bg-yellow-500 text-black font-bold rounded-full 
                            hover:bg-yellow-400 transition"
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

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            {/* Avatar for mobile */}
            <div className="relative dropdown-container">
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className="w-10 h-10 flex items-center justify-center bg-yellow-500 text-black font-bold rounded-full 
                            hover:bg-yellow-400 transition"
              >
                {user?.fullName ? user.fullName.charAt(0).toUpperCase() : "U"}
              </button>
            </div>

            <button 
              className="text-white text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-black bg-opacity-90 mt-4 rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              <a href="/Home" className="hover:text-yellow-500 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="/Home#modifications" className="hover:text-yellow-500 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Modifications</a>
              <a href="/ModiFyX-Gallery" className="hover:text-yellow-500 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Gallery</a>
              <a href="/profile" className="hover:text-yellow-500 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Profile</a>
              <a href="/Home#ar-view" className="hover:text-yellow-500 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>AR View</a>
              <a href="/Log-Contacts" className="text-yellow-500 font-semibold py-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {moreOpen && (
        <div className="lg:hidden fixed top-20 right-4 w-48 bg-black bg-opacity-90 backdrop-blur-md 
                        border border-gray-700 rounded-2xl shadow-lg p-4 z-50 dropdown-container">
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

      <div className="relative z-20 min-h-screen flex items-center justify-center px-4 py-8 lg:py-0">
        
        <div className="w-full max-w-md lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-yellow-500/20 p-6 text-center">
              <motion.h1
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-3xl font-poppins font-bold text-yellow-500"
              >
                Contact Us
              </motion.h1>
              <p className="text-gray-200 mt-2 text-sm">
                Get in touch with our team
              </p>
            </div>

            {/* Contact Info */}
            <div className="p-6 space-y-6">
              {/* Address */}
              <div className="flex items-center gap-4 p-3 bg-white/5 rounded-xl">
                <FaMapMarkerAlt className="text-yellow-500 text-2xl flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-yellow-500 text-sm">Address</h3>
                  <p className="text-gray-300 text-sm">
                    NO:27/3, Wickramarachchi mw,<br />
                    yakkala.11870
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 p-3 bg-white/5 rounded-xl">
                <FaPhoneAlt className="text-yellow-500 text-2xl flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-yellow-500 text-sm">Phone</h3>
                  <p className="text-gray-300 text-sm">0705243589</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 p-3 bg-white/5 rounded-xl">
                <FaEnvelope className="text-yellow-500 text-2xl flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-yellow-500 text-sm">Email</h3>
                  <p className="text-gray-300 text-sm">support@modifyx.com</p>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="p-6 bg-black/20">
              <motion.h2
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="text-2xl font-poppins text-yellow-500 mb-6 text-center"
              >
                Send Message
              </motion.h2>

              {messageSent && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500 text-white p-3 rounded-lg mb-4 text-sm"
                >
                  Message sent successfully! We'll get back to you soon.
                </motion.div>
              )}

             <form ref={formRef2} onSubmit={handleSubmit2} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  className="p-3 rounded-xl bg-white/20 focus:bg-white/30 outline-none placeholder-gray-400 text-sm"
                  required
                />

                <input
                  type="email"
                  name="user_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="p-3 rounded-xl bg-white/20 focus:bg-white/30 outline-none placeholder-gray-400 text-sm"
                  required
                />

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  className="p-3 rounded-xl bg-white/20 focus:bg-white/30 outline-none placeholder-gray-400 text-sm resize-none"
                  required
                />

                <button
                  type="submit"
                  disabled={isSending}
                  className={`${
                    isSending ? "bg-gray-600" : "bg-[#C04000] hover:bg-[#e94d10]"
                  } py-3 rounded-xl font-semibold text-white transition-all disabled:cursor-not-allowed mt-2 flex items-center justify-center`}
                >
                  {isSending ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* DESKTOP DESIGN - ORIGINAL PRESERVED */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl w-full mb-16">
          {/* LEFT SIDE DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ 
                opacity: 1, 
                x: [-40, 40, -40]  
            }}
            transition={{ 
                duration: 6,        
                repeat: Infinity,   
                ease: "easeInOut" 
            }}
            className="space-y-10"
          >
            <h1 className="text-4xl font-poppins font-bold text-yellow-500 text-center md:text-left">
              Contact Us
            </h1>

            <p className="text-gray-300 text-center md:text-left leading-relaxed">
              Feel free to reach out for vehicle customization, AR/VR demo sessions, or general support. 
              Our team is here to assist you!
            </p>

            {/* ADDRESS */}
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-yellow-500 text-3xl" />
              <div>
                <h2 className="font-semibold text-lg text-yellow-500">Address</h2>
                <p className="text-gray-300">
                 NO:27/3, Wickramarachchi mw,<br />
                  yakkala.11870
                </p>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-yellow-500 text-3xl" />
              <div>
                <h2 className="font-semibold text-lg text-yellow-500">Phone</h2>
                <p className="text-gray-300">0705243589</p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-yellow-500 text-3xl" />
              <div>
                <h2 className="font-semibold text-lg text-yellow-500">Email</h2>
                <p className="text-gray-300">support@modifyx.com</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-xl"
          >
            <motion.h2
              animate={{ x: [0, 20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-3xl font-poppins text-yellow-500 mb-6"
            >
              Send Message
            </motion.h2>

            {messageSent && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500 text-white p-3 rounded-lg mb-4"
              >
                Message sent successfully! We'll get back to you soon.
              </motion.div>
            )}

            <form ref={formRef} onSubmit={handleSubmit}
              className="flex flex-col gap-6"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="p-3 rounded-xl bg-white/20 focus:bg-white/30 outline-none placeholder-gray-400"
                required
              />

              <input
                type="email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="p-3 rounded-xl bg-white/20 focus:bg-white/30 outline-none placeholder-gray-400"
                required
              />

              <textarea
                name="message"
                rows={4}
                placeholder="Message"
                className="p-3 rounded-xl bg-white/20 focus:bg-white/30 outline-none placeholder-gray-400 resize-none"
                required
              />

              <button
                type="submit"
                disabled={isSending}
                className={`${
                  isSending ? "bg-gray-600" : "bg-[#C04000] hover:bg-[#e94d10]"
                } py-3 rounded-xl font-semibold text-lg transition-all disabled:cursor-not-allowed flex items-center justify-center`}
              >
                {isSending ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </motion.div>
        </div>     
      </div>
    </div>
  );
}