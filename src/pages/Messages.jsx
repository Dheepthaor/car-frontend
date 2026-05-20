import { useState, useEffect } from "react";
import BottomNavbar from "../components/BottomNavbar";
import emptyMessages from "../assets/icons/messageEmpty.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Messages() {
  const [activeTab, setActiveTab] = useState("all");
  const [chats, setChats] = useState([]);
  const navigate = useNavigate();

  const fetchChats = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("https://car-backend-ofpj.onrender.com/api/chat/list", {
        headers: {
          Authorization: token,
        },
      });

      setChats(res.data);
    } catch (error) {
      console.log(error);
    }
  };
 useEffect(() => {
    fetchChats();
  }, []);
  return (
    <div className="min-h-screen bg-[#000B17] text-white flex flex-col">

      <div className="flex-1 w-full max-w-[1300px] px-4 md:px-8 pt-8 pb-24 mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">

          <button className="text-2xl">☰</button>

          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
            Messages
          </h1>

          <div className="w-6"></div>

        </div>

        {/* Tabs */}
        <div className="flex gap-8 text-gray-400 border-b border-gray-600 mb-10 text-sm sm:text-base">
          <button
            onClick={() => setActiveTab("all")}
            className={`pb-2 ${
              activeTab === "all"
                ? "text-white border-b-2 border-white"
                : "hover:text-white"
            }`}
          >
            All Chats
          </button>

          <button
            onClick={() => setActiveTab("buying")}
            className={`pb-2 ${
              activeTab === "buying"
                ? "text-white border-b-2 border-white"
                : "hover:text-white"
            }`}
          >
            Buying
          </button>

          <button
            onClick={() => setActiveTab("selling")}
            className={`pb-2 ${
              activeTab === "selling"
                ? "text-white border-b-2 border-white"
                : "hover:text-white"
            }`}
          >
            Selling
          </button>

        </div>

        {/* All Chats */}
        {activeTab === "all" && (
          <div>

            {chats.length === 0 ? (

              <div className="flex flex-col items-center justify-center h-[60vh] text-center">

                <img
                  src={emptyMessages}
                  alt="No Messages"
                  className="w-32 sm:w-40 md:w-48 object-contain mb-4"
                />

                <p className="text-gray-400 text-sm sm:text-base tracking-wide">
                  Your Messages Will Appear Here
                </p>

              </div>

            ) : (

              chats.map((chat, index) => (
                <div
                  key={index}
                  onClick={() => navigate(`/chat/${chat.userId}`)}
                  className="flex items-center justify-between py-5 border-b border-gray-700 cursor-pointer"
                >

                  <div className="flex items-center gap-4">

                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="user"
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
                    />

                    <div>
                      <p className="font-medium text-sm md:text-base">
                        {chat.name}
                      </p>

                      <p className="text-gray-400 text-xs md:text-sm">
                        {chat.lastMessage}
                      </p>
                    </div>

                  </div>

                  <p className="text-gray-400 text-xs md:text-sm">
                    {chat.time
                      ? new Date(chat.time).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : ""}
                  </p>

                </div>
              ))

            )}

          </div>
        )}

        {/* Buying / Selling (UNCHANGED UI) */}
        {(activeTab === "buying" || activeTab === "selling") && (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center">

            <img
              src={emptyMessages}
              alt="No Messages"
              className="w-32 sm:w-40 md:w-48 object-contain mb-4"
            />

            <p className="text-gray-400 text-sm sm:text-base tracking-wide">
              Your Messages Will Appear Here
            </p>

          </div>
        )}

      </div>

      <BottomNavbar />

    </div>
  );
}