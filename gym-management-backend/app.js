// src/app.js
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const packageRoutes = require("./routes/packageRoutes");
const clientRoutes = require("./routes/clientRoutes");
const trainerRoutes = require("./routes/trainerRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

// Middleware to handle CORS and JSON parsing
app.use(cors());
app.use(express.json()); // Replacing body-parser with express built-in middleware

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/packages", packageRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/trainers", trainerRoutes);
app.use("/api/dashboard", dashboardRoutes);

// Default route for testing
app.get("/", (req, res) => {
  res.send("Backend is running");
});

module.exports = app;
