import { useState } from "react";
import axios from "axios";
import bgImage from "../assets/35ef9d04a043f3364ea0e3c57a5c2db2.jpg";
import bgImage2 from "../assets/95ed0b9c6915d22952ea343e6b1839d3.jpg";
import { Link } from "react-router-dom";



interface RegisterForm {
  fullName: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const [form, setForm] = useState<RegisterForm>({
    fullName: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        form
      );

      alert(res.data.message);
      setForm({ fullName: "", email: "", password: "" });
    } catch (error: any) {
      alert(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className=" fixed w-full min-h-screen flex justify-center items-center bg-[#36454F] p-4">

  {/* --- BIG CARD --- */}
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
     <div className="w-[455px] text-white p-10 flex flex-col justify-center rounded-l-2xl bg-cover bg-center"
          // style={{ backgroundImage: `url(${bgImage})` }}
        >
          <h1 className="text-6xl font-bold font-pncb  mb-64">
            ModiFyX
          </h1>

          <p className="text-gray-200 leading-relaxed text-2xl mb-2 Font-bold ">
            Let’s Get Started<br></br></p>

            <p className="text-gray-200 leading-relaxed mb-2">
            Start your journey with ModiFyX — customize your vehicle your way.
          </p>
        </div>

      {/* RIGHT SECTION (SIGNUP FORM) */}
      <div className="w-1/2 bg-black/20 backdrop-blur-md p-10 text-white flex flex-col justify-center">

        <h2 className="text-3xl font-semibold mb-6">Sign up</h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block font-medium mb-1">Full Name</label>
            <input
              name="fullName"
              type="text"
              placeholder="John Doe"
              value={form.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-black/30 text-white placeholder-gray-400 focus:ring focus:ring-green-500"
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
              className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-black/30 text-white placeholder-gray-400 focus:ring focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Create password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-black/30 text-white placeholder-gray-400 focus:ring focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#C04000] text-white py-3 rounded-lg hover:bg-[#0047AB] transition font-semibold"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>
          <div className="text-center mt-6 ">
                <p className="text-gray-300">
                  Already a Member?{" "}
                  <Link 
                    to="/ " 
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



  );
};

export default Register;



// function Register() {
//   return (
//     <div>
//       <h1 className="text-1xl text-red-600">Tailwind Working!</h1>
//     </div>
//   );
// }

// export default Register;
