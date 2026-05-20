const mongoose =
  require("mongoose");

const featuredSchema =
  new mongoose.Schema({

    featured: [

      {
        title: {
          type: String,
          required: true
        },

        image: {
          type: String,
          required: true
        }
      }

    ]

  });

module.exports =
  mongoose.model(
    "Featured",
    featuredSchema
  );
