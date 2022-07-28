import express from "express";
import { validation } from "../../middleware";
import { signInSchema, signUpSchema } from "./schemas";
import { signIn, signUp, logout } from "./controllers";

const router = express.Router();

router.post("/signin", validation(signInSchema), signIn);
router.post("/signup", validation(signUpSchema), signUp);
router.post("/logout", logout);

export default router;
