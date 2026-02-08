import { useState } from "react";
import { Box, TextField, Button, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ onSearch }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleSearch = () => {
    onSearch(from, to);
  };

  return (
    <Paper
      elevation={4}
      sx={{
        mt: 5,
        p: 3,
        borderRadius: 4,
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <TextField
        label="From"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        sx={{ width: 220 }}
      />

      <TextField
        label="To"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        sx={{ width: 220 }}
      />

      <Button
        variant="contained"
        color="secondary"
        size="large"
        startIcon={<SearchIcon />}
        onClick={handleSearch}
        sx={{
          px: 4,
          borderRadius: 3,
        }}
      >
        Search
      </Button>
    </Paper>
  );
}

export default SearchBar;
