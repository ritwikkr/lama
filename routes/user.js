import express from "express";
import { loginUser, registerUser } from "../controllers/user.js";
const router = express.Router();
import auth from "../middleware/authentication.js";

router.route("/register").post(registerUser);
router.route("/login").post(auth, loginUser);

export default router;
