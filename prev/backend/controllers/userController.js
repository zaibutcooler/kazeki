const Model = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const secretKey = process.env.SECRET_KEY;

const register = async (req, res) => {
  try {
    const { email, password, isClient } = req.body;
    const alreadyExists = await Model.findOne({ email });
    if (alreadyExists) {
      return res.status(400).json({ message: "Email already exists" });
    }
    console.log("passed");
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new Model({ email, password: hashedPassword, isClient });
    await newUser.save();
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Model.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email" });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Incorrect password" });
    }
    const token = jwt.sign({ userId: user._id }, secretKey, {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { register, login };
