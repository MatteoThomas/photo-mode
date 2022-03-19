const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/user");
const imageRoutes = require("./routes/cloudinary");

dotenv.config();
app.use(bodyParser.json());

const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Photomode DB access"))
  .catch((err) => {
    console.log(err);
  });

app.use(
  cors({
    // DEVELOPMENT
    // origin: "http://localhost:8080",
    // PRODUCTION
    origin: "https://photo-mode.herokuapp.com/",
  })
);

app.use(express.json());
// app.use("/api", userRoutes);
app.use("/api/user", userRoutes);
// app.use("/api/", imageRoutes);
app.use("/api/cloudinary", imageRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "/client/build", "index.html"));
  });
}

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
