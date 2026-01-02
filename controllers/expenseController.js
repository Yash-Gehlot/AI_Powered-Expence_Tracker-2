import Expense from "../models/expenseModel.js";
import User from "../models/userModel.js";
import makeCategory from "../config/gimini-category.js";

export const addExpense = async (req, res) => {
  try {
    const { amount, category, description, note } = req.body;
    const userId = req.user._id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await Expense.create({
      amount,
      category,
      description,
      note,
      userId: userId,
    });

    user.totalExpense = user.totalExpense + Number(amount);
    await user.save();

    res.status(200).json({
      message: "Expense added successfully",
    });
  } catch (error) {
    console.error("Add expense error:", error);
    res.status(500).json({ message: "Error adding expense" });
  }
};

export const getExpenses = async (req, res) => {
  try {
    const userId = req.user._id;

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    const expenses = await Expense.find({ userId })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalCount = await Expense.countDocuments({ userId });
    const totalPages = Math.ceil(totalCount / limit);

    res.status(200).json({
      expenses: expenses,
      currentPage: page,
      totalPages,
      totalItems: totalCount,
      limit,
    });
  } catch (error) {
    console.error("Get expenses error:", error);
    res.status(500).json({ message: "Error fetching expenses" });
  }
};

export const deleteExpense = async (req, res) => {
  try {
    const expId = req.params.id;
    const userId = req.user._id;

    const expense = await Expense.findOne({
      _id: expId,
      userId,
    });

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const newTotal = Number(user.totalExpense) - Number(expense.amount);
    user.totalExpense = newTotal;
    await user.save();

    await Expense.deleteOne({ _id: expId });

    res.status(200).json({ message: "Expense deleted and total updated" });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ message: "Failed to delete expense" });
  }
};

export const suggestCategory = async (req, res) => {
  try {
    const { description } = req.body;

    if (!description || description.trim() === "") {
      return res.status(400).json({
        message: "Description is required",
        category: "",
      });
    }

    const category = await makeCategory(description);

    res.status(200).json({
      success: true,
      category: category,
    });
  } catch (error) {
    console.error("Category suggestion error:", error);
    res.status(500).json({
      message: "Error suggesting category",
      category: "other",
    });
  }
};
