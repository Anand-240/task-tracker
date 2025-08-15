import express from "express";
import { signup, login } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", (req, res, next) => {
  console.log("Reached /api/auth/signup route");
  next();
}, signup);
router.post("/login", (req, res, next) => {
  console.log("Reached /api/auth/login route");
  next();
}, login);

export default router;
