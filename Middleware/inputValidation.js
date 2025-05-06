import { body } from "express-validator";

export const validateCreateUser = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Email is invalid").normalizeEmail(),
  body("password").isLength({ min: 8 }).withMessage(
    "Password must be at least 8 characters long",
  ),
  body("confirmationPassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Confirmation Password does not match Password");
    }
    return true;
  }),
];
