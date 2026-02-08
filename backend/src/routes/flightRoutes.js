import express from 'express';
import {
    addFlight,
    getAllFlights,
    searchFlights
} from '../controllers/flightController.js';
import { protect } from '../middlewares/authMiddleware.js';
import { adminOnly } from '../middlewares/adminMiddleware.js';

const router = express.Router();

router.post("/add", addFlight);
router.get('/', getAllFlights);
router.get('/search', searchFlights);
router.post('/add', protect, adminOnly, addFlight);
export default router;