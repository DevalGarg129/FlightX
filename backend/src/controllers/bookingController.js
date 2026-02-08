import Booking from "../models/Booking.js";
import Flight from "../models/Flight.js";

/**
 * @desc Book a Flight
 * @route POST /api/bookings/book
 * @access Private (User)
 */
export const bookFlight = async (req, res) => {
  try {
    const { flightId, passengers } = req.body;

    // Find flight
    const flight = await Flight.findById(flightId);

    if (!flight) {
      return res.status(404).json({ message: "Flight not found" });
    }

    // Check seat availability
    if (flight.seatsAvailable < passengers) {
      return res.status(400).json({
        message: "Not enough seats available",
      });
    }

    // Calculate total price
    const totalPrice = passengers * flight.price;

    // Create booking
    const booking = await Booking.create({
      user: req.user._id,
      flight: flightId,
      passengers,
      totalPrice,
    });

    // Reduce seats
    flight.seatsAvailable -= passengers;
    await flight.save();

    res.status(201).json({
      message: "Flight booked successfully 🎟️",
      booking,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  await sendEmail(
    req.user.email,
    "Flight Booking Confirmed ✈️",
    `Your booking is confirmed!\nBooking ID: ${booking._id}\nPassengers: ${passengers}\nTotal Price: ₹${totalPrice}`,
  );
};

/**
 * @desc Get Logged-in User Bookings
 * @route GET /api/bookings/mybookings
 * @access Private
 */
export const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id })
      .populate("flight")
      .sort({ createdAt: -1 });

    res.json({
      message: "Your bookings fetched successfully ✅",
      bookings,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @desc Cancel Booking
 * @route PUT /api/bookings/cancel/:id
 * @access Private
 */
export const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    // Only owner can cancel
    if (booking.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    // Restore seats
    const flight = await Flight.findById(booking.flight);
    flight.seatsAvailable += booking.passengers;
    await flight.save();

    // Update booking status
    booking.status = "Cancelled";
    await booking.save();

    res.json({
      message: "Booking cancelled successfully ❌",
      booking,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
