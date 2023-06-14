const express = require("express");
const router = express.Router();
const { login, register, logout } = [];

router.post("/login", login);

router.post("/logout", logout);

router.post("/register", register);

module.exports = router;
