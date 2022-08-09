import express from "express";
import base_controller from "./../controllers/base_controller.js";
const router = express.Router();

// GET: calculate age route
router.get('/', base_controller.indexRoute);

export default router;