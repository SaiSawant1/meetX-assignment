import mongoose from "mongoose";
import { REGEX } from "../Constants/contant.js";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User name is required"],
    minLength: [2, "Length of the user name should be more than 1"],
    maxLength: [50, "Length of the user name should be less than 50"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    lowercase: true,
    trim: true,
    match: [REGEX.EMAIL, "Please Provide valid email (eg:- example@gamil.com)"],
  },
  password: {
    select: false,
    type: String,
    required: [true, "Password Required"],
    minLength: [8, "Password must be atleast 8 characters"],
  },
  phone: {
    type: String,
    required: true,
    unique: true,
    sparse: true,
    trim: true,
  },
}, {
  timestamps: true,
});

const User = mongoose.model("User", userSchema);
export default User;
