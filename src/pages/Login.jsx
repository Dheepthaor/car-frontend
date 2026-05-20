import { useState, useEffect } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, []);

  // ✅ LOGIN FUNCTION (NOW WITH FORM SUBMIT)
  const handleLogin = async (e) => {
    e.preventDefault(); // ✅ IMPORTANT

    try {
      const res = await fetch("https://car-backend-ofpj.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/dashboard");
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
          "linear-gradient(180deg, #01293B 0%, #3B4F59 35%, #525F64 60%, #272D30 80%, #000000 100%)"
      }}
    >
      <div className="w-full max-w-md text-white">

        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          Welcome
        </h1>

        {/* ✅ FORM ADDED */}
        <form onSubmit={handleLogin}>

          {/* Email */}
          <div className="mb-6">
            <input
              type="email"
              placeholder="Email ID"
              value={email}
              required   // ✅ ADDED
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl bg-[#FFFFFF2E] backdrop-blur-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="relative w-full mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              required   // ✅ ADDED
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl
                         bg-[#FFFFFF2E]
                         backdrop-blur-md
                         text-white
                         placeholder-gray-300
                         focus:outline-none"
            />

            <div
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-white/60"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </div>
          </div>

          <div className="text-right text-sm text-gray-300 mb-10">
            Forgot Password?
          </div>

          {/* SIGN IN */}
          <button
            type="submit"   // ✅ IMPORTANT
            className="w-full py-4 rounded-2xl 
                       bg-white 
                       text-[#0B1C3D] 
                       font-medium 
                       mb-6
                       hover:scale-[1.02]
                       transition-all duration-300"
          >
            Sign In
          </button>

        </form>

        {/* Google */}
        <button className="w-full py-4 rounded-2xl 
                           bg-white/90 
                           text-black 
                           font-medium 
                           flex items-center 
                           justify-center 
                           gap-3
                           mb-8
                           hover:bg-white
                           transition-all duration-300">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Sign In With Google
        </button>

        {/* Signup */}
        <div className="text-center text-sm text-gray-300">
          Don’t have an account{" "}
          <span
            className="text-blue-400 cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </div>

      </div>
    </div>
  );
}