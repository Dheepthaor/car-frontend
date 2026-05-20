import { useNavigate } from "react-router-dom";
import profileImg from "../assets/icons/profile.png"
import editIcon from "../assets/icons/edit.png";

import backIcon from "../assets/icons/arrow.png";
import menuIcon from "../assets/icons/menu.png";

import accountIcon from "../assets/icons/account.png";
import verifyIcon from "../assets/icons/verify.png";
import editProfileIcon from "../assets/icons/editProfile.png";
import outgoingIcon from "../assets/icons/outgoing.png";

import languageIcon from "../assets/icons/language.png";

import helpIcon from "../assets/icons/help.png";
import feedbackIcon from "../assets/icons/feedback.png";
import alertIcon from "../assets/icons/alert.png";
import shareIcon from "../assets/icons/share.png";


export default function Settings() {
  const navigate = useNavigate();
   const handleLogout = () => {
  // clear stored data
  localStorage.removeItem("token");   // if you store token
  localStorage.removeItem("user");    // optional

  // navigate to login page
  navigate("/login");
};
  const Item = ({ icon, title }) => (
    <div className="flex items-center justify-between py-4 border-b border-gray-200">
      <div className="flex items-center gap-4">
        <img src={icon} alt="" className="w-5 h-5" />
        <p className="text-sm text-gray-800">{title}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F7F7F7] flex justify-center">

      {/* MAIN CONTAINER */}
    <div className="w-full max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1300px] px-4 sm:px-6 md:px-8 py-6">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <button onClick={() => navigate(-1)}>
            <img src={backIcon} className="w-5 h-5" />
          </button>

          <div></div>

          <img src={menuIcon} className="w-5 h-5" />
        </div>

        {/* PROFILE */}
        <div className="flex items-center gap-4 mb-6">

          <div className="relative">
            <img
              src={profileImg}
              className="w-14 h-14 rounded-lg object-cover"
            />

            <img
              src={editIcon}
              className="w-6 h-6 absolute -bottom-1 -right-1"
            />
          </div>

          <div>
            <h2 className="font-semibold text-sm">James Robert</h2>
            <p className="text-xs text-gray-500">Individual profile</p>
          </div>

        </div>

        <div className="border-b mb-6"></div>

        {/* ACCOUNT SETTINGS */}
        <p className="text-xs text-gray-400 mb-3">Account settings</p>

        <Item icon={accountIcon} title="Account Settings" />
        <Item icon={verifyIcon} title="Request Verification" />
        <Item icon={editProfileIcon} title="Edit Profile" />
        <Item icon={outgoingIcon} title="Manage Outgoing Request" />

        {/* GENERAL */}
        <p className="text-xs text-gray-400 mt-6 mb-3">General</p>

        <Item icon={languageIcon} title="Language" />

        {/* SUPPORT */}
        <p className="text-xs text-gray-400 mt-6 mb-3">Support</p>

        <Item icon={helpIcon} title="Help" />
        <Item icon={feedbackIcon} title="Feedback" />
        <Item icon={alertIcon} title="Request a feature" />
        <Item icon={shareIcon} title="Share this App" />
    


        {/* LOGOUT BUTTON */}
       <button
  onClick={handleLogout}
  className="w-full bg-[#001C35] text-white py-3 rounded-lg mt-8"
>
  Log Out
</button>

      </div>
    </div>
  );
}