import mongoose from "mongoose";

const connectToDatabase = async () => {
  if (mongoose.connections[0].readyState) {
    // Already connected
    return;
  }

  const dbUri = process.env.MONGODB_URI;
  if (!dbUri) {
    throw new Error("MongoDB URI is not provided in the .env file");
  }

  try {
    await mongoose.connect(dbUri);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
    throw error;
  }
};

export default connectToDatabase;
