// src/routes/trainerRoutes.js
const express = require("express");
const {
  createTrainer,
  getTrainers,
  updateTrainer,
  deleteTrainer,
} = require("../controllers/trainerController");

const router = express.Router();

// Route to create a trainer
router.post("/", createTrainer);

// Route to fetch all trainers with optional search and filters
router.get("/", getTrainers);

// Route to update a trainer by ID
router.put("/:trainerId", updateTrainer);

// Route to delete a trainer by ID
router.delete("/:trainerId", deleteTrainer);

module.exports = router;
