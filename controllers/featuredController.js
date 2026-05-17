const Featured =
  require("../models/Featured");

const addFeatured =
  async (req, res) => {
    try {

      /* CHECK FILES */

      if (!req.files || req.files.length === 0) {
        return res.status(400).json({
          message: "No images uploaded"
        });
      }

      /* CLOUDINARY IMAGE URLS */

      const newImageUrls =
        req.files.map(
          (file) => file.path
        );

      /* CHECK EXISTING DATA */

      let existingFeatured =
        await Featured.findOne();

      if (existingFeatured) {

        /* KEEP OLD IMAGES */

        let updatedImages = [
          ...existingFeatured.images,
          ...newImageUrls
        ];

        /* KEEP ONLY LATEST 5 */

        if (updatedImages.length > 5) {
          updatedImages =
            updatedImages.slice(-5);
        }

        /* UPDATE */

        existingFeatured.title =
          req.body.title;

        existingFeatured.images =
          updatedImages;

        await existingFeatured.save();

        return res.json({
          message:
            "Featured updated successfully",

          data: existingFeatured
        });
      }

      /* CREATE NEW */

      const data =
        new Featured({
          title: req.body.title,

          images: newImageUrls
        });

      await data.save();

      res.json({
        message:
          "Featured added successfully",

        data
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        error: error.message
      });

    }
  };

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
        error: error.message
      });

    }
  };

module.exports = {
  addFeatured,
  getFeatured
};
