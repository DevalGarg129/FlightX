import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    flight: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Flight",
      required: true,
    },

    passengers: {
      type: Number,
      required: true,
      default: 1,
    },

    totalPrice: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["Booked", "Cancelled"],
      default: "Booked",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
