const mongoose = require("mongoose");

const featuredSchema = new mongoose.Schema({
  title: String,
  videoUrl: String,
  images: [String]
});

module.exports = mongoose.model("Featured", featuredSchema);
