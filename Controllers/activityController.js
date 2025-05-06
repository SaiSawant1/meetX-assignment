import Activity from "../Models/Activity.js";

export const createActivity = async (req, res) => {
  try {
    const { title, description, location, date, time } = req.body;

    const newActivity = await Activity.create({
      title,
      description,
      location,
      date,
      time,
    });

    res.status(201).json({
      success: true,
      message: "Activity created successfully",
      data: newActivity,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create activity",
      error: error.message,
    });
  }
};

export const getAllActivities = async (req, res) => {
  try {
    const activities = await Activity.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: activities.length,
      data: activities,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch activities",
      error: error.message,
    });
  }
};

export const updateActivity = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedActivity = await Activity.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updatedActivity) {
      return res.status(404).json({
        success: false,
        message: "Activity not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Activity updated successfully",
      data: updatedActivity,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to update activity",
      error: error.message,
    });
  }
};

export const deleteActivity = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedActivity = await Activity.findByIdAndDelete(id);

    if (!deletedActivity) {
      return res.status(404).json({
        success: false,
        message: "Activity not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Activity deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to delete activity",
      error: error.message,
    });
  }
};
