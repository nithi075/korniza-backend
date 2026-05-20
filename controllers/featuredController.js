const Featured =
  require("../models/Featured");

/* ================= ADD FEATURED ================= */

const addFeatured =
  async (req, res) => {

    try {

      /* CREATE NEW ITEMS */

      const newItems =
        req.files.map(
          (
            file,
            index
          ) => ({

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
            ...existingFeatured.featured,
            ...newItems
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

        existingFeatured.featured =
          updatedFeatured;

        await existingFeatured.save();

        return res.json({

          success: true,

          message:
            "Featured updated successfully",

          data:
            existingFeatured

        });
      }

      /* CREATE NEW DOCUMENT */

      const data =
        new Featured({

          featured:
            newItems

        });

      await data.save();

      res.json({

        success: true,

        message:
          "Featured added successfully",

        data

      });

    } catch (error) {

      res.status(500).json({

        success: false,

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

          success: true,

          message:
            "No featured data found",

          featured: []

        });
      }

      res.json({

        success: true,

        featured:
          data.featured

      });

    } catch (error) {

      res.status(500).json({

        success: false,

        error:
          error.message

      });
    }
  };

module.exports = {

  addFeatured,
  getFeatured

};
