// src/server.js
require("dotenv").config();  // Ensure the .env file is loaded at the top

const app = require("./app");

// Check if the PORT variable is defined, otherwise default to 5000
const PORT = process.env.PORT || 5000;

// Start the server and listen on the defined PORT
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
