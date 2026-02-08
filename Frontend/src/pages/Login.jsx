import { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.post("/auth/login", formData);

      alert("Login Successful ✅");

      // Save token
      localStorage.setItem("token", res.data.token);

      // Redirect dashboard
      navigate("/dashboard");
    } catch (error) {
      alert("Invalid Email or Password ❌");
    }
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-6 rounded-xl w-96"
      >
        <h2 className="text-2xl font-bold mb-4">Login 🔑</h2>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
