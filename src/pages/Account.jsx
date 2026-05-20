import { useState } from "react";
import BottomNavbar from "../components/BottomNavbar";
import { useNavigate } from "react-router-dom";
import profileImg from "../assets/icons/profile.png";
import carImg from "../assets/cars/car.png";
import edit from "../assets/icons/edit.png";
import accbell from "../assets/icons/accbell.png";
import dot from "../assets/icons/dot.png";
import settings from "../assets/icons/settings.png";


export default function Account() {
  const [activeTab, setActiveTab] = useState("selling");
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#000B17] text-white flex flex-col">

      {/* PAGE CONTENT */}
     <div className="flex-1 w-full flex justify-center">
  <div className="w-full max-w-[1300px] px-4 md:px-8 pt-6 sm:pt-8 pb-24">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">

          <div className="text-xl sm:text-2xl cursor-pointer">
            ☰
          </div>

          <div className="flex items-center gap-4 sm:gap-5">
            <img
  src={settings}
  alt="settings"
  onClick={() => navigate("/settings")}
  className="w-5 sm:w-6 cursor-pointer"
/>
            <img src={accbell} alt="bell" className="w-5 sm:w-6" />
            <img src={dot} alt="feature" className="w-5 sm:w-6" />
          </div>

        </div>

        {/* PROFILE */}
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">

          <div className="relative">

            {/* Profile Image */}
            <img
              src={profileImg}
              alt="profile"
              className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg object-cover"
            />

            {/* Edit Icon */}
            <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2">

              <img
                src={edit}
                alt="edit"
                className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8"
              />

            </div>

          </div>

          <div>

            <h2 className="text-base sm:text-lg md:text-xl font-semibold">
              James Robert
            </h2>

            <p className="text-gray-400 text-xs sm:text-sm">
              Individual profile
            </p>

          </div>

        </div>

        {/* TABS */}
        <div className="flex gap-4 sm:gap-6 text-gray-400 border-b border-gray-600 mb-6 sm:mb-8 overflow-x-auto">

          {["selling","expired","sold","inactive","liked"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 whitespace-nowrap text-sm sm:text-base ${
                activeTab === tab
                  ? "text-white border-b-2 border-white"
                  : "hover:text-white"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}

        </div>

        {/* CAR CARD */}
        {activeTab === "selling" && (

  <div className="bg-gradient-to-r from-[#243B55] to-[#0D1F2D] border border-gray-600 rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4">

    {/* CAR IMAGE */}
    <img
      src={carImg}
      alt="car"
      className="w-24 h-20 sm:w-32 sm:h-24 object-cover rounded-lg"
    />

    {/* CAR INFO */}
    <div className="flex-1">

      <h3 className="font-semibold text-sm sm:text-base mb-1">
        Car name
      </h3>

      <p className="text-gray-400 text-xs sm:text-sm">
        James Robert
      </p>

      <p className="text-gray-400 text-xs sm:text-sm">
        2022
      </p>

      <p className="text-gray-400 text-xs sm:text-sm">
        1000 km
      </p>

    </div>

    {/* PRICE */}
    <div className="text-yellow-400 font-semibold text-xs sm:text-sm whitespace-nowrap">
      $5000 / day
    </div>

  </div>

)}


      </div>

      {/* BOTTOM NAVBAR */}
      <BottomNavbar />
     </div>
    </div>
  );
}