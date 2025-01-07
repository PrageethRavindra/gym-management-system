// src/routes/packageRoutes.js
const express = require("express");
const {
  createPackage,
  getPackages,
  updatePackage,
  deletePackage,
} = require("../controllers/packageController");

const router = express.Router();

// Route to create a package
router.post("/", createPackage);

// Route to fetch all packages with pagination
router.get("/", getPackages);

// Route to update a package by ID
router.put("/:packageId", updatePackage);

// Route to delete a package by ID
router.delete("/:packageId", deletePackage);

module.exports = router;
