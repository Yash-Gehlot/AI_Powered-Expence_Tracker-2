import express from "express";
const router = express.Router();
import {
  forgotPassword,
  resetPasswordPage,
  updatePassword,
} from "../controllers/ForgotPassController.js";

router.post("/forgotpassword", forgotPassword);
router.get("/resetpassword/:id", resetPasswordPage);
router.post("/updatepassword/:id", updatePassword);

export default router;
