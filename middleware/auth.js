const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
require("dotenv").config();

async function authenticateToken(req, res, next) {
  try {
    // Get token from header
    const authHeader = req.header("Authorization");

    let token;
    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    } else {
      token = req.query.token || req.body.token;
    }

    if (!token) {
      console.log("No token found in request"); // Debug log
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }

    // Decode JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch REAL sequelize model instance
    const user = await User.findByPk(decoded.userId);

    if (!user) {
      console.log("User not found for userId:", decoded.userId); // Debug log
      return res.status(401).json({ message: "User not found." });
    }

    req.user = user; // ✔ real Sequelize instance
    next();
  } catch (err) {
    console.error("Auth error:", err.message);
    console.error("Full error:", err); // More detailed error log
    return res.status(403).json({ message: "Invalid token." });
  }
}

module.exports = authenticateToken;