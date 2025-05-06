import { Router } from "express";
import {
  createActivity,
  deleteActivity,
  getAllActivities,
  updateActivity,
} from "../Controllers/activityController.js";
import { verifyAuth } from "../Middleware/authMiddleware.js";

const router = Router();

router.get("/", getAllActivities);
router.post("/", verifyAuth, createActivity);
router.patch("/:id", verifyAuth, updateActivity);
router.delete("/:id", verifyAuth, deleteActivity);

export default router;

