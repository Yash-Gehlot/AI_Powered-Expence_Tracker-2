import User from "../models/userModel.js";

export const getLeaderboard = async (req, res) => {
  try {
    const users = await User.find()
      .select("name totalExpense")
      .sort({ totalExpense: -1 })
      .limit(50);

    const leaderboard = users.map((u, index) => ({
      rank: index + 1,
      name: u.name,
      totalAmount: u.totalExpense || 0,
    }));

    res.json({ leaderboard });
  } catch (err) {
    console.error("Leaderboard error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
