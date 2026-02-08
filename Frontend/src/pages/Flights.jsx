import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

import { Typography, Grid } from "@mui/material";
import PageWrapper from "../components/PageWrapper";
import FlightCard from "../components/FlightCard";
import SearchBar from "../components/Searchbar";

function Flights() {
  const [flights, setFlights] = useState([]);

  const fetchFlights = async (from = "", to = "") => {
    if (from && to) {
      const res = await axiosInstance.get(
        `/flights/search?from=${from}&to=${to}`
      );
      setFlights(res.data.flights);
    } else {
      const res = await axiosInstance.get("/flights");
      setFlights(res.data);
    }
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  return (
    <PageWrapper>
      <Typography variant="h3" fontWeight="bold" textAlign="center">
        Available Flights ✈️
      </Typography>

      <SearchBar onSearch={fetchFlights} />

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {flights.map((flight) => (
          <Grid item xs={12} md={4} key={flight._id}>
            <FlightCard flight={flight} />
          </Grid>
        ))}
      </Grid>
    </PageWrapper>
  );
}

export default Flights;
