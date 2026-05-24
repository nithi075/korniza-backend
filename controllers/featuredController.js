const Featured =
  require("../models/Featured");

/* =========================================
   ADD FEATURED
========================================= */

const addFeatured =
  async (req, res) => {

    try {

      /* =========================================
         GET FORM DATA
      ========================================= */

      const titles =
        Array.isArray(
          req.body.itemTitles
        )
          ? req.body.itemTitles
          : [req.body.itemTitles];

      const categories =
        Array.isArray(
          req.body.categories
        )
          ? req.body.categories
          : [req.body.categories];

      /* =========================================
         CREATE NEW ITEMS
      ========================================= */

      const newItems =
        req.files.map(
          (
            file,
            index
          ) => ({

            title:
              titles[index] || "",

            image:
              file.path,

            category:
              categories[index] || ""

          })
        );

      /* =========================================
         CHECK EXISTING
      ========================================= */

      let existingFeatured =
        await Featured.findOne();

      /* =========================================
         UPDATE EXISTING
      ========================================= */

      if (existingFeatured) {

        let updatedItems = [

          ...existingFeatured.items,

          ...newItems

        ];

        /* KEEP ONLY LATEST 5 */

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

          data:
            existingFeatured

        });

      }

      /* =========================================
         CREATE NEW
      ========================================= */

      const data =
        new Featured({

          items:
            newItems

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

/* =========================================
   GET FEATURED
========================================= */

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

        error:
          error.message

      });

    }

  };

module.exports = {

  addFeatured,

  getFeatured

};
