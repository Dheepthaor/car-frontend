import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

import cameraIcon from "../assets/icons/camera.png"; // your figma icon
import settingsIcon from "../assets/icons/settings.png"; // optional (for bottom icon)

export default function UploadMedia() {
  const navigate = useNavigate();
  const { state } = useLocation();
   console.log("UPLOAD STATE:", state);
 const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);
 const handleSubmit = async () => {
  try {
    console.log("FINAL DATA:", {
      ...state,
      ...formData,
      description,
      image,
      price: state.price,
      mileage: state.mileage,
      type: state.type,
    });

    const res = await fetch("https://car-backend-ofpj.onrender.com/api/cars/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...state,
        ...formData,
        description,
        image,

        price: state.price,       // ✅ MUST
        mileage: state.mileage,   // ✅ MUST
        type: state.type,         // ✅ MUST
      }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Car added successfully 🚗");
      navigate("/dashboard");
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.log(error);
  }
};
  const colors = ["Red", "Black", "White", "Blue"];
  const gears = ["Manual", "Automatic"];
  const fuels = ["Petrol", "Diesel", "Electric"];

  const [formData, setFormData] = useState({
    color: "",
    gear: "",
    fuel: "",
  });

  return (
    <div className="min-h-screen bg-[#E9E9E9] flex justify-center">
  <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 py-6 flex flex-col justify-between">
        {/* TOP */}
       
        <div>
          {/* HEADER */}
          <div className="flex items-center gap-3 mb-2">
            <button onClick={() => navigate(-1)}>←</button>
            <h2 className="text-base sm:text-lg font-semibold">
              Upload Media
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#6B7280] mb-6">
            {state?.price || "15,000 AED"} , {state?.mileage || "10 KM"}
          </p>

          {/* IMAGE UPLOAD */}
         <div className="flex flex-col items-center mb-6">
  <label className="w-28 h-28 border border-[#C9CED6] rounded-lg flex items-center justify-center bg-white cursor-pointer overflow-hidden">
    
    {image ? (
      <img src={image} className="w-full h-full object-cover" />
    ) : (
      <img src={cameraIcon} alt="camera" className="w-15 opacity-60" />
    )}

    <input
      type="file"
      accept="image/*"
      className="hidden"
      onChange={(e) => {
        const file = e.target.files[0];

        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setImage(reader.result); // ✅ base64 image
          };
          reader.readAsDataURL(file);
        }
      }}
    />
  </label>

  <p className="text-xs text-black mt-2">
    Upload Photos
  </p>
</div>

          {/* DESCRIPTION */}
          <div className="mb-5">
            <label className="text-sm text-black">
              Description<span className="text-yellow-500">*</span>
            </label>

            <textarea
              placeholder="Write a description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full mt-2 border border-[#627487] rounded-lg px-4 py-3 text-sm outline-none resize-none h-24"
            />
          </div>

          {/* DROPDOWNS */}

          {/* VEHICLE COLOR */}
          <div className="mb-4 relative">
            <label className="text-sm">
              Vehicle color<span className="text-yellow-500">*</span>
            </label>

            <div
              onClick={() => setOpenDropdown("color")}
              className="mt-2 border border-[#627487] rounded-lg px-4 py-3 flex justify-between items-center cursor-pointer bg-white"
            >
              <span className="text-sm text-gray-400">
                {formData.color || "Choose from list"}
              </span>
              <span>⌄</span>
            </div>

            {openDropdown === "color" && (
              <div className="absolute w-full bg-white border rounded-lg mt-1 z-10">
                {colors.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setFormData({ ...formData, color: item });
                      setOpenDropdown(null);
                    }}
                    className="p-3 text-sm hover:bg-gray-100 cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* GEAR TYPE */}
          <div className="mb-4 relative">
            <label className="text-sm">
              Gear type<span className="text-yellow-500">*</span>
            </label>

            <div
              onClick={() => setOpenDropdown("gear")}
              className="mt-2 border border-[#627487] rounded-lg px-4 py-3 flex justify-between items-center cursor-pointer bg-white"
            >
              <span className="text-sm text-gray-400">
                {formData.gear || "Choose from list"}
              </span>
              <span>⌄</span>
            </div>

            {openDropdown === "gear" && (
              <div className="absolute w-full bg-white border rounded-lg mt-1 z-10">
                {gears.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setFormData({ ...formData, gear: item });
                      setOpenDropdown(null);
                    }}
                    className="p-3 text-sm hover:bg-gray-100 cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* FUEL TYPE */}
          <div className="mb-4 relative">
            <label className="text-sm">
              Fuel type<span className="text-yellow-500">*</span>
            </label>

            <div
              onClick={() => setOpenDropdown("fuel")}
              className="mt-2 border border-[#627487] rounded-lg px-4 py-3 flex justify-between items-center cursor-pointer bg-white"
            >
              <span className="text-sm text-gray-400">
                {formData.fuel || "Choose from list"}
              </span>
              <span>⌄</span>
            </div>

            {openDropdown === "fuel" && (
              <div className="absolute w-full bg-white border rounded-lg mt-1 z-10">
                {fuels.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setFormData({ ...formData, fuel: item });
                      setOpenDropdown(null);
                    }}
                    className="p-3 text-sm hover:bg-gray-100 cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ADVANCED OPTIONS */}
          <div
  onClick={() => navigate("/advanced-options")}
  className="flex items-center gap-2 mt-4 text-yellow-500 text-sm cursor-pointer"
>
  <img src={settingsIcon} className="w-4 h-4" />
  <span>Choose advance options</span>
</div>
        {/* SUBMIT BUTTON */}
       <button
  onClick={handleSubmit}
  className="w-full bg-[#001C35] text-white py-3 rounded-lg mt-8"
>
          SUBMIT
        </button>

      </div>
    </div>
    </div>
  );
}
