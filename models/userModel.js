import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  isPremium: {
    type: Boolean,
    default: false,
  },
  totalExpense: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model("User", userSchema); //mongoose need a name to associate the schema with a name. we have to specify with mongoose.model()

export default User;
