import { motion } from "framer-motion";
import Bg from "../assets/back2.jpg";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
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
  const formRef = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
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
      console.error("Form reference is null");
      return;
    }

    setIsSending(true);

    try {
      await emailjs.sendForm(
        "service_7dljqlj",
        "template_nuaaap4",
        formRef.current,
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
    <div className="fixed inset-0 h-screen w-screen overflow-hidden bg-black text-white">

      {/* NAVBAR */}
      <nav className="relative bg-black bg-opacity-70 text-white p-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <div className="text-3xl font-bold font-pncb text-yellow-500 tracking-wider">
            ModiFyX
          </div>

          {/* Links + Avatar */}
          <div className="flex items-center gap-10">

            <a href="/Home" className="hover:text-yellow-500">Home</a>
            <a href="#modification" className="hover:text-yellow-500">Modifications</a>
            <a href="#gallery" className="hover:text-yellow-500">Gallery</a>
            <a href="/profile" className="hover:text-yellow-500">Profile</a>
            <a href="#ar view" className="hover:text-yellow-500">AR View</a>
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

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${Bg})` }}
      ></div>

      {/* MAIN CONTACT SECTION */}
      <div className="flex items-center justify-center min-h-screen px-6 relative z-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl w-full mb-16 ">

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

            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">

              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="p-3 rounded-xl bg-white/20 focus:bg-white/30 outline-none"
                required
              />

              <input
                type="email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="p-3 rounded-xl bg-white/20 focus:bg-white/30 outline-none"
                required
              />

              <textarea
                name="message"
                rows={4}
                placeholder="Message"
                className="p-3 rounded-xl bg-white/20 focus:bg-white/30 outline-none"
                required
              />

              <button
                type="submit"
                disabled={isSending}
                className={`${
                  isSending ? "bg-gray-600" : "bg-[#C04000] hover:bg-[#e94d10]"
                } py-3 rounded-xl font-semibold text-lg transition-all disabled:cursor-not-allowed`}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>

          </motion.div>

        </div>
      </div>

    </div>
  );
}