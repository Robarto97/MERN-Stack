const express = require("express");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");
const requireAuth = require('../middleware/requireAuth')

const router = express.Router();

// require auth for routes
router.use(requireAuth)

// GET all workouts
router.get("/", getWorkouts);

// Get single workout
router.get("/:id", getWorkout);

// Post a new workout
router.post("/", createWorkout);

// Delete a new workout
router.delete("/:id", deleteWorkout);

// Update a new workout
router.patch("/:id", updateWorkout);

module.exports = router;
