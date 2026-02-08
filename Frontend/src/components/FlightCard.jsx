import {
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Box,
} from "@mui/material";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import FlightIcon from "@mui/icons-material/Flight";
import { Link } from "react-router-dom";

function FlightCard({ flight }) {
  return (
    <Card
      elevation={6}
      sx={{
        borderRadius: 5,
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-8px)",
        },
      }}
    >
      <CardContent>
        {/* Airline */}
        <Typography variant="h5" fontWeight="bold" color="primary">
          {flight.airline}
        </Typography>

        {/* Route */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
          <FlightIcon color="action" />
          <Typography variant="body1">
            {flight.from} → {flight.to}
          </Typography>
        </Box>

        {/* Price */}
        <Typography variant="h6" sx={{ mt: 2 }}>
          ₹{flight.price}
        </Typography>

        {/* Seats */}
        <Chip
          icon={<AirlineSeatReclineNormalIcon />}
          label={`${flight.seatsAvailable} Seats Left`}
          color="secondary"
          sx={{ mt: 2 }}
        />

        {/* Book Button */}
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, py: 1.3 }}
          component={Link}
          to={`/booking/${flight._id}`}
        >
          Book Ticket 🎟️
        </Button>
      </CardContent>
    </Card>
  );
}

export default FlightCard;
