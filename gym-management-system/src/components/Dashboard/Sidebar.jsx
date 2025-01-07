// src/components/Dashboard/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/packages">Packages</Link></li>
        <li><Link to="/clients">Clients</Link></li>
        <li><Link to="/trainers">Trainers</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
