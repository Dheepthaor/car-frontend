import { useState, useEffect } from "react";  // ✅ from react
import { useLocation, useNavigate } from "react-router-dom"; // ✅ router
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import locationIcon from "../assets/icons/location.png";
import audiR8 from "../assets/cars/car1.png"; // ✅ fallback image

export default function CarDetails() {
  const location = useLocation();
const state = location.state;
useEffect(() => {
  window.scrollTo(0, 0);
}, [location]);
  const navigate = useNavigate();

  const [showMore, setShowMore] = useState(false);

  const images = state?.image
    ? [state.image, state.image, state.image, state.image]
    : [];

  return (
    <div className="min-h-screen bg-[#000B17] text-white flex justify-center overflow-hidden">

      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[1300px] px-4 md:px-8 pb-32">

        {/* HEADER */}
        <div className="flex items-center justify-between pt-5 mb-5">
          <button onClick={() => navigate(-1)}>←</button>
          <h2 className="text-lg font-semibold">{state?.name}</h2>
          <div>♡</div>
        </div>

        {/* SLIDER */}
        <div className="relative mb-6">
          <div className="w-full overflow-visible md:overflow-hidden">
            <div className="relative max-w-full">

              <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#000B17] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#000B17] to-transparent z-10 pointer-events-none"></div>

              <Swiper
                spaceBetween={20}
                centeredSlides={true}
                loop={images.length > 2}
                grabCursor={true}
                slidesPerView={1.35}
                breakpoints={{
                  640: { slidesPerView: 1.4 },
                  768: { slidesPerView: 1.6 },
                  1024: { slidesPerView: 1.9 },
                  1280: { slidesPerView: 2 },
                }}
              >
                {images.map((img, i) => (
                  <SwiperSlide key={i}>
                    {({ isActive }) => (
                      <div
                        className={`transition-all duration-300 ${
                          isActive
                            ? "scale-100 opacity-100"
                            : "scale-90 opacity-60"
                        }`}
                      >
                        <img
                          src={img || audiR8}
                          className="w-full h-[220px] md:h-[300px] object-cover rounded-2xl"
                        />
                      </div>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>

            </div>
          </div>
        </div>

        {/* TITLE */}
        <div className="flex justify-between items-center mb-3">
          <div>
            <h3 className="text-lg font-semibold">{state?.name}</h3>
            <p className="text-sm text-gray-300">⭐ 4.8 Reviews</p>
          </div>
          <div className="text-xl">♡</div>
        </div>

        {/* DETAILS HEADER */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Car Details</h3>
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-sm text-gray-400"
          >
            {showMore ? "less" : "more"}
          </button>
        </div>

        {/* DETAILS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Tank size", value: "74 liters" },
            { label: "Gearbox", value: "Automatic" },
            { label: "Seats", value: "2" },
            { label: "Door", value: "4" },
            ...(showMore
              ? [
                  { label: "Owners", value: "2" },
                  { label: "Cylinder", value: "2" },
                  { label: "Specs", value: "GCC Purchased" },
                  { label: "Service history", value: "UpToDate" },
                  { label: "Maximum Power", value: "74" },
                  { label: "Maximum Torque", value: "Automatic" },
                  { label: "Wheel Type", value: "All Wheel drive" },
                  { label: "Boot Capacity", value: "4" },
                  { label: "Engine Displacement", value: "0" },
                  { label: "Seat type", value: "Leather" },
                ]
              : []),
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4"
            >
              <p className="text-xs text-gray-400">{item.label}</p>
              <p className="text-sm font-semibold mt-1">{item.value}</p>
            </div>
          ))}
        </div>

        {/* RENTER */}
        <h3 className="text-lg font-semibold mb-3">Renter</h3>

        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-4 flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-400 rounded-lg" />
            <div>
              <p className="font-semibold">James Robert</p>
              <div className="flex items-center gap-1 text-sm text-gray-400">
                <img src={locationIcon} className="w-3 h-3" />
                <span>Kottakal</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 text-xl">
  <span
    className="cursor-pointer"
    onClick={() =>
      navigate("/chat")
    }
  >
    📩
  </span>

  <span>📞</span>
</div>
        </div>

        {/* ✅ RECOMMENDED (CLICKABLE FIX) */}
        <h3 className="text-lg font-semibold mb-3">
          Recommended for you
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-24">
          {[1, 2, 3, 4].map((i) => {
  const recommendedCar = {
    name: "BMW the i5",
    image: state?.image || audiR8,
    location: "Kozhikode",
    price: "9000",
  };

  return (
    <div
      key={i}
      onClick={() => {
        navigate("/car-details", {
          state: recommendedCar,
          replace: true,
        });
      }}
      className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl overflow-hidden cursor-pointer"
    >
      <img
        src={recommendedCar.image}
        className="h-[140px] w-full object-cover"
      />
      <div className="p-3">
        <p className="text-sm font-semibold">{recommendedCar.name}</p>
        <div className="flex justify-between text-xs text-gray-400">
          <span>{recommendedCar.location}</span>
          <span className="text-yellow-400">
            ₹{recommendedCar.price} / day
          </span>
        </div>
      </div>
    </div>
  );
})}
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 w-full flex justify-center">
        <div className="w-full max-w-[1300px] bg-white/10 backdrop-blur-xl rounded-t-2xl p-4 flex justify-between items-center">
          <p className="text-white font-semibold text-lg">
            8000$ <span className="text-gray-400 text-sm">/Day</span>
          </p>

          <button
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-6 py-2 rounded-lg font-semibold"
            onClick={() =>
              navigate("/renting-details", { state })
            }
          >
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
}