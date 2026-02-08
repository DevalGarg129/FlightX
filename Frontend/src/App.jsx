import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Flights from "./pages/Flights";
import Dashboard from "./pages/Dashboard";
import Booking from "./pages/Booking";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
