const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const cloudinary = require("./routes/cloudinary");
const auth = require("./routes/auth.routes");

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;

const db = require("./models");

db.mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

app.use(
  cors({
    // DEVELOPMENT //NEEDS TO MATCH FRONT END
    origin: "http://localhost:3000",
    // PRODUCTION
    // origin: "https://photo-mode.herokuapp.com/",
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/cloudinary", cloudinary);
app.use("/api/auth", auth);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
  });
}

app.listen(process.env.PORT || 8080, () => {
  console.log("Server running");
});
