const mongoose =
  require("mongoose");

const featuredSchema =
  new mongoose.Schema({

    videoUrl: String,

    images: [

      {
        title: String,

        image: String
      }

    ]

  });

module.exports =
  mongoose.model(
    "Featured",
    featuredSchema
  );
