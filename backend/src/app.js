import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import flightRoutes from "./routes/flightRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
const app = express();

app.use(cors());
app.use(express.json());

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/flights", flightRoutes);
app.use("/api/bookings", bookingRoutes);

app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => {
    res.send("FlightX is working");
});


export default app;
