import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Flights() {
  const [flights, setFlights] = useState([]);

  const fetchFlights = async (from = "", to = "") => {
    let url = "/flights";

    if (from && to) {
      url = `/flights/search?from=${from}&to=${to}`;
      const res = await axiosInstance.get(url);
      setFlights(res.data.flights);
    } else {
      const res = await axiosInstance.get(url);
      setFlights(res.data);
    }
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  return (
    <Container sx={{ mt: 6 }}>
      <Typography variant="h3" fontWeight="bold" textAlign="center">
        Available Flights ✈️
      </Typography>

      {/* Search */}
      <SearchBar onSearch={fetchFlights} />

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {flights.map((flight) => (
          <Grid item xs={12} md={4} key={flight._id}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card sx={{ borderRadius: 4, boxShadow: 5 }}>
                <CardContent>
                  <Typography variant="h5" fontWeight="bold" color="primary">
                    {flight.airline}
                  </Typography>

                  <Typography sx={{ mt: 1 }}>
                    {flight.from} → {flight.to}
                  </Typography>

                  <Typography sx={{ mt: 1 }}>
                    Price: ₹{flight.price}
                  </Typography>

                  <Typography>
                    Seats Left: {flight.seatsAvailable}
                  </Typography>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2 }}
                    component={Link}
                    to={`/booking/${flight._id}`}
                  >
                    Book Now 🎟️
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Flights;
