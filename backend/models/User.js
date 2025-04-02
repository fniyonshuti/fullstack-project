import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "user","employer"], default: "user" }, 
});

// Define the model and make sure the model name is "User"
export default mongoose.model("User", userSchema);  // "User" is the model name
