const express = require("express");
const base_controller = require("./../controllers/base_controller.js");
const router = express.Router();

// GET: calculate age route
router.get("/", base_controller.indexRoute);

export default router;