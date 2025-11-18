const express = require("express");
const router = express.Router();
const {
  addExpense,
  getExpenses,
  deleteExpense,
} = require("../controllers/expenseController");
const authenticateToken = require("../middleware/auth");

router.post("/addExpense", authenticateToken, addExpense);
router.get("/getExpense", authenticateToken, getExpenses);
router.delete("/deleteExpense/:id", authenticateToken, deleteExpense);

module.exports = router;
