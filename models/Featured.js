const mongoose =
  require("mongoose");

const featuredSchema =
  new mongoose.Schema({

    videoUrl: String,

    images: [

      {
        title: {
          type: String
        },

        image: {
          type: String
        }
      }

    ]

  });

module.exports =
  mongoose.model(
    "Featured",
    featuredSchema
  );
