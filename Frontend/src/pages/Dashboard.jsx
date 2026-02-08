import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

import {
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Box,
} from "@mui/material";

import CancelIcon from "@mui/icons-material/Cancel";
import FlightIcon from "@mui/icons-material/Flight";

import PageWrapper from "../components/PageWrapper";

function Dashboard() {
  const [bookings, setBookings] = useState([]);

  // Fetch Bookings
  const fetchBookings = async () => {
    const token = localStorage.getItem("token");

    const res = await axiosInstance.get("/bookings/mybookings", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setBookings(res.data.bookings);
  };

  // Cancel Booking
  const cancelBooking = async (id) => {
    const token = localStorage.getItem("token");

    await axiosInstance.put(
      `/bookings/cancel/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Booking Cancelled ❌");
    fetchBookings();
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <PageWrapper>
      <Typography variant="h3" fontWeight="bold" textAlign="center">
        My Bookings 🎟️
      </Typography>

      {bookings.length === 0 ? (
        <Typography textAlign="center" sx={{ mt: 5, color: "gray" }}>
          No bookings yet. Book your first flight ✈️
        </Typography>
      ) : (
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {bookings.map((booking) => (
            <Grid item xs={12} md={6} key={booking._id}>
              <Card
                elevation={6}
                sx={{
                  borderRadius: 5,
                  transition: "0.3s",
                  "&:hover": { transform: "translateY(-6px)" },
                }}
              >
                <CardContent>
                  {/* Airline */}
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    color="primary"
                  >
                    {booking.flight.airline}
                  </Typography>

                  {/* Route */}
                  <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                    <FlightIcon color="action" />
                    <Typography>
                      {booking.flight.from} → {booking.flight.to}
                    </Typography>
                  </Box>

                  {/* Info */}
                  <Typography sx={{ mt: 2 }}>
                    Passengers: {booking.passengers}
                  </Typography>

                  <Typography>Total Price: ₹{booking.totalPrice}</Typography>

                  {/* Status */}
                  <Chip
                    label={booking.status}
                    color={
                      booking.status === "Booked" ? "success" : "error"
                    }
                    sx={{ mt: 2 }}
                  />

                  {/* Cancel Button */}
                  {booking.status === "Booked" && (
                    <Button
                      fullWidth
                      variant="outlined"
                      color="error"
                      startIcon={<CancelIcon />}
                      sx={{ mt: 3 }}
                      onClick={() => cancelBooking(booking._id)}
                    >
                      Cancel Booking
                    </Button>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </PageWrapper>
  );
}

export default Dashboard;
