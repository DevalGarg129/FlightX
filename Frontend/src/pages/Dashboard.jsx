import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

function Dashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const token = localStorage.getItem("token");

      const res = await axiosInstance.get("/bookings/mybookings", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBookings(res.data.bookings);
    };

    fetchBookings();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">
        My Bookings 🎟️
      </h2>

      {bookings.length === 0 ? (
        <p className="text-center text-gray-600">No bookings yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-2xl font-bold text-blue-600">
                {booking.flight.airline}
              </h3>

              <p className="text-gray-700 text-lg">
                {booking.flight.from} → {booking.flight.to}
              </p>

              <p className="mt-2">Passengers: {booking.passengers}</p>
              <p>Total: ₹{booking.totalPrice}</p>

              <p className="font-semibold mt-2">
                Status:{" "}
                <span className="text-green-600">{booking.status}</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
