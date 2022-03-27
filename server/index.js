const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user");
const imageRoutes = require("./routes/cloudinary");
const express = require("express");
const app = express();
const db = require("./models");
const dbConfig = require("./config/db.config");

app.use(
  cors({
    // DEVELOPMENT //NEEDS TO MATCH FRONT END
    origin: "http://localhost:3000",
    // PRODUCTION
    // origin: "https://photo-mode.herokuapp.com/",
  })
);
app.use(express.json());
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
app.use("/api/cloudinary", imageRoutes);

dotenv.config();
app.use(express.urlencoded({ extended: true }));
// console.log(process.env.NODE_ENV);
app.get("/", (req, res) => {
  res.json({ message: "Backend: Running!" });
});

const MONGO_URL = process.env.URL;

db.mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

const Role = db.role;

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'user' to roles collection");
      });
      new Role({
        name: "moderator",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'moderator' to roles collection");
      });
      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
  });
}

// const MONGO_URL = process.env.URL;

// mongoose
//   .connect(MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Photomode DB access"))
//   .catch((err) => {
//     console.log(err);
//   });

// app.use(bodyParser.json());
// // app.use("/api", userRoutes);
// app.use("/api/user", userRoutes);
// // app.use("/api/", imageRoutes);
// app.use("/api/cloudinary", imageRoutes);

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
