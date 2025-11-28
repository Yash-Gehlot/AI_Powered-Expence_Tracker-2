import express from "express";
const router = express.Router();

import { getLeaderboard } from "../controllers/premiumController.js";

import {authenticateToken} from "../middleware/auth.js";

router.get("/leaderboard", authenticateToken, getLeaderboard);

export default router;
