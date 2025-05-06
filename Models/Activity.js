import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Activity title is required"],
    minLength: [2, "Length of the Activity title should be more than 1"],
    maxLength: [50, "Length of the Activity title should be less than 100"],
  },
  description: {
    type: String,
    required: [true, "Activity description is required"],
    minLength: [
      20,
      "Length of the Activity description should be more than 20",
    ],
    maxLength: [
      200,
      "Length of the Activity description should be less than 200",
    ],
  },
  location: {
    type: String,
    required: [true, "Activity location is required"],
    minLength: [20, "Length of the Activity location should be more than 20"],
    maxLength: [200, "Length of the Activity location should be less than 100"],
  },
  date: {
    type: Date,
    required: [true, "Activity date-time is required"],
  },
  time: {
    type: String, // HH:MM
    required: [true, "Activity time is required"],
  },
}, {
  timestamps: true,
});

const Activity = mongoose.model("Activity", activitySchema);

export default Activity;
