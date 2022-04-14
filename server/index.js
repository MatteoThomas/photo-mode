const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const cloudinary = require("./routes/cloudinary");

const PORT = process.env.PORT || 8080;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "/client/build", "index.html"));
  });
}

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(
  cors({
    // DEVELOPMENT //NEEDS TO MATCH FRONT END
    // origin: "http://localhost:3000",
    // PRODUCTION
    origin: "https://photo-mode.herokuapp.com/",
  })
);

// app.use(cors(corsOptions));

app.use(express.json());
dotenv.config();
app.use(express.urlencoded({ extended: true }));

const MONGO_URL = process.env.URL;
const db = require("./models");
const Role = db.role;

db.mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    // initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

app.use("/api/cloudinary", cloudinary);
// app.use("/api/auth", auth);
require("./routes/user.routes")(app);
require("./routes/auth.routes")(app);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
