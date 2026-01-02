import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ quiet: true });

const connectDB = async () => {
  try {
    const mongoURI =
      process.env.MONGODB_URI || "mongodb://localhost:27017/expense";

    await mongoose.connect(mongoURI);

    console.log("** MongoDB Connected via Mongoose **");
  } catch (error) {
    console.error("Unable to connect to MongoDB:", error);
    process.exit(1); //terminates node
  }
};

export default connectDB;
