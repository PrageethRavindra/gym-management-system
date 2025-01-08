const express = require("express");
const {
  createClass,
  getAllClasses,
  getClassById,
  updateClass,
  deleteClass,
} = require("../controllers/classController"); // Ensure correct import

const router = express.Router();

// Route for creating a new class
router.post("/", createClass); // Ensure it's not returning an object but the actual function

// Route for getting all classes
router.get("/", getAllClasses);

// Route for getting a class by ID
router.get("/:id", getClassById);

// Route for updating a class
router.put("/:id", updateClass);

// Route for deleting a class
router.delete("/:id", deleteClass);

module.exports = router;
