import { Router } from "express";
import { loginUser, registerUser } from "../Controllers/userController.js";

const userRoute = Router();

userRoute.post("/register", registerUser);
userRoute.post("/login", loginUser);

export default userRoute;
