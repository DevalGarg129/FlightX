import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { motion } from "framer-motion";

function SearchBar({ onSearch }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleSearch = () => {
    onSearch(from, to);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
          flexWrap: "wrap",
        }}
      >
        <TextField
          label="From"
          variant="outlined"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />

        <TextField
          label="To"
          variant="outlined"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />

        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={handleSearch}
        >
          Search ✈️
        </Button>
      </Box>
    </motion.div>
  );
}

export default SearchBar;
