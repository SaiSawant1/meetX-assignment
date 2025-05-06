import { Router } from "express";
import { verifyAuth } from "../Middleware/authMiddleware.js";
import {
  createBooking,
  getBookings,
} from "../Controllers/bookingController.js";
const router = Router();

router.get("/", verifyAuth, getBookings);
router.post("/", verifyAuth, createBooking);

export default router;
