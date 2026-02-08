import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 3,
        borderTop: "1px solid #ddd",
        mt: 8,
        bgcolor: "white",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} FlightX ✈️ All Rights Reserved
      </Typography>
    </Box>
  );
}

export default Footer;
