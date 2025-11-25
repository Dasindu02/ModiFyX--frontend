//profile.jsx

import { useEffect, useState } from "react";
import BGIMG from "../assets/back2.jpg";

type User = {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  age?: number;
  district?: string;
  vehicleModel?: string;
  registrationDate?: string;
};

const Profile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Partial<User>>({});
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      if (typeof window === "undefined") return;
      const raw = localStorage.getItem("user");
      if (!raw) return;
      const parsed: User = JSON.parse(raw);
      setUser(parsed);
      setFormData(parsed);
    } catch (err) {
      console.error("Could not read user from localStorage:", err);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      if (!user) {
        console.error("❌ No user found in state");
        throw new Error("User not found");
      }

      if (!user.id) {
        console.error("❌ User ID is missing:", user);
        throw new Error("User ID is missing");
      }

      // Debug URL to check
      const updateURL = `http://localhost:5000/api/auth/update-profile/${user.id}`;
      console.log("PUT URL:", updateURL);

      const response = await fetch(updateURL, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // If server sends HTML (404), prevent JSON error
      const text = await response.text();
      console.log("🔍 Raw response:", text);

      let result;
      try {
        result = JSON.parse(text);
      } catch (err) {
        console.error("❌ Server did not return JSON");
        throw new Error("Server error: Invalid JSON response");
      }

      if (!response.ok) {
        console.error("❌ Server error:", result);
        throw new Error(result.message || "Failed to update profile");
      }

      console.log("✅ Updated User:", result.user);
      
      // Fix: Ensure we use the correct ID field from backend response
      const updatedUserData = {
        id: result.user._id || result.user.id, // Use _id from backend, fallback to id
        fullName: result.user.fullName,
        email: result.user.email,
        phone: result.user.phone,
        age: result.user.age,
        district: result.user.district,
        vehicleModel: result.user.vehicleModel,
        registrationDate: result.user.registrationDate
      };

      // Save new user object with consistent ID
      localStorage.setItem("user", JSON.stringify(updatedUserData));
      setUser(updatedUserData);
      setFormData(updatedUserData);

      setMessage("Profile updated successfully!");
      setIsEditing(false);

    } catch (error: any) {
      console.error("❌ UPDATE ERROR:", error);
      setMessage(error.message || "Error updating profile");
    } finally {
      setIsLoading(false);
    }
  };

  const districts = [
    "Colombo", "Gampaha", "Kalutara", "Kandy", "Matale", "Nuwara Eliya",
    "Galle", "Matara", "Hambantota", "Jaffna", "Kilinochchi", "Mannar",
    "Vavuniya", "Mullaitivu", "Batticaloa", "Ampara", "Trincomalee",
    "Kurunegala", "Puttalam", "Anuradhapura", "Polonnaruwa", "Badulla",
    "Monaragala", "Ratnapura", "Kegalle"
  ];

  const vehicleModels = [
    "Toyota Aqua", "Toyota Prius", "Toyota Axio", "Toyota Allion",
    "Honda Vezel", "Honda Fit", "Honda Civic", "Honda City",
    "Nissan Sunny", "Nissan Leaf", "Nissan X-Trail",
    "Mitsubishi Montero", "Mitsubishi Lancer",
    "Suzuki Wagon R", "Suzuki Alto", "Suzuki Swift",
    "BMW 3 Series", "Mercedes C-Class", "Audi A4",
    "Other"
  ];

  

  if (!user) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${BGIMG})` }}
      />
      <div className="fixed inset-0 bg-black bg-opacity-40" />

      {/* Navigation */}
      <nav className="relative bg-black bg-opacity-70 text-white p-4 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-3xl font-bold font-pncb text-yellow-500 tracking-wider">
            ModiFyX
          </div>
          <div className="space-x-6">
            <a href="/Home" className="hover:text-yellow-500">Home</a>
            <a href="/profile" className="hover:text-yellow-500">Profile</a>
            <a href="#modifications" className="hover:text-yellow-500">Modifications</a>
            <a href="#gallery" className="hover:text-yellow-500">Gallery</a>
            <a href="#ar-view" className="hover:text-yellow-500">AR View</a>
            <a href="/Log-Contacts" className="hover:text-yellow-500">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 pt-20">
        {/* Greeting */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Welcome, <span className="text-yellow-500">{user.fullName}</span>
          </h1>
          <p className="text-gray-300">Manage your profile and vehicle information</p>
        </div>

        {/* Message Alert */}
        {message && (
          <div className={`max-w-2xl mx-auto mb-6 p-4 rounded-lg ${
            message.includes("Error") 
              ? "bg-red-500 text-white" 
              : "bg-green-500 text-white"
          }`}>
            {message}
          </div>
        )}

        {/* Profile Card */}
        <div className="max-w-2xl mx-auto bg-black bg-opacity-70 rounded-lg border border-gray-700 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Profile Information</h2>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300"
              disabled={isLoading}
            >
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>

          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Basic Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-yellow-500 border-b border-gray-600 pb-2">
                    Personal Details
                  </h3>
                  
                  <div>
                    <label className="block text-white mb-2">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName || ""}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email || ""}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-gray-400"
                      disabled
                    />
                    <p className="text-gray-400 text-sm mt-1">Email cannot be changed</p>
                  </div>

                  <div>
                    <label className="block text-white mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone || ""}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-500"
                      placeholder="+94 XX XXX XXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-white mb-2">Age</label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age || ""}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-500"
                      min="18"
                      max="100"
                    />
                  </div>
                </div>

                {/* Vehicle Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-yellow-500 border-b border-gray-600 pb-2">
                    Vehicle Details
                  </h3>

                  <div>
                    <label className="block text-white mb-2">District</label>
                    <select
                      name="district"
                      value={formData.district || ""}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-500"
                    >
                      <option value="">Select District</option>
                      {districts.map(district => (
                        <option key={district} value={district}>{district}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white mb-2">Vehicle Model</label>
                    <select
                      name="vehicleModel"
                      value={formData.vehicleModel || ""}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-500"
                    >
                      <option value="">Select Vehicle Model</option>
                      {vehicleModels.map(model => (
                        <option key={model} value={model}>{model}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white mb-2">Vehicle Registration Date</label>
                    <input
                      type="date"
                      name="registrationDate"
                      value={formData.registrationDate || ""}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-500"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-4 pt-4 border-t border-gray-600">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-2 border border-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-300"
                  disabled={isLoading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-600 transition duration-300 flex items-center gap-2"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black"></div>
                      Saving...
                    </>
                  ) : (
                    'Save Changes'
                  )}
                </button>
              </div>
            </form>
          ) : (
            // Display Mode
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Personal Details */}
              <div>
                <h3 className="text-lg font-semibold text-yellow-500 mb-4 border-b border-gray-600 pb-2">
                  Personal Details
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-400">Full Name:</span>
                    <p className="text-white">{user.fullName}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Email:</span>
                    <p className="text-white">{user.email}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Phone:</span>
                    <p className="text-white">{user.phone || "Not provided"}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Age:</span>
                    <p className="text-white">{user.age || "Not provided"}</p>
                  </div>
                </div>
              </div>

              {/* Vehicle Details */}
              <div>
                <h3 className="text-lg font-semibold text-yellow-500 mb-4 border-b border-gray-600 pb-2">
                  Vehicle Details
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-400">District:</span>
                    <p className="text-white">{user.district || "Not provided"}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Vehicle Model:</span>
                    <p className="text-white">{user.vehicleModel || "Not provided"}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Registration Date:</span>
                    <p className="text-white">{user.registrationDate || "Not provided"}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="max-w-2xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-black bg-opacity-70 rounded-lg p-4 border border-gray-700 text-center">
            <div className="text-yellow-500 text-2xl font-bold">0</div>
            <div className="text-gray-400">Modifications</div>
          </div>
          <div className="bg-black bg-opacity-70 rounded-lg p-4 border border-gray-700 text-center">
            <div className="text-yellow-500 text-2xl font-bold">0</div>
            <div className="text-gray-400">AR Sessions</div>
          </div>
          <div className="bg-black bg-opacity-70 rounded-lg p-4 border border-gray-700 text-center">
            <div className="text-yellow-500 text-2xl font-bold">0</div>
            <div className="text-gray-400">Saved Designs</div>
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

export default Profile;