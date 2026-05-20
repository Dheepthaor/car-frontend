import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AdvancedOptions() {
  const navigate = useNavigate();

  const [openDropdown, setOpenDropdown] = useState(null);

  const dropdownFields = [
    { key: "seating", label: "Seating Capacity" },
    { key: "owners", label: "Number of Owners" },
    { key: "specs", label: "Specs" },
    { key: "cylinders", label: "Number of Cylinders" },
    { key: "engine", label: "Engine Displacement" },
    { key: "seatType", label: "Seat type" },
    { key: "wheelType", label: "Wheel type" },
  ];

  const inputFields = [
    "Service history",
    "Maximum Power",
    "Fuel tank capacity",
    "Maximum Torque",
    "Boot Capacity",
  ];

  return (
    <div className="min-h-screen bg-[#E9E9E9] flex justify-center">
      <div className="w-full max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl bg-[#E9E9E9] px-4 sm:px-6 md:px-10 py-6 mx-auto flex flex-col justify-between">

        {/* TOP */}
        <div>
          {/* HEADER */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-base sm:text-lg font-semibold text-black">
              Advance options
            </h2>

            <button onClick={() => navigate(-1)} className="text-lg">
              ✕
            </button>
          </div>

          {/* DROPDOWNS */}
          {dropdownFields.map((item) => (
            <div key={item.key} className="mb-4 relative">
              <div
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === item.key ? null : item.key
                  )
                }
                className="border border-[#C9CED6] rounded-lg px-4 py-3 flex justify-between items-center cursor-pointer bg-white"
              >
                <span className="text-sm text-[#6B7280]">
                  {item.label}
                </span>
                <span className="text-sm">⌄</span>
              </div>

              {openDropdown === item.key && (
                <div className="absolute w-full bg-white border border-[#C9CED6] rounded-lg mt-1 z-10">
                  <div className="p-3 text-sm hover:bg-gray-100 cursor-pointer">
                    Option 1
                  </div>
                  <div className="p-3 text-sm hover:bg-gray-100 cursor-pointer">
                    Option 2
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* INPUT FIELDS */}
          {inputFields.map((label, i) => (
            <div key={i} className="mb-4">
              <input
                type="text"
                placeholder={label}
                className="w-full border border-[#C9CED6] rounded-lg px-4 py-3 text-sm outline-none bg-white"
              />
            </div>
          ))}
        </div>

        {/* SAVE BUTTON */}
        <button className="w-full bg-[#001C35] text-white py-3 rounded-lg mt-6">
          SAVE
        </button>

      </div>
    </div>
  );
}