import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const forgotPasswordSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4, // Generates UUID like your old system
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const ForgotPassword = mongoose.model("ForgotPassword", forgotPasswordSchema);

export default ForgotPassword;
