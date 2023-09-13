const Model = require("../models/Client");

const getAll = async (req, res) => {
  try {
    const items = await Model.find();
    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getOne = async (req, res) => {
  try {
    const item = await Model.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const createOne = async (req, res) => {
  const {
    firstName,
    lastName,
    bio,
    bod,
    user,
    organization,
    organizationLink,
    contactLink,
    photo,
  } = req.body;

  try {
    const item = new Model({
      firstName,
      lastName,
      bio,
      bod,
      user,
      organization,
      organizationLink,
      contactLink,
      photo,
    });
    const savedItem = await item.save();
    res.status(200).json(savedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateOne = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      bio,
      bod,
      user,
      organization,
      organizationLink,
      contactLink,
      photo,
    } = req.body;
    const item = await Model.findByIdAndUpdate(
      req.params.id,
      {
        firstName,
        lastName,
        bio,
        bod,
        user,
        organization,
        organizationLink,
        contactLink,
        photo,
      },
      { new: true }
    );
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteOne = async (req, res) => {
  try {
    const item = await Model.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
};
