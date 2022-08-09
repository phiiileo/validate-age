const express = require(`express`);
const age_controller = require(`./../controllers/age_controller.js`);
const router = express.Router();

// GET: calculate age route
router.get(`/`, age_controller.calculateAge);

module.exports = router;
