const express = require("express");
const router = express.Router();
const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} = require("../controllers/freelancerController");

router.use(express.json());

router.get("/", getAll);

router.get("/:id", getOne);

router.post("/", createOne);

router.patch("/:id", updateOne);

router.delete("/:id", deleteOne);

module.exports = router;
