import { Router } from "express";
import { loginUser, registerUser } from "../Controllers/userController.js";
import { validateCreateUser } from "../Middleware/inputValidation.js";

const userRoute = Router();

userRoute.post("/register", validateCreateUser, registerUser);
userRoute.post("/login", loginUser);

export default userRoute;
