import searchIcon from "../assets/icons/search.svg";

import toyota from "../assets/brands/toyota.png";
import nissan from "../assets/brands/nissan.png";
import lexus from "../assets/brands/lexus.png";
import bmw from "../assets/brands/bmw.png";

import premium from "../assets/lifestyle/premium.jpg";
import budget from "../assets/lifestyle/budget.jpg";
import classic from "../assets/lifestyle/classic.jpg";
import convertible from "../assets/lifestyle/convertible.jpg";
import family from "../assets/lifestyle/family.jpg";
import lessdriven from "../assets/lifestyle/lessdriven.jpg";
import BottomNavbar from "../components/BottomNavbar";

export default function SearchPage() {

  const brands = [toyota, nissan, lexus, bmw];

  const lifestyleCars = [
    { name: "Premium Cars", img: premium },
    { name: "Budget Cars", img: budget },
    { name: "Classic", img: classic },
    { name: "Convertibles", img: convertible },
    { name: "Family Cars", img: family },
    { name: "Less driven", img: lessdriven }
  ];

  return (

    <div className="min-h-screen bg-[#000B17] text-white pb-28">

      <div className="w-full max-w-[1300px] mx-auto px-4 pt-6">

        {/* Location */}
        <div className="mb-4">
          <p className="text-gray-400 text-sm">location</p>
          <h2 className="text-lg font-semibold">Malappuram , Kerala</h2>
        </div>

        {/* Search bar */}
        <div className="relative mb-8">

          <img
            src={searchIcon}
            alt="search"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-70"
          />

          <input
            type="text"
            placeholder="What are you looking for.."
            className="w-full h-[52px] pl-12 pr-4 rounded-xl
            bg-gradient-to-r from-[#2A3B4D] to-[#1A2A3B]
            border border-white/10
            text-white placeholder-gray-300
            outline-none"
          />

        </div>

        {/* Browse by brands */}
        <h3 className="text-lg font-semibold mb-4">
          Browse by brands
        </h3>

        <div className="flex gap-4 overflow-x-auto pb-4 mb-6 scrollbar-hide">

          {brands.map((brand, i) => (
            <div
              key={i}
              className="min-w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center"
            >
              <img
                src={brand}
                className="w-11 h-11 object-contain"
              />
            </div>
          ))}

        </div>

        {/* Browse by lifestyle */}
        <h3 className="text-lg font-semibold mb-4">
          Browse by lifestyle
        </h3>

        <div className="grid grid-cols-2 gap-4">

          {lifestyleCars.map((car, i) => (

            <div
              key={i}
              className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden"
            >

              <img
                src={car.img}
            className="w-full h-full object-cover"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/30"></div>

              <div className="absolute bottom-3 left-3">
                <p className="text-sm font-semibold">
                  {car.name}
                </p>
                <p className="text-xs text-gray-200">
                  114 Vehicles
                </p>
              </div>

            </div>

          ))}

        </div>

      </div>
  <BottomNavbar/>
    </div>

  );
}