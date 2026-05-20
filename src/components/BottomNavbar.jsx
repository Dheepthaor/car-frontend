import { useState } from "react";
import homeIcon from "../assets/icons/home.svg";
import searchIcon from "../assets/icons/search.svg";
import addIcon from "../assets/icons/add.svg";
import messageIcon from "../assets/icons/message.svg";
import accountIcon from "../assets/icons/account.svg";
import {useNavigate } from "react-router-dom";

export default function BottomNavbar() {

  const [active, setActive] = useState("home");
   const navigate = useNavigate();

  const activeStyle = {
    background:
      "linear-gradient(180deg, rgba(255, 255, 255, 0.5074) 0%, rgba(159, 159, 159, 0.7224) 100%)",
  };

  return (
    <div className="fixed bottom-5 left-0 w-full flex justify-center">

      {/* SAME WIDTH AS DASHBOARD CONTAINER */}
      <div className="w-full max-w-[1300px] px-4">

        <div className="h-[74px] bg-white/25 backdrop-blur-2xl border border-white/30 rounded-2xl flex justify-between items-center px-8 shadow-[0px_8px_25px_rgba(0,0,0,0.18)]">

          {/* Home */}
          <div
            onClick={() =>{
              setActive("home");
              navigate("/dashboard")
              }}
            style={active === "home" ? activeStyle : {}}
            className="flex flex-col items-center text-gray-700 text-xs p-1 rounded-lg"
          >
            <img src={homeIcon} alt="home" className="w-10 h-10"/>
          </div>

          {/* Search */}
        <div
  onClick={() => {
    setActive("search");
    navigate("/search");
  }}
  style={active === "search" ? activeStyle : {}}
  className="flex flex-col items-center text-gray-700 text-xs p-1 rounded-lg"
>
  <img src={searchIcon} alt="search" className="w-10 h-10"/>
</div>
          {/* Add Car */}
          <div
            onClick={() => {
              setActive("add");
               navigate("/addcar");
              }}
            style={active === "add" ? activeStyle : {}}
            className="flex flex-col items-center p-1 rounded-lg"
          >
            <img src={addIcon} alt="add" className="w-10 h-10"/>
          </div>

          {/* Message */}
          <div
            onClick={() => {
              setActive("message");
              navigate("/messages");
            }}
            style={active === "message" ? activeStyle : {}}
            className="flex flex-col items-center text-gray-700 text-xs p-1 rounded-lg"
          >
            <img src={messageIcon} alt="message" className="w-10 h-10"/>
          </div>

          {/* Account */}
          <div
            onClick={() => {
              setActive("account");
              navigate("/account");

            }}
            style={active === "account" ? activeStyle : {}}
            className="flex flex-col items-center text-gray-700 text-xs p-1 rounded-lg"
          >
            <img src={accountIcon} alt="account" className="w-10 h-10"/>
          </div>

        </div>

      </div>

    </div>
  );
}