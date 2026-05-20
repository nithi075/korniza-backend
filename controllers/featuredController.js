const Featured =
  require("../models/Featured");

/* ================= ADD FEATURED ================= */

const addFeatured =
  async (req, res) => {

    try {

      /* CREATE IMAGE + TITLE ARRAY */

      const newFeatured =
        req.files.map(
          (
            file,
            index
          ) => ({

            title:
              req.body.titles[index],

            image:
              `${req.protocol}://${req.get("host")}/uploads/images/${file.filename}`

          })
        );

      /* CHECK EXISTING */

      let existingFeatured =
        await Featured.findOne();

      if (
        existingFeatured
      ) {

        /* MERGE OLD + NEW */

        let updatedImages =
          [
            ...existingFeatured.images,
            ...newFeatured
          ];

        /* KEEP ONLY LATEST 5 */

        if (
          updatedImages.length >
          5
        ) {

          updatedImages =
            updatedImages.slice(
              -5
            );
        }

        /* UPDATE */

        existingFeatured.images =
          updatedImages;

        await existingFeatured.save();

        return res.json({

          success: true,

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

          images: []

        });
      }

      res.json({

        success: true,

        images:
          data.images

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
