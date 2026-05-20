import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import SearchPage from "./pages/SearchPage";
import Messages from "./pages/Messages";
import AddCar from "./pages/AddCar";
import Account from "./pages/Account";
import Sell from "./pages/Sell";
import Rent from "./pages/Rent";
import PriceDetails from "./pages/PriceDetails";
import UploadMedia from "./pages/UploadMedia";
import AdvancedOptions from "./pages/AdvancedOptions";
import CarDetails from "./pages/CarDetails";
import RentingDetails from "./pages/RentingDetails";
import Settings from "./pages/Settings";
import ChatScreen from "./pages/ChatScreen";

export default function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/addcar" element={<AddCar />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/account" element={<Account />} />
        <Route path="/sell-car" element={<Sell />} />
        <Route path="/rent-car" element={<Rent />} />
        <Route path="/price-details" element={<PriceDetails />} />
        <Route path="/upload-media" element={<UploadMedia />} />
        <Route path="/advanced-options" element={<AdvancedOptions />} />
        <Route path="/car-details" element={<CarDetails />} />
        <Route path="/renting-details" element={<RentingDetails />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/chat" element={<ChatScreen />} />
        <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
      </Routes>
   
  );
}