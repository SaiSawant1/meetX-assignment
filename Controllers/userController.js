import { UserService } from "../Services/userService.js";
import jwt from "jsonwebtoken";

const userService = new UserService();

export const registerUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const user = await userService.loginUser(req.body);

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    res
      .header("Authorization", `Bearer ${token}`)
      .status(200)
      .json({
        success: true,
        message: "Login successful",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
        },
      });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
