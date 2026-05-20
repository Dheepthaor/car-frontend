import { useNavigate } from "react-router-dom";

export default function Home() {
   const navigate = useNavigate();
  return (
  
   <div className="relative h-screen bg-[#05070D] text-white overflow-hidden">

 {/* Vector Pattern */}
{/* Background Pattern */}
 <div
    className="absolute inset-0 bg-center bg-cover opacity-90"
   style={{ backgroundImage: "url('/pattern.png')" }}
  />

  {/* Blue Glazing Layer */}
  <div className="absolute inset-0 
                  bg-gradient-to-tr 
                  from-[#20354E]/60 
                  via-[#20354E]/30 
                  to-transparent 
                  mix-blend-overlay 
                  pointer-events-none" 
  />

      {/* Car Image */}
      <img
        src="/car.png"
        alt="Car"
     className="absolute right-0 bottom-0 h-[75%] md:h-[90%] object-contain opacity-90"
      />

      {/* Content Section */}
     <div className="relative z-10 flex flex-col items-center 
                md:items-start 
                justify-between 
                h-full 
                px-6 md:px-20 
                py-16">

  {/* TOP TEXT SECTION */}
  <div className="text-center md:text-left mt-10 md:mt-0">

    <h1 className="text-3xl md:text-6xl font-bold leading-tight">
      Wheels You
      Needed
    </h1>

    <p className="mt-4 text-gray-400 text-sm md:text-lg max-w-md mx-auto md:mx-0">
      Premium and prestige daily rental car,<br></br>
      experience the thrill at a lower price.
    </p>

  </div>

  {/* BUTTON */}
  <div className="mb-10 md:mb-0">
    <button className="
      w-64 md:w-56
      py-3
      rounded-full
      bg-[#0B1C3D]/80
      border border-blue-500/20
      backdrop-blur-md
      text-white
      tracking-wide
      shadow-[inset_0_0_15px_rgba(59,130,246,0.2)]
      transition-all duration-300
    "  onClick={() => navigate("/login")}>
      Let’s Go
    </button>
  </div>

</div>
</div>
)}