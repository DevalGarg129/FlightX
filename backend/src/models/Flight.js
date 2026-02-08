import mongoose from "mongoose";

const flightSchema = new mongoose.Schema(
  {
    airline: {
      type: String,
      required: true,
    },

    from: {
      type: String,
      required: true,
    },

    to: {
      type: String,
      required: true,
    },

    departureTime: {
      type: String,
      required: true,
    },

    arrivalTime: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    seatsAvailable: {
      type: Number,
      required: true,
      default: 60,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Flight", flightSchema);
