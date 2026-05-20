const Featured =
  require("../models/Featured");

/* ================= ADD FEATURED ================= */

const addFeatured =
  async (req, res) => {

    try {

      /* CREATE IMAGE + TITLE */

      const newFeatured =
        req.files.map(
          (file, index) => ({

            title:
              req.body.titles[index],

            image:
              `https://korniza-backend.onrender.com/uploads/images/${file.filename}`

          })
        );

      /* CHECK EXISTING */

      let existingFeatured =
        await Featured.findOne();

      if (
        existingFeatured
      ) {

        /* MERGE OLD + NEW */

        let updatedFeatured =
          [
            ...existingFeatured.images,
            ...newFeatured
          ];

        /* KEEP ONLY LATEST 5 */

        if (
          updatedFeatured.length >
          5
        ) {

          updatedFeatured =
            updatedFeatured.slice(
              -5
            );
        }

        /* UPDATE */

        existingFeatured.images =
          updatedFeatured;

        await existingFeatured.save();

        return res.json({

          message:
            "Featured updated successfully",

          data:
            existingFeatured

        });
      }

      /* CREATE NEW */

      const data =
        new Featured({

          images:
            newFeatured

        });

      await data.save();

      res.json({

        message:
          "Featured added successfully",

        data

      });

    } catch (error) {

      res.status(500).json({

        error:
          error.message

      });
    }
  };

/* ================= GET FEATURED ================= */

const getFeatured =
  async (req, res) => {

    try {

      const data =
        await Featured.findOne();

      if (!data) {

        return res.json({

          message:
            "No featured data found",

          images: []

        });
      }

      res.json(data);

    } catch (error) {

      res.status(500).json({

        error:
          error.message

      });
    }
  };

module.exports = {

  addFeatured,
  getFeatured

};
