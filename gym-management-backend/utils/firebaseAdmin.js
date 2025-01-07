const admin = require("firebase-admin");
const path = require("path");

// Ensure the path is correct based on your project structure
const serviceAccount = require(path.join(__dirname, "../config/serviceAccountKey.json"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // You can remove the databaseURL if you are using Firestore
  // If needed, specify the Firestore URL like below (optional):
  // databaseURL: "https://<your-project-id>.firebaseio.com"
});

const db = admin.firestore();

module.exports = { admin, db };
