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

import LockIcon from "@mui/icons-material/Lock";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.post("/auth/login", formData);

      localStorage.setItem("token", res.data.token);

      alert("Login Successful ✅");
      navigate("/dashboard");
    } catch (error) {
      alert("Invalid Credentials ❌");
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
      <Card sx={{ width: 420, borderRadius: 4, boxShadow: 6 }}>
        <CardContent sx={{ p: 5 }}>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <LockIcon sx={{ fontSize: 50, color: "primary.main" }} />

            <Typography variant="h4" fontWeight="bold">
              Login
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Welcome back to FlightX ✈️
            </Typography>
          </Box>

          {/* Form */}
          <form onSubmit={handleSubmit}>
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
              size="large"
              sx={{ py: 1.3, borderRadius: 3 }}
            >
              Login 🔑
            </Button>
          </form>

          {/* Register Link */}
          <Typography textAlign="center" sx={{ mt: 3 }}>
            Don’t have an account?{" "}
            <Link to="/register" style={{ color: "#1565c0" }}>
              Register
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Login;
