import express from "express";
import {
  signup,
  login,
  getUserDetails,
} from "../controllers/userController.js";
import { authenticateToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/details", authenticateToken, getUserDetails);

export default router;
