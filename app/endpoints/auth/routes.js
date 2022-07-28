const express = require("express");
const router = express.Router();
const { validation } = require("../../middleware");
const { signInSchema, signUpSchema } = require("./schemas");
const { signIn, signUp, logout } = require("./controllers");

router.post("/signin", validation(signInSchema), signIn);
router.post("/signup", validation(signUpSchema), signUp);
router.post("/logout", logout);

module.exports = router;
