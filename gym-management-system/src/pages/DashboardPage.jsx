import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({});
  const [activeTab, setActiveTab] = useState("home"); // Added state for activeTab

  useEffect(() => {
    axios.get("http://localhost:5000/api/dashboard")
      .then((response) => {
        setDashboardData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching dashboard data:", error);
      });
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Set the active tab on click
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-20 bg-[#f0f4ff] flex flex-col items-center py-6 space-y-6">
        <div className="bg-[#d6dffe] p-3 rounded-full">
          <img src="/icons/logo.png" alt="Logo" className="h-6 w-6" />
        </div>
        <nav className="space-y-6 text-[#6b7280]">
          <Link
            to="#"
            onClick={() => handleTabClick("home")}
            className={`p-3 rounded-lg ${activeTab === "home" ? "bg-[#e6ebff] text-[#1a1a40]" : "hover:bg-[#e6ebff]"}`}
          >
            <img src="/icons/homic.png" alt="Dashboard" className="h-6 w-6" />
          </Link>
          <Link
            to="#"
            onClick={() => handleTabClick("plans")}
            className={`p-3 rounded-lg ${activeTab === "plans" ? "bg-[#e6ebff] text-[#1a1a40]" : "hover:bg-[#e6ebff]"}`}
          >
            <img src="/icons/plans-icon.png" alt="Plans" className="h-6 w-6" />
          </Link>
          <Link
            to="#"
            onClick={() => handleTabClick("trainers")}
            className={`p-3 rounded-lg ${activeTab === "trainers" ? "bg-[#e6ebff] text-[#1a1a40]" : "hover:bg-[#e6ebff]"}`}
          >
            <img src="/icons/trainees-icon.png" alt="Trainers" className="h-6 w-6" />
          </Link>
          <Link
            to="#"
            onClick={() => handleTabClick("members")}
            className={`p-3 rounded-lg ${activeTab === "members" ? "bg-[#e6ebff] text-[#1a1a40]" : "hover:bg-[#e6ebff]"}`}
          >
            <img src="/icons/members-icon.png" alt="Members" className="h-6 w-6" />
          </Link>
        </nav>
        <div className="mt-auto">
          <img
            src="/icons/profile.png"
            alt="User"
            className="h-10 w-10 rounded-full border-2 border-gray-300"
          />
          <button className="mt-4 text-[#6b7280] hover:text-[#1a1a40]">
            <i className="fas fa-power-off"></i>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-sm text-gray-500">Jan 03, 2025</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Last Month</p>
            <p className="text-lg text-green-500 font-bold">218,740.00 LKR</p>
          </div>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <p className="text-sm text-gray-500">TOTAL MEMBERS</p>
            <h2 className="text-2xl font-bold">012</h2>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <p className="text-sm text-gray-500">TOTAL TRAINERS</p>
            <h2 className="text-2xl font-bold">564</h2>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <p className="text-sm text-gray-500">ACTIVE CLASSES</p>
            <h2 className="text-2xl font-bold">021</h2>
          </div>
        </div>

        {/* Logo Section */}
        <div className="flex items-center justify-center mt-8">
          <div className="bg-[#1a1a40] p-8 rounded-lg">
            <h2 className="text-white text-3xl font-bold">MINATOR</h2>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="bg-white text-[#1a1a40] font-semibold py-3 rounded-lg shadow hover:bg-gray-100" onClick={() => handleTabClick("plans")}>
            Add Plans
          </button>
          <button className="bg-white text-[#1a1a40] font-semibold py-3 rounded-lg shadow hover:bg-gray-100" onClick={() => handleTabClick("classes")}>
            Add Classes
          </button>
          <button className="bg-white text-[#1a1a40] font-semibold py-3 rounded-lg shadow hover:bg-gray-100" onClick={() => handleTabClick("trainers")}>
            Add Trainers
          </button>
          <button className="bg-white text-[#1a1a40] font-semibold py-3 rounded-lg shadow hover:bg-gray-100" onClick={() => handleTabClick("members")}>
            Add Members
          </button>
        </div>

        {/* Dynamic Content Based on Active Tab */}
        <div className="mt-8">
          {activeTab === "home" && (
            <div>
              <h2>Welcome to the Dashboard</h2>
              {/* Add more content for the home page if needed */}
            </div>
          )}

          {activeTab === "plans" && (
            <div>
              <h2>Plans Page</h2>
              {/* Add content for the plans page */}
            </div>
          )}

          {activeTab === "trainers" && (
            <div>
              <h2>Trainers Page</h2>
              {/* Add content for the trainers page */}
            </div>
          )}

          {activeTab === "members" && (
            <div>
              <h2>Members Page</h2>
              {/* Add content for the members page */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
