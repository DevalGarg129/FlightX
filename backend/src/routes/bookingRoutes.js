import express from "express";
import {
  bookFlight,
  getMyBookings,
  cancelBooking,
} from "../controllers/bookingController.js";

import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Book a flight
router.post("/book", protect, bookFlight);

// Get logged-in user bookings
router.get("/mybookings", protect, getMyBookings);

// Cancel booking
router.put("/cancel/:id", protect, cancelBooking);

export default router;
