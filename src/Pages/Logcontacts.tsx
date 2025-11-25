import { motion } from "framer-motion";
import Bg from "../assets/back2.jpg";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";



export default function LogContact() {
   const [email, setEmail] = useState("");

 useEffect(() => {
  const userData = localStorage.getItem("user");

  if (userData) {
    const user = JSON.parse(userData);
    setEmail(user.email || ""); 
  }
}, []);



  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden bg-black text-white">

      {/* NAVBAR */}
     <nav className="relative bg-black bg-opacity-70 text-white p-4 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-3xl font-bold font-pncb text-yellow-500 tracking-wider ">
            ModiFyX
          </div>

          <div className="space-x-6">
            <a href="/Home" className="hover:text-yellow-500">Home</a>
            <a href="#modification" className="hover:text-yellow-500">Modifications</a>
            <a href="#gallery" className="hover:text-yellow-500">Gallery</a>
            <a href="#ar view" className="hover:text-yellow-500">AR View</a>
            <a href="/Log-Contacts" className="hover:text-yellow-500">Contact</a>
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

            <form className="flex flex-col gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-xl bg-white/20 focus:bg-white/30 outline-none"
              />

             <input
                type="email"
                value={email || ""}   
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="p-3 rounded-xl bg-white/20 focus:bg-white/30 outline-none"
              />



              <textarea
                rows={4}
                placeholder="Message"
                className="p-3 rounded-xl bg-white/20 focus:bg-white/30 outline-none"
              />

              <button
                className="bg-[#C04000] hover:bg-[#e94d10] py-3 rounded-xl font-semibold text-lg transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>

    </div>
  );
}
