import express from "express";
const router = express.Router();

import {
  verifyPayment,
  createOrder,
} from "../controllers/paymentController.js";
import { authenticateToken } from "../middleware/auth.js";

router.post("/create-order", authenticateToken, createOrder);
router.post("/verify", authenticateToken, verifyPayment);

export default router;
