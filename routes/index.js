import express from "express";
import rate_limit from "../middleware/rate_limit.js";
import age_route from './age_route.js';
import base_route from './base_route.js';

const router = express.Router();

// Age route wrapper
router.use('/howold', rate_limit.rateLimit, age_route);
// Home route wrapper
router.use('/', base_route);

export default router;
