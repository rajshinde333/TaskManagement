import express from "express";
const router = express.Router();

import { userRegister, userLogin } from "../controllers/userController.js";

router.post("/login", userLogin);
router.post("/register", userRegister);

export default router;
