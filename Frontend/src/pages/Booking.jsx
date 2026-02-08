import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

import { Container, Typography, TextField, Button, Card } from "@mui/material";
import { motion } from "framer-motion";

function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [passengers, setPassengers] = useState(1);

  const handleBooking = async () => {
    const token = localStorage.getItem("token");

    await axiosInstance.post(
      "/bookings/book",
      { flightId: id, passengers },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    alert("Booking Confirmed 🎟️");
    navigate("/dashboard");
  };

  return (
    <Container sx={{ mt: 10, display: "flex", justifyContent: "center" }}>
      <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
        <Card sx={{ p: 5, borderRadius: 4, width: 400, boxShadow: 6 }}>
          <Typography variant="h4" fontWeight="bold" textAlign="center">
            Confirm Booking ✈️
          </Typography>

          <TextField
            label="Passengers"
            type="number"
            fullWidth
            sx={{ mt: 4 }}
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
          />

          <Button
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ mt: 4, py: 1.5 }}
            onClick={handleBooking}
          >
            Book Ticket 🎟️
          </Button>
        </Card>
      </motion.div>
    </Container>
  );
}

export default Booking;
