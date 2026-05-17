const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

const connectDB = require("./config/db");

dotenv.config();

const app = express();

/* ================= DATABASE ================= */

connectDB();

/* ================= MIDDLEWARE ================= */

app.use(cors());

app.use(express.json());

/* ================= STATIC FILE ACCESS ================= */

app.use(
  "/uploads",
  express.static(
    path.join(__dirname, "uploads")
  )
);

/* ================= ROUTES ================= */

app.use(
  "/gallery",
  require("./routes/galleryRoutes")
);

app.use(
  "/instagram",
  require("./routes/instagramRoutes")
);

app.use(
  "/featured",
  require("./routes/featuredRoutes")
);

app.use(
  "/testimonial",
  require("./routes/testimonialRoutes")
);

/* ================= TEST ROUTE ================= */

app.get("/", (req, res) => {
  res.send("API Running...");
});

/* ================= SERVER ================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});