const express =
  require("express");

const router =
  express.Router();

const upload =
  require("../middleware/upload");

const {
  addFeatured,
  getFeatured
} = require(
  "../controllers/featuredController"
);

router.post(
  "/add",
  upload.array("images", 5),
  addFeatured
);

router.get(
  "/all",
  getFeatured
);

module.exports = router;
