import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import axiosInstance from "../api/axiosInstance";

import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
  Divider,
} from "@mui/material";

import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import PageWrapper from "../components/PageWrapper";

function FlightDetails() {
  const { id } = useParams(); // Flight ID
  const navigate = useNavigate();

  const [flight, setFlight] = useState(null);

  // Fetch Single Flight
  const fetchFlightDetails = async () => {
    try {
      const res = await axiosInstance.get(`/flights/${id}`);
      setFlight(res.data);
    } catch (error) {
      alert("Flight not found ❌");
    }
  };

  useEffect(() => {
    fetchFlightDetails();
  }, []);

  if (!flight) {
    return (
      <PageWrapper>
        <Typography variant="h5" textAlign="center">
          Loading Flight Details...
        </Typography>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <Card
          elevation={8}
          sx={{
            width: 600,
            borderRadius: 5,
            p: 2,
          }}
        >
          <CardContent>
            {/* Airline */}
            <Typography variant="h4" fontWeight="bold" color="primary">
              {flight.airline} ✈️
            </Typography>

            <Divider sx={{ my: 2 }} />

            {/* Route */}
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <FlightTakeoffIcon color="action" />
              <Typography variant="h6">
                {flight.from} → {flight.to}
              </Typography>
            </Box>

            {/* Times */}
            <Typography sx={{ mt: 2 }}>
              Departure Time: <b>{flight.departureTime}</b>
            </Typography>

            <Typography>
              Arrival Time: <b>{flight.arrivalTime}</b>
            </Typography>

            {/* Seats */}
            <Chip
              icon={<AirlineSeatReclineNormalIcon />}
              label={`${flight.seatsAvailable} Seats Available`}
              color="secondary"
              sx={{ mt: 3 }}
            />

            {/* Price */}
            <Box sx={{ display: "flex", gap: 1, mt: 3 }}>
              <AttachMoneyIcon color="success" />
              <Typography variant="h5" fontWeight="bold">
                ₹{flight.price}
              </Typography>
            </Box>

            {/* Book Button */}
            <Button
              fullWidth
              variant="contained"
              size="large"
              sx={{
                mt: 4,
                py: 1.5,
                borderRadius: 3,
              }}
              onClick={() => navigate(`/booking/${flight._id}`)}
            >
              Proceed to Booking 🎟️
            </Button>
          </CardContent>
        </Card>
      </Box>
    </PageWrapper>
  );
}

export default FlightDetails;
