import { ArrowLeft, Paperclip, Send } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ChatScreen() {
  const navigate = useNavigate();
  const { userId } = useParams();

  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  // FETCH MESSAGES
  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `http://localhost:5000/api/chat/${userId}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      setMessages(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // SEND MESSAGE
  const sendMessage = async () => {
    if (!text.trim()) return;

    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/chat/send",
        {
          receiver: userId,
          text,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      setText("");
      fetchMessages();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#000B17] flex flex-col">

      {/* Header */}
      <div className="flex items-center gap-4 px-4 py-4 text-white">
        <ArrowLeft className="cursor-pointer" onClick={() => navigate(-1)} />

        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="user"
          className="w-10 h-10 rounded-full object-cover"
        />

        <p className="font-medium">Unknown</p>
      </div>

      {/* Chat Container */}
      <div className="flex-1 bg-[#F5F5F5] rounded-t-3xl px-4 pt-4 pb-2 flex flex-col">

        {/* Messages */}
        <div className="flex-1 space-y-3 overflow-y-auto">

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === msg.receiver ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-2xl max-w-[70%] text-sm ${
                  msg.sender === msg.receiver
                    ? "bg-[#E5E5E5] text-black"
                    : "bg-[#0B1C2C] text-white"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

        </div>

        {/* Input Area */}
        <div className="py-3">
          <div className="flex items-center bg-[#EDEDED] rounded-full px-4 py-2">

            <Paperclip className="text-gray-500 mr-2" size={18} />

            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type your message"
              className="flex-1 bg-transparent outline-none text-sm text-black placeholder-gray-400"
            />

            <Send
              className="text-[#0B1C2C] ml-2 cursor-pointer"
              size={18}
              onClick={sendMessage}
            />

          </div>
        </div>

      </div>
    </div>
  );
}