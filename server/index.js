const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");

const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/user");
const imageRoutes = require("./routes/cloudinary");

const PORT = process.env.PORT || 3001;

dotenv.config();

// app.use("/api", userRoutes);
app.use("/user", userRoutes);

// app.use("/api/", imageRoutes);
app.use("/api/cloudinary", imageRoutes);

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("/client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "/client/build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
