import { Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/Searchbar";

function Home() {
  const navigate = useNavigate();

  const handleSearch = (from, to) => {
    navigate(`/flights?from=${from}&to=${to}`);
  };

  return (
    <Container sx={{ textAlign: "center", mt: 10 }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h2" fontWeight="bold" color="primary">
          Book Flights Smarter ✈️
        </Typography>

        <Typography variant="h6" sx={{ mt: 2, color: "gray" }}>
          Search flights, book tickets, and manage trips easily with FlightX.
        </Typography>

        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} />
      </motion.div>
    </Container>
  );
}

export default Home;
