import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import carIcon from "../assets/icons/rs.png";
import bikeIcon from "../assets/icons/bike.png";
import searchIcon from "../assets/icons/search.png";

// ✅ CAR BRANDS
import toyota from "../assets/brands/toyota.png";
import nissan from "../assets/brands/nissan.png";
import lexus from "../assets/brands/lexus.png";
import bmw from "../assets/brands/bmw.png";

// ✅ BIKE BRANDS (ADD THESE IMAGES IN YOUR FOLDER)
import kawasaki from "../assets/brands/kawasaki.png";
import ducati from "../assets/brands/ducati.png";
import honda from "../assets/brands/honda.png";


export default function Sell() {
  const [formData, setFormData] = useState({
    brand: "Nissan",
    model: "",
    type: "",
    year: "",
    bodyType: "",
  });

  const navigate = useNavigate();
  const { state } = useLocation();

  const handleNext = () => {
    navigate("/price-details", {
      state: {
        ...formData,
        ...state,
        location: "Malappuram, Kerala",
      },
    });
  };

  const [openDropdown, setOpenDropdown] = useState(null);
  const [vehicleType, setVehicleType] = useState("Car");
  const [showVehicleModal, setShowVehicleModal] = useState(false);

  const [showTypeModal, setShowTypeModal] = useState(false);
  const [selectedType, setSelectedType] = useState("");

  const brands = ["Toyota", "Nissan", "Lexus", "BMW"];
  const years = ["2024", "2023", "2022", "2021", "2020"];
  const bodyTypes = ["SUV", "Sedan", "Hatchback", "Coupe"];

  // ✅ DYNAMIC BRAND ICONS
  const carBrands = [toyota, nissan, lexus, bmw];
  const bikeBrands = [kawasaki, bmw, ducati, honda];

  const currentBrands =
    vehicleType === "Car" ? carBrands : bikeBrands;
    // ✅ DROPDOWN BRAND NAMES
const carBrandNames = ["Toyota", "Nissan", "Lexus", "BMW"];
const bikeBrandNames = ["Kawasaki", "BMW", "Ducati", "Honda"];

const currentBrandNames =
  vehicleType === "Car" ? carBrandNames : bikeBrandNames;

  return (
    <div className="min-h-screen bg-[#E9E9E9] flex justify-center">
      <div className="w-full max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl bg-[#E9E9E9] px-4 sm:px-6 md:px-10 py-6 mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-lg sm:text-xl font-semibold text-black">
            Add your vehicle
          </h1>
          <button
            onClick={() => navigate("/addcar")}
            className="text-xl"
          >
            ✕
          </button>
        </div>

        {/* VEHICLE TYPE */}
        <div
          onClick={() => setShowVehicleModal(true)}
          className="border border-[#C9CED6] rounded-lg px-4 py-3 flex items-center justify-between mb-4 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <img
              src={vehicleType === "Car" ? carIcon : bikeIcon}
              alt="vehicle"
              className="w-8 h-8 object-contain"
            />
            <span className="text-sm text-black">{vehicleType}</span>
          </div>
          <span className="text-gray-500 text-sm">⌄</span>
        </div>

        <p className="text-[#9CA3AF] text-xs mb-5">
          Choose from popular brands or add your own
        </p>

        {/* 🔥 UPDATED BRAND LOGOS */}
        <div className="flex gap-4 overflow-x-auto mb-6">
          {currentBrands.map((logo, index) => (
            <div
              key={index}
              className="min-w-[64px] h-[64px] bg-gray-300 rounded-full flex items-center justify-center"
            >
              <img src={logo} alt="brand" className="w-10" />
            </div>
          ))}
        </div>

        <h2 className="text-black font-medium mb-4">
          Choose your brand<span className="text-yellow-500">*</span>
        </h2>

        <div>

          {/* BRAND */}
          <div className="space-y-1 mb-4 relative">
            <label className="text-xs text-black block">Brand</label>

            <div
              onClick={() => setOpenDropdown("brand")}
              className="border border-[#C9CED6] rounded-lg px-4 py-3 flex justify-between items-center cursor-pointer"
            >
              <span className="text-sm text-gray-600">
                {formData.brand}
              </span>
              <span className="text-gray-500 text-sm">⌄</span>
            </div>

            {openDropdown === "brand" && (
              <div className="absolute w-full bg-white border border-[#C9CED6] mt-1 rounded-lg z-10">
               {currentBrandNames.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setFormData({ ...formData, brand: item });
                      setOpenDropdown(null);
                    }}
                    className="p-3 hover:bg-gray-100 cursor-pointer text-black text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* MODEL */}
          <div className="space-y-1 mb-4">
            <label className="text-xs text-black block">Model</label>

            <input
              type="text"
              placeholder="Add Model Name"
              value={formData.model}
              onChange={(e) =>
                setFormData({ ...formData, model: e.target.value })
              }
              className="w-full border border-[#C9CED6] rounded-lg px-4 py-3 outline-none text-gray-600 placeholder-gray-400 text-sm"
            />
          </div>

          {/* TYPE */}
          <div className="space-y-1 mb-4">
            <label className="text-xs text-black block">Type</label>

            <div
              onClick={() => setShowTypeModal(true)}
              className="border border-[#C9CED6] rounded-lg px-4 py-3 flex justify-between items-center cursor-pointer"
            >
              <span className="text-sm text-gray-600">
                {formData.type || "Add Model Type"}
              </span>
              <span className="text-gray-500 text-sm">⌄</span>
            </div>
          </div>

          {/* YEAR */}
          <div className="space-y-1 mb-4 relative">
            <label className="text-xs text-black block">Year</label>

            <div
              onClick={() => setOpenDropdown("year")}
              className="border border-[#C9CED6] rounded-lg px-4 py-3 flex justify-between items-center cursor-pointer"
            >
              <span className="text-sm text-gray-600">
                {formData.year || "Add Model Year"}
              </span>
              <span className="text-gray-500 text-sm">⌄</span>
            </div>

            {openDropdown === "year" && (
              <div className="absolute w-full bg-white border border-[#C9CED6] mt-1 rounded-lg z-10">
                {years.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setFormData({ ...formData, year: item });
                      setOpenDropdown(null);
                    }}
                    className="p-3 hover:bg-gray-100 cursor-pointer text-black text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* BODY TYPE */}
          <div className="space-y-1 mb-4 relative">
            <label className="text-xs text-black block">Body type</label>

            <div
              onClick={() => setOpenDropdown("body")}
              className="border border-[#C9CED6] rounded-lg px-4 py-3 flex justify-between items-center cursor-pointer"
            >
              <span className="text-sm text-gray-600">
                {formData.bodyType || "Add Body Type"}
              </span>
              <span className="text-gray-500 text-sm">⌄</span>
            </div>

            {openDropdown === "body" && (
              <div className="absolute w-full bg-white border border-[#C9CED6] mt-1 rounded-lg z-10">
                {bodyTypes.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setFormData({ ...formData, bodyType: item });
                      setOpenDropdown(null);
                    }}
                    className="p-3 hover:bg-gray-100 cursor-pointer text-black text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* BUTTON */}
        <button
          onClick={handleNext}
          className="w-full bg-[#001C35] text-white py-3 rounded-lg mt-6 text-sm"
        >
          NEXT
        </button>

      </div>
      {/* VEHICLE MODAL */}
{showVehicleModal && (
  <div className="fixed inset-0 z-50 flex items-end justify-center">
    <div
      className="absolute inset-0 bg-black/30"
      onClick={() => setShowVehicleModal(false)}
    />

    <div className="relative w-full max-w-md bg-white rounded-t-2xl p-5">
      <h2 className="text-center font-medium text-black mb-5">
        Select Vehicle type
      </h2>

      {/* CAR */}
      <div
        onClick={() => {
          setVehicleType("Car");
          setShowVehicleModal(false);
        }}
        className="flex items-center justify-between py-3 cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <img src={carIcon} className="w-6 h-6" />
          <span className="text-black">Car</span>
        </div>

        <div className="w-5 h-5 border rounded-full flex items-center justify-center">
          {vehicleType === "Car" && (
            <div className="w-2.5 h-2.5 bg-black rounded-full" />
          )}
        </div>
      </div>

      <hr />

      {/* MOTORCYCLE */}
      <div
       onClick={() => {
  setVehicleType("Motorcycle");
  setFormData({ ...formData, brand: "Kawasaki" }); // ✅ default bike
  setShowVehicleModal(false);
}}
        className="flex items-center justify-between py-3 cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <img src={bikeIcon} className="w-6 h-6" />
          <span className="text-black">Motorcycle</span>
        </div>

        <div className="w-5 h-5 border rounded-full flex items-center justify-center">
          {vehicleType === "Motorcycle" && (
            <div className="w-2.5 h-2.5 bg-black rounded-full" />
          )}
        </div>
      </div>
    </div>
  </div>
)}
    </div>
  );
}