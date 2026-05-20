const Featured =
  require("../models/Featured");

const addFeatured =
  async (req, res) => {
    try {

      const titles =
        req.body.titles;

      const newItems =
        req.files.map(
          (file, index) => ({
            title:
              Array.isArray(titles)
                ? titles[index]
                : titles,

            image:
              `https://korniza-backend.onrender.com/uploads/images/${file.filename}`
          })
        );

      let existingFeatured =
        await Featured.findOne();

      if (existingFeatured) {

        let updatedItems = [
          ...existingFeatured.items,
          ...newItems
        ];

        // Keep latest 5
        if (
          updatedItems.length > 5
        ) {
          updatedItems =
            updatedItems.slice(-5);
        }

        existingFeatured.items =
          updatedItems;

        await existingFeatured.save();

        return res.json({
          message:
            "Featured updated successfully",

          data: existingFeatured
        });
      }

      // Create New
      const data =
        new Featured({
          items: newItems
        });

      await data.save();

      res.json({
        message:
          "Featured added successfully",

        data
      });

    } catch (error) {

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

          items: []
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
