import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  // 🔥 register API call
  const handleRegister = async (e) => {
    e.preventDefault(); // ✅ IMPORTANT

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Registration successful");
        navigate("/login");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        background:
          "linear-gradient(180deg, #025479 0%, #000000 100%)",
      }}
    >
      <div className="w-[350px] flex flex-col items-center">
        <h1 className="text-white text-[26px] font-semibold mb-10">
          Create New Account
        </h1>

        {/* ✅ FORM ADDED */}
        <form onSubmit={handleRegister} className="w-full flex flex-col items-center">
          
          <div className="flex flex-col gap-[20px] w-full">
            <input
              type="text"
              placeholder="Full Name"
              required   // ✅ ADDED
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full h-[73px] px-6 rounded-2xl bg-[#FFFFFF2E] text-white placeholder-gray-300 backdrop-blur-md focus:outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              required   // ✅ ADDED
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full h-[73px] px-6 rounded-2xl bg-[#FFFFFF2E] text-white placeholder-gray-300 backdrop-blur-md focus:outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required   // ✅ ADDED
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full h-[73px] px-6 rounded-2xl bg-[#FFFFFF2E] text-white placeholder-gray-300 backdrop-blur-md focus:outline-none"
            />

            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required   // ✅ ADDED
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full h-[73px] px-6 rounded-2xl bg-[#FFFFFF2E] text-white placeholder-gray-300 backdrop-blur-md focus:outline-none"
              />

              <div
                className="absolute right-6 top-1/2 -translate-y-1/2 text-white/60 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </div>
            </div>
          </div>

          <button
            type="submit" // ✅ IMPORTANT
            className="w-full h-[60px] mt-10 rounded-2xl bg-[#D9D9D9] text-[#0B1C3D] font-medium hover:scale-[1.02] transition-all duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-gray-300 text-sm mt-6">
          Have an account?{" "}
          <span
            className="text-blue-400 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}