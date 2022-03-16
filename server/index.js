const userRoutes = require("./routes/user");
const imageRoutes = require("./routes/cloudinary");

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();

app.use("/", userRoutes);
app.use("/register", userRoutes);
app.use("/login", userRoutes);

app.use("/", imageRoutes);
app.use("/gallery", imageRoutes);

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

mongoose
  .connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB has been connected"))
  .catch((err) => console.log(err));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("/*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "/client/build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
