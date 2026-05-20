import { useLocation, useNavigate } from "react-router-dom";
import calendarIcon from "../assets/icons/calendar.png";
import locationIcon from "../assets/icons/location.png";
import mapIcon from "../assets/icons/map.png";
import cardIcon from "../assets/icons/card.png";
import money from "../assets/icons/moneys.png"
import cardog from "../assets/icons/cardog.svg"

export default function RentingDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#000B17] text-white flex justify-center">

      {/* MAIN CONTAINER (same as dashboard) */}
      <div className="w-full max-w-[1300px] px-4 md:px-8 pb-28">

        {/* HEADER */}
        <div className="flex items-center gap-3 pt-5 mb-6">
          <button onClick={() => navigate(-1)}>←</button>
          <h2 className="text-lg font-semibold">Renting Details</h2>
        </div>

        {/* CAR CARD */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-3 flex gap-4 mb-6 border border-white/10">
          <img
            src={state?.image}
            alt="car"
            className="w-28 h-20 object-cover rounded-lg"
          />

          <div className="flex flex-col justify-center">
            <h3 className="font-semibold">{state?.name}</h3>
            <p className="text-gray-400 text-sm">White</p>
            <p className="text-sm mt-1">{state?.price}</p>
          </div>
        </div>

        {/* DATE SECTION */}
        <div className="mb-6">

          <div className="flex items-center gap-2 mb-3">
            <img src={calendarIcon} className="w-5 h-5" />
            <p className="font-medium">Select Date</p>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="dd/mm/yyyy"
              className="flex-1 bg-transparent border border-white/20 rounded-lg px-4 py-3 outline-none text-sm"
            />

            <span className="text-gray-400">→</span>

            <input
              type="text"
              placeholder="dd/mm/yyyy"
              className="flex-1 bg-transparent border border-white/20 rounded-lg px-4 py-3 outline-none text-sm"
            />
          </div>

          <div className="flex justify-between text-xs text-gray-400 mt-2 px-1">
            <span>Pickup Date</span>
            <span>Return Date</span>
          </div>

        </div>

        {/* LOCATION SECTION */}
        <div className="mb-6">

          <div className="flex items-center gap-2 mb-3">
            <img src={locationIcon} className="w-5 h-5" />
            <p className="font-medium">Select Location</p>
          </div>

          {/* PICKUP */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Type your location or search in map"
              className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 pr-10 outline-none text-sm"
            />
            <img
              src={mapIcon}
              className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2"
            />
            <p className="text-xs text-gray-400 mt-1">Pickup location</p>
          </div>

          {/* RETURN */}
          <div className="relative">
            <input
              type="text"
              placeholder="Type your location or search in map"
              className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 pr-10 outline-none text-sm"
            />
            <img
              src={mapIcon}
              className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2"
            />
            <p className="text-xs text-gray-400 mt-1">Return location</p>
          </div>

        </div>

        {/* PAYMENT */}
        <div className="mb-10">

          <div className="flex items-center gap-2 mb-3">
            <img src={cardog} className="w-5 h-5" />
            <p className="font-medium">Payment Method</p>
          </div>

          <div className="bg-transparent border border-white/20 rounded-lg px-4 py-3 flex items-center gap-3 mb-3">
            <img src={cardIcon} className="w-5 h-5" />
            <p className="text-sm">**** **** **** 56324</p>
          </div>

          <div className="bg-transparent border border-white/20 rounded-lg px-4 py-3 flex items-center gap-3">
            <img src={money} className="w-5 h-5" />
             <p className="text-sm">Cash</p>
          </div>

        </div>

      </div>

      {/* 🔥 FIXED BOTTOM BUTTON */}
      <div className="fixed bottom-0 left-0 w-full flex justify-center">
        <div className="w-full max-w-[1300px] bg-white/10 backdrop-blur-xl p-4">
          <button 
           onClick={() => navigate("/dashboard")}
          className="w-full bg-[#001C35] py-3 rounded-lg font-semibold">
            CONFIRM BOOKING
          </button>
        </div>
      </div>

    </div>
  );
}