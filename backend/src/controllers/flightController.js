import Flight from '../models/Flight.js';
/**
 * @desc Add a new flight (Admin)
 * @route POST /api/flights/add
 */
export const addFlight = async(req, res) => {
    try{
        const flight = await Flight.create(req.body);

        res.status(400).json({
            message: "Flight Added Successfully",
            flight
        });
    }catch(error){
        res.status(400).json({ error: error.message });
    }
}
/**
 * @desc Get all flights
 * @route GET /api/flights
 */

export const getAllFlights = async(req, res) => {
    try{
        const flights = await Flight.find({});
        res.json(flights);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
/**
 * @desc Search flights by from/to
 * @route GET /api/flights/search?from=Delhi&to=Mumbai
 */

export const searchFlights = async(req, res) => {
    try{
        const { from, to } = req.query;

        const flights = await Flight.find({
            from,
            to
        });
        res.json({
            message: "Flights Found",
            flights
        })
    }catch(error){
        return res.status(500).json({ error: error.message });
    }
}