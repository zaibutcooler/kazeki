const express = require("express");
const router = express.Router();
const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} = require("../controllers/freelanceApplicationController");

router.use(express.json());

const protectRoute = require("../middlewares/protectRoute");

router.get("/", protectRoute, getAll);

router.get("/:id", protectRoute, getOne);

router.post("/", protectRoute, createOne);

router.patch("/:id", protectRoute, updateOne);

router.delete("/:id", protectRoute, deleteOne);

module.exports = router;
