const Gallery = require("../models/Gallery");

const addGallery = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.file);

    if (!req.file) {
      return res.status(400).json({
        message: "Image file is required"
      });
    }

    const data = new Gallery({
      title: req.body.title,
      category: req.body.category,
      imageUrl: `http://localhost:5000/uploads/images/${req.file.filename}`
    });

    await data.save();

    res.status(201).json({
      message:
        "Gallery uploaded successfully",
      data
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.message
    });
  }
};

const getGallery = async (req, res) => {
  try {
    const data = await Gallery.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

const deleteGallery = async (req, res) => {
  try {
    await Gallery.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

module.exports = {
  addGallery,
  getGallery,
  deleteGallery
};