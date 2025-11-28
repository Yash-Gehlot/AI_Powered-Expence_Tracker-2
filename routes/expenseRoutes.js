import express from "express";
const router = express.Router();
import {
  addExpense,
  getExpenses,
  deleteExpense,
  suggestCategory,
} from "../controllers/expenseController.js";
import { authenticateToken } from "../middleware/auth.js";

router.post("/addExpense", authenticateToken, addExpense);
router.get("/getExpense", authenticateToken, getExpenses);
router.delete("/deleteExpense/:id", authenticateToken, deleteExpense);
router.post("/suggestCategory", authenticateToken, suggestCategory);

export default router;
