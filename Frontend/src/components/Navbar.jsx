import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.div initial={{ y: -80 }} animate={{ y: 0 }}>
      <AppBar position="sticky">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <FlightTakeoffIcon />
            FlightX
          </Typography>

          {/* Links */}
          <div>
            <Button color="inherit" component={Link} to="/flights">
              Flights
            </Button>
            <Button color="inherit" component={Link} to="/dashboard">
              Dashboard
            </Button>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/register"
              sx={{ ml: 2 }}
            >
              Register
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
}

export default Navbar;
