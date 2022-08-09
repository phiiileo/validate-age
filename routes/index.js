const express = require(`express`);
const rate_limit = require(`../middleware/rate_limit.js`);
const age_route = require(`./age_route.js`);
const base_route = require(`./base_route.js`);
const router = express.Router();

// Age route wrapper
router.use(`/howold`, rate_limit.rateLimit, age_route);
// Home route wrapper
router.use(`/`, base_route);

module.exports = router;
