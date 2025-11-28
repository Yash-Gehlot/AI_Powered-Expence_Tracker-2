import express from "express";
import dotenv from "dotenv";
import db from "./config/db.js";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ quiet: true });

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Root route - redirect to login BEFORE serving static files
app.get("/", (req, res) => {
  res.redirect("/login/login.html");
});

// Serve static files from views folder
app.use(express.static(path.join(__dirname, "views")));

// ROUTES
import userRoutes from "./routes/userRoutes.js";
app.use("/user", userRoutes);

import expenseRoutes from "./routes/expenseRoutes.js";
app.use("/expense", expenseRoutes);

import paymentRoutes from "./routes/paymentRoutes.js";
app.use("/payment", paymentRoutes);

import premiumRoutes from "./routes/premiumRoutes.js";
app.use("/premium", premiumRoutes);

import forgotPasswordRoutes from "./routes/ForgetPassRoutes.js";
app.use("/password", forgotPasswordRoutes);

// START SERVER
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// DB SYNC
(async () => {
  try {
    await db.sync({ force: false });
  } catch (error) {
    console.log(error);
  }
})();
