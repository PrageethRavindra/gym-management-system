// src/routes/clientRoutes.js
const express = require("express");
const {
  createClient,
  getClients,
  updateClient,
  deleteClient,
} = require("../controllers/clientController");

const router = express.Router();

// Route to create a client
router.post("/", createClient);

// Route to fetch all clients with optional search and filters
router.get("/", getClients);

// Route to update a client by ID
router.put("/:clientId", updateClient);

// Route to delete a client by ID
router.delete("/:clientId", deleteClient);

module.exports = router;
