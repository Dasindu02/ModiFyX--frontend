import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bgImage2 from "../assets/95ed0b9c6915d22952ea343e6b1839d3.jpg";

interface RegisterForm {
  fullName: string;
  email: string;
  password: string;
}

interface User extends RegisterForm {
  id: string;
  createdAt: string;
}

const Register: React.FC = () => {
  const [form, setForm] = useState<RegisterForm>({
    fullName: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Check if user already exists
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const userExists = existingUsers.some((user: User) => user.email === form.email);
      
      if (userExists) {
        alert("User with this email already exists!");
        return;
      }

      // Create new user object
      const newUser: User = {
        id: Date.now().toString(),
        ...form,
        createdAt: new Date().toISOString(),
      };

      // Save to localStorage
      const updatedUsers = [...existingUsers, newUser];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      
      // Also save the currently logged-in user
      localStorage.setItem('currentUser', JSON.stringify(newUser));

      alert("Registration successful! Welcome to ModiFyX!");
      setForm({ fullName: "", email: "", password: "" });
      
      // Navigate to login page
      navigate("/login");
    } catch (error: any) {
      alert("Registration failed. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#36454F] p-4 lg:p-0">
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-4 left-4 z-50 bg-black/40 backdrop-blur-md p-3 rounded-full 
                  hover:bg-black/60 transition shadow-lg border border-white/20
                  lg:absolute lg:top-6 lg:left-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="white"
          className="w-5 h-5 lg:w-6 lg:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

    <div className="fixed bg-black inset-0 h-screen w-screen overflow-y-auto">
        <div className="bg-black/40 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <div 
            className="h-48 relative bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage2})` }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-white p-6">
              <h1 className="text-4xl font-bold font-pncb mb-2">ModiFyX</h1>
              <p className="text-gray-200 text-center text-lg">Let's Get Started</p>
              <p className="text-gray-300 text-center text-sm mt-2">
                Start your journey with ModiFyX
              </p>
            </div>
          </div>

          {/* Mobile Form */}
          <div className="p-6 bg-black/20 backdrop-blur-md">
            <h2 className="text-2xl font-semibold font-poppins mb-6 text-white text-center">
              Sign Up
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-medium mb-2 text-white text-sm">Full Name</label>
                <input
                  name="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-600 rounded-xl bg-black/40 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#C04000] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block font-medium mb-2 text-white text-sm">Email Address</label>
                <input
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-600 rounded-xl bg-black/40 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#C04000] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block font-medium mb-2 text-white text-sm">Password</label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-600 rounded-xl bg-black/40 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#C04000] focus:border-transparent transition-all pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors p-1"
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L9 9m13 11l-4-4m0 0l-4 4m4-4V5" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#C04000] text-white py-3 px-4 rounded-xl hover:bg-[#0047AB] transition font-semibold flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating Account...
                  </>
                ) : (
                  "Sign Up"
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-gray-600"></div>
              <span className="px-3 text-gray-400 text-sm">Or continue with</span>
              <div className="flex-1 border-t border-gray-600"></div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button className="flex items-center justify-center px-4 py-3 border border-gray-600 rounded-xl bg-black/30 hover:bg-black/50 transition-colors text-sm">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>
              <button className="flex items-center justify-center px-4 py-3 border border-gray-600 rounded-xl bg-black/30 hover:bg-black/50 transition-colors text-sm">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
                Twitter
              </button>
            </div>

            {/* Sign In Link */}
            <div className="text-center">
              <p className="text-gray-300 text-sm">
                Already a Member?{" "}
                <Link 
                  to="/login" 
                  className="text-[#C04000] hover:text-[#0047AB] font-semibold transition-colors"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex fixed w-full min-h-screen justify-center items-center bg-[#36454F] p-4">
        {/* BIG CARD */}
        <div
          className="w-[90%] max-w-4xl h-[550px] rounded-3xl overflow-hidden shadow-1xl flex"
          style={{
            backgroundImage: `url(${bgImage2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* DARK OVERLAY */}
          <div className="w-full h-full bg-black/60 backdrop-blur-sm flex">
            {/* LEFT SECTION */}
            <div className="w-[455px] text-white p-10 flex flex-col justify-center rounded-l-2xl bg-cover bg-center">
              <h1 className="text-6xl font-bold font-pncb mb-64">
                ModiFyX
              </h1>

              <p className="text-gray-200 leading-relaxed text-2xl mb-2">
                Let's Get Started<br></br>
              </p>

              <p className="text-gray-200 leading-relaxed">
                Start your journey with ModiFyX — customize your vehicle your way.
              </p>
            </div>

            {/* RIGHT SECTION (SIGNUP FORM) */}
            <div className="w-1/2 bg-black/20 backdrop-blur-md p-10 text-white flex flex-col justify-center">
              <div className="max-w-md mx-auto w-full">
                <h2 className="text-3xl font-semibold font-poppins mb-8">Sign Up</h2>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block font-medium mb-1">Full Name</label>
                    <input
                      name="fullName"
                      type="text"
                      placeholder="John Doe"
                      value={form.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-2 py-1 border border-gray-700 rounded-lg bg-black/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#C04000] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-medium mb-1">Email Address</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="example@gmail.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-2 py-1 border border-gray-700 rounded-lg bg-black/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#C04000] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-medium mb-1">Password</label>
                    <div className="relative">
                      <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-black/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#C04000] focus:border-transparent transition-all pr-12"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                      >
                        {showPassword ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L9 9m13 11l-4-4m0 0l-4 4m4-4V5" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#C04000] text-white py-3 rounded-lg hover:bg-[#0047AB] transition font-semibold flex items-center justify-center"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Creating Account...
                      </>
                    ) : (
                      "Sign Up"
                    )}
                  </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                  <div className="flex-1 border-t border-gray-600"></div>
                  <span className="px-3 text-gray-400 text-sm">Or continue with</span>
                  <div className="flex-1 border-t border-gray-600"></div>
                </div>

                {/* Social Login */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <button className="flex items-center justify-center px-4 py-3 border border-gray-700 rounded-lg bg-black/30 hover:bg-black/50 transition-colors">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Google
                  </button>
                  <button className="flex items-center justify-center px-4 py-3 border border-gray-700 rounded-lg bg-black/30 hover:bg-black/50 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                    Twitter
                  </button>
                </div>

                {/* Sign In Link */}
                <div className="text-center">
                  <p className="text-gray-300">
                    Already a Member?{" "}
                    <Link 
                      to="/login" 
                      className="text-[#C04000] hover:text-[#0047AB] font-semibold transition-colors"
                    >
                      Sign In
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;