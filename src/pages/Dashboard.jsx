import { useNavigate } from "react-router-dom"; // ✅ added
import BottomNavbar from "../components/BottomNavbar";
import locationIcon from "../assets/icons/location.png";
// IMPORT FIGMA CAR IMAGES
import audiR8 from "../assets/cars/car1.png";
import ferrari296 from "../assets/cars/car2.png";
import bmwM4 from "../assets/cars/car3.png";
import bmwM3 from "../assets/cars/car4.png";
import bmwi5 from "../assets/cars/car5.png";
import bmwx5 from "../assets/cars/car6.png";
import bellIcon from "../assets/icons/bell.png";
import filterIcon from "../assets/icons/filter.png";
import toyota from "../assets/brands/toyota.png";
import nissan from "../assets/brands/nissan.png";
import lexus from "../assets/brands/lexus.png";
import bmw from "../assets/brands/bmw.png";
import audi from "../assets/brands/audi.png";
import { useEffect, useState } from "react";
const cars = [
  {
    name: "Audi R8 Coupé",
    price: "$8000 / day",
    location: "Kottakal",
    image: audiR8,
  },
  {
    name: "Ferrari 296 GTB",
    price: "$9000 / day",
    location: "Kottakal",
    image: ferrari296,
  },
  {
    name: "BMW the i5",
    price: "$7000 / day",
    location: "Kottakal",
    image: bmwM4,
  },
  {
    name: "BMW the X4",
    price: "$7000 / day",
    location: "Kottakal",
    image: bmwM3,
  },
  {
    name: "Audi QB e-tron",
    price: "$7000 / day",
    location: "Kottakal",
    image: bmwi5,
  },
  {
    name: "Ferrari 296 GTB",
    price: "$7500 / day",
    location: "Kottakal",
    image: bmwx5,
  },
];

const brands = [
  { name: "Toyota", image: toyota },
  { name: "Nissan", image: nissan },
  { name: "Lexus", image: lexus },
  { name: "BMW", image: bmw },
  { name: "Audi", image: audi },
];

export default function Dashboard() {
  const navigate = useNavigate(); // ✅ added
  const [dbCars, setDbCars] = useState([]);
useEffect(() => {
  const fetchCars = async () => {
    try {
      const res = await fetch("https://car-backend-ofpj.onrender.com/api/cars/all");
      const data = await res.json();

      setDbCars(data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchCars();
}, []);
  console.log("DB CARS:", dbCars);
  return (
    <div className="min-h-screen bg-[#000B17] text-white flex justify-center">

      <div className="w-full max-w-[1300px] px-4 md:px-8 pb-28">

        {/* Location */}
        <div className="flex justify-between items-center mb-5">
          <div>
            <p className="text-sm text-gray-400">Location</p>
            <h2 className="text-lg font-semibold">Malappuram , Kerala</h2>
          </div>

          <div className="rounded-full flex items-center justify-center">
            <img src={bellIcon} alt="notification" className="w-10 h-10"/>
          </div>
        </div>

        {/* Search */}
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Search your dream car.."
            className="flex-1 bg-white/10 rounded-xl px-4 py-3 outline-none"
          />

          <button className="rounded-xl w-12 flex items-center justify-center">
            <img src={filterIcon} alt="filter" className="w-10 h-10"/>
          </button>
        </div>

        {/* Brands */}
        <div className="flex gap-4 overflow-x-auto mb-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="min-w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-10 h-10 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Nearby */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Nearby</h2>
          <p className="text-sm text-gray-400">View all</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
          {cars.slice(0, 4).map((car, index) => (

            <div
              key={index}
              onClick={() => navigate("/car-details", { state: car })} // ✅ added
              className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-[160px] object-cover"
              />

              <div className="p-3">
                <h3 className="font-semibold text-sm md:text-base">
                  {car.name}
                </h3>

                <div className="flex justify-between text-xs md:text-sm text-gray-300 mt-2">
                  <div className="flex items-center gap-1">
                    <div className="flex items-center gap-1 text-xs md:text-sm text-gray-300">
                      <img
                        src={locationIcon}
                        alt="location"
                        className="w-3 h-3 flex-shrink-0"
                      />
                      <span>{car.location}</span>
                    </div>
                  </div>
                   <p className="text-yellow-400">{car.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Cars */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">All Cars</h2>
          <p className="text-sm text-gray-400">View all</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {cars.slice(2).map((cars, index) => (
            <div
              key={index}
              onClick={() => navigate("/car-details", { state: cars })} // ✅ added
              className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={cars.image}
                alt={cars.name}
                className="w-full h-[160px] md:h-[200px] object-cover"
              />

              <div className="p-3">
                <h3 className="font-semibold text-sm md:text-base">
                  {cars.name}
                </h3>

                <div className="flex justify-between text-xs md:text-sm text-gray-300 mt-2">
                  <div className="flex items-center gap-1">
                    <img
                      src={locationIcon}
                      alt="location"
                      className="w-3 h-3"
                    />
                    <p>{cars.location}</p>
                  </div>
                  <p className="text-yellow-400">{cars.price}</p>
                </div>
              </div>
            </div>
          ))}
          {dbCars.map((car, index) => (
  <div
    key={`db-${index}`}
    onClick={() => navigate("/car-details", { state: car })}
    className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden cursor-pointer"
  >
    <img
      src={
        car.image && car.image.startsWith("data:image")
          ? car.image
          : cars[0].image // fallback (same UI)
      }
      alt={car.model}
      className="w-full h-[160px] md:h-[200px] object-cover"
    />

    <div className="p-3">
      <h3 className="font-semibold text-sm md:text-base">
        {car.brand || "Unknown"} {car.model || ""}
      </h3>

      <div className="flex justify-between text-xs md:text-sm text-gray-300 mt-2">
        <div className="flex items-center gap-1">
          <img
            src={locationIcon}
            alt="location"
            className="w-3 h-3"
          />
          <p>{car.location || "Unknown"}</p>
        </div>

        <p className="text-yellow-400">
          {car.price && car.price !== ""
            ? `₹${Number(car.price).toLocaleString()} / day`
            : "₹----"}
        </p>
      </div>
    </div>
  </div>
))}
        </div>

        <BottomNavbar />

      </div>
    </div>
  );
}