import express from "express";
import age_controller from "./../controllers/age_controller.js";
const router = express.Router();

// GET: calculate age route
router.get('/', age_controller.calculateAge);

export default router;