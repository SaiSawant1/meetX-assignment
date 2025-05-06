import Booking from "../Models/Booking.js";

export const createBooking = async (req, res) => {
  try {
    const { activityId, userId } = req.body;

    const newBooking = await Booking.create({
      user: userId,
      activity: activityId,
    });

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      data: newBooking,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

export const getBookings = async (req, res) => {
  try {
    const { userId, activityId } = req.query;

    const filter = {};
    if (userId) filter.user = userId;
    if (activityId) filter.activity = activityId;

    const bookings = await Booking.find(filter)
      .populate("user", "name email")
      .populate("activity", "title date location");

    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
