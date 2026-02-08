import { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Register Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axiosInstance.post("/auth/register", formData);

      alert("Registration Successful ✅");

      // Redirect to Login Page
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed ❌");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-8 rounded-xl w-[400px]"
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          Register ✈️
        </h2>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Enter Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
          required
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
          required
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Register
        </button>

        {/* Login Link */}
        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-bold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
