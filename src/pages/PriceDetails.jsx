import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import editIcon from "../assets/icons/editp.png"

export default function PriceDetails() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [enablePrice, setEnablePrice] = useState(false);
  const [price, setPrice] = useState(5000);
  const [mileage, setMileage] = useState(10);

  // 🔥 calculate percentage
  const pricePercent = (price / 999000) * 100;
  const mileagePercent = (mileage / 999000) * 100;

  return (
    <div className="min-h-screen bg-[#E9E9E9] flex justify-center">
       <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 py-6 flex flex-col justify-between">
        {/* TOP */}
        <div>
          {/* HEADER */}
          <div className="flex items-center gap-3 mb-2">
            <button onClick={() => navigate(-1)}>←</button>

            <h2 className="text-base sm:text-lg font-semibold text-black">
              {state?.brand} {state?.model} {state?.year}
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#6B7280] mb-6">
            {state?.location || "Malappuram, Kerala"}
          </p>

          {/* TOGGLE */}
          <div className="flex justify-between items-center mb-5">
            <span className="text-sm sm:text-base">
              Enable price range
            </span>

            <div
              onClick={() => setEnablePrice(!enablePrice)}
              className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer transition ${
                enablePrice ? "bg-[#FFCE50]" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full transition ${
                  enablePrice ? "translate-x-5" : ""
                }`}
              />
            </div>
          </div>

          {/* PRICE */}
          <div className="mb-6">
            <p className="text-sm mb-2">Set your price</p>

            <div className="border border-[#627487] rounded-lg p-4 bg-white">
             <div className="flex justify-center items-center gap-2 mb-3 text-sm font-medium">
  <img src={editIcon} alt="edit" className="w-4 h-4" />
  <span>{Number(price).toLocaleString()} AED</span>
</div>

              <input
                type="range"
                min="1"
                max="999000"
                value={price}
                disabled={!enablePrice}
                onChange={(e) => setPrice(e.target.value)}
                style={{
                  background: `linear-gradient(to right, #facc15 ${pricePercent}%, #e5e7eb ${pricePercent}%)`,
                }}
                className="w-full h-[4px] rounded-lg appearance-none cursor-pointer"
              />

              <div className="flex justify-between text-xs text-[#9CA3AF] mt-2">
                <span>1 AED</span>
                <span>999,000 AED</span>
              </div>
            </div>
          </div>

          {/* MILEAGE */}
          <div>
            <p className="text-sm mb-2">Mileage</p>

            <div className="border border-[#627487] rounded-lg p-4 bg-white">
              <div className="flex justify-center items-center gap-2 mb-3 text-sm font-medium">
  <img src={editIcon} alt="edit" className="w-4 h-4" />
  <span>{mileage} KM</span>
</div>

              <input
                type="range"
                min="1"
                max="999000"
                value={mileage}
                onChange={(e) => setMileage(e.target.value)}
                style={{
                  background: `linear-gradient(to right, #facc15 ${mileagePercent}%, #e5e7eb ${mileagePercent}%)`,
                }}
                className="w-full h-[4px] rounded-lg appearance-none cursor-pointer"
              />

              <div className="flex justify-between text-xs text-[#9CA3AF] mt-2">
                <span>1 KM</span>
                <span>999,000 KM</span>
              </div>
            </div>
          </div>
        </div>

        {/* BUTTON */}
      <button
  onClick={() => {
    navigate("/upload-media", {
      state: {
        ...state,
        price: price,
        mileage: mileage,
      },
    });
  }}
  className="w-full bg-[#001C35] text-white py-3 rounded-lg mt-8"
>
  NEXT
</button>

      </div>
      </div>
  
  );
}