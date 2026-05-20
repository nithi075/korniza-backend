const mongoose = require("mongoose");

const featuredSchema = new mongoose.Schema({
  items: [
    {
      title: String,
      image: String
    }
  ]
});

module.exports = mongoose.model(
  "Featured",
  featuredSchema
);
