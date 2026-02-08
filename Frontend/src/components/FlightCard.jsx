import { Link } from "react-router-dom";

function FlightCard({ flight }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300">
      <h3 className="text-2xl font-bold text-blue-600 mb-2">
        {flight.airline}
      </h3>

      <p className="text-gray-700 text-lg font-medium">
        {flight.from} ✈️ {flight.to}
      </p>

      <div className="mt-3 text-gray-600 space-y-1">
        <p>Departure: {flight.departureTime}</p>
        <p>Arrival: {flight.arrivalTime}</p>
        <p className="font-semibold text-black">
          Price: ₹{flight.price}
        </p>
        <p>Seats Left: {flight.seatsAvailable}</p>
      </div>

      <Link
        to={`/booking/${flight._id}`}
        className="block mt-5 text-center bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700"
      >
        Book Now 🎟️
      </Link>
    </div>
  );
}

export default FlightCard;
