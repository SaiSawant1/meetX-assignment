import bcrypt from "bcryptjs";
import User from "../Models/User.js";
export class UserService {
  async createUser(data) {
    const { name, email, password, confirmationPassword, phone } = data;

    if (!name || !email || !password || !confirmationPassword) {
      throw Error("Fields Missing");
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw Error("User alredy exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
    });
    newUser.password = undefined;
    return newUser;
  }

  async loginUser(data) {
    const { email, password } = data;

    if (!email || !password) {
      throw Error("Email and password are required");
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      throw Error("Invalid credentials");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw Error("Please Enter Correct Password");
    }

    return user;
  }
}
