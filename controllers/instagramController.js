const Instagram = require("../models/Instagram");

const addInstagram = async (req, res) => {
  try {
    const data = new Instagram({
      title: req.body.title,
      postLink: req.body.postLink,
      imageUrl: `http://localhost:5000/uploads/images/${req.file.filename}`
    });

    await data.save();
    res.json(data);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getInstagram = async (req, res) => {
  try {
    const data = await Instagram.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteInstagram = async (req, res) => {
  try {
    await Instagram.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addInstagram,
  getInstagram,
  deleteInstagram
};