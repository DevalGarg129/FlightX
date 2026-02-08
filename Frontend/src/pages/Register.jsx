import { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useNavigate, Link } from "react-router-dom";

import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";

import PersonAddIcon from "@mui/icons-material/PersonAdd";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axiosInstance.post("/auth/register", formData);

      alert("Registration Successful ✅");
      navigate("/login");
    } catch (error) {
      alert("Registration Failed ❌");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f5f7fb",
      }}
    >
      <Card sx={{ width: 450, borderRadius: 4, boxShadow: 6 }}>
        <CardContent sx={{ p: 5 }}>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <PersonAddIcon sx={{ fontSize: 55, color: "secondary.main" }} />

            <Typography variant="h4" fontWeight="bold">
              Register
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Create your FlightX account ✈️
            </Typography>
          </Box>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <TextField
              label="Full Name"
              name="name"
              fullWidth
              required
              sx={{ mb: 3 }}
              value={formData.name}
              onChange={handleChange}
            />

            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              required
              sx={{ mb: 3 }}
              value={formData.email}
              onChange={handleChange}
            />

            <TextField
              label="Password"
              name="password"
              type="password"
              fullWidth
              required
              sx={{ mb: 3 }}
              value={formData.password}
              onChange={handleChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              size="large"
              sx={{ py: 1.3, borderRadius: 3 }}
            >
              Register 🚀
            </Button>
          </form>

          {/* Login Link */}
          <Typography textAlign="center" sx={{ mt: 3 }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#1565c0" }}>
              Login
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Register;
