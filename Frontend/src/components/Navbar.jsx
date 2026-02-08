import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "white",
        borderBottom: "1px solid #eee",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            textDecoration: "none",
          }}
        >
          <FlightTakeoffIcon sx={{ color: "primary.main" }} />
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "primary.main" }}
          >
            FlightX
          </Typography>
        </Box>

        {/* Nav Links */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button component={Link} to="/flights" color="primary">
            Flights
          </Button>

          <Button component={Link} to="/dashboard" color="primary">
            Dashboard
          </Button>

          <Button component={Link} to="/login" color="primary">
            Login
          </Button>

          <Button
            component={Link}
            to="/register"
            variant="contained"
            color="secondary"
          >
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
