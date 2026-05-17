const Testimonial = require("../models/Testimonial");

// Add testimonial
exports.addTestimonial = async (
  req,
  res
) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({
          message:
            "Image is required"
        });
    }

    const data =
      new Testimonial({
        clientName:
          req.body
            .clientName,
        review:
          req.body.review,
        imageUrl: `https://korniza-backend.onrender.com/uploads/images/${req.file.filename}`
      });

    await data.save();

    res.status(201).json({
      message:
        "Testimonial uploaded successfully",
      data
    });
  } catch (error) {
    console.log(
      error
    );

    res.status(500).json({
      error:
        error.message
    });
  }
};

// Get all testimonials
exports.getTestimonial =
  async (
    req,
    res
  ) => {
    try {
      const data =
        await Testimonial.find();

      res.json(data);
    } catch (error) {
      res.status(500).json({
        error:
          error.message
      });
    }
  };

// Delete testimonial
exports.deleteTestimonial =
  async (
    req,
    res
  ) => {
    try {
      await Testimonial.findByIdAndDelete(
        req.params.id
      );

      res.json({
        message:
          "Deleted Successfully"
      });
    } catch (error) {
      res.status(500).json({
        error:
          error.message
      });
    }
  };
