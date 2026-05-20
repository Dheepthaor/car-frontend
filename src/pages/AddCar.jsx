import sellIcon from "../assets/icons/sellcar.svg";
import rentIcon from "../assets/icons/rentcar.svg";
import closeIcon from "../assets/icons/close.svg";
import BottomNavbar from "../components/BottomNavbar";
import { useNavigate } from "react-router-dom";

export default function AddCar() {
  const navigate=useNavigate()
  return (
    <div className="min-h-screen bg-[#000B17] text-white">

      <div className="w-full max-w-[1300px] mx-auto px-4 pt-8">

        {/* Header */}
        <div className="flex items-center justify-center relative mb-10">

          <h1 className="text-xl font-semibold">
            Choose Category
          </h1>

          <img
             onClick={() => navigate("/dashboard")}
            src={closeIcon}
            alt="close"
            className="w-5 h-5 absolute right-0 cursor-pointer"
          />

        </div>

        {/* Sell Car Card */}
         <div className="mb-6">
          <div
           onClick={() => navigate("/sell-car", { state: { type: "sell" } })}
            className="flex items-center gap-4 p-6 rounded-xl border border-white/20
            bg-gradient-to-r from-[#2A3B4D] to-[#1A2A3B]
            cursor-pointer hover:scale-[1.02] transition"
          >
            <img src={sellIcon} className="w-8 h-8" />

            <p className="text-lg">
              Sell Your Car
            </p>
          </div>
        </div>

        {/* Rent Car Card */}
       <div className="mt-4">
  <div
   onClick={() => navigate("/rent-car", { state: { type: "rent" } })}
    className="flex items-center gap-4 p-6 rounded-xl border border-white/20
    bg-gradient-to-r from-[#2A3B4D] to-[#1A2A3B]
    cursor-pointer hover:scale-[1.02] transition"
  >
    <img src={rentIcon} className="w-8 h-8" />

    <p className="text-lg">
      Rent Your Car
    </p>
  
</div>

        </div>

      </div>
  <BottomNavbar/>
    </div>
  );
}