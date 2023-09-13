const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

const secretKey = process.env.SECRET_KEY;

const protectRoute = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, secretKey);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } else {
      throw new Error("Authorization header missing");
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Not authorized" });
  }
};

module.exports = protectRoute;
