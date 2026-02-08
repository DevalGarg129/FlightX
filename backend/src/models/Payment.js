import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    booking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking",
        required: true,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    amount: {
        type: Number,
        required: true,
    },

    status: {
        type: String,
        status: ["pending", "paid", "failed"],
        default: "pending"
    },

    paymentMethod: {
        type: String,
        default: "Card"
    },
},
{timestamps: true}
);

export default mongoose.model("Payment", paymentSchema);