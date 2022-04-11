const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const cloudinary = require("./routes/cloudinary");
const auth = require("./routes/auth.routes");

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

app.get("/", (req, res) => {
  res.json({ message: "Welcome to PHOTOMODE" });
});

app.use("/api/cloudinary", cloudinary);
app.use("/api/auth", auth);

require("./routes/user.routes")(app);

// require("./routes/auth.routes")(app);
// require("./routes/user.routes")(app);

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

// function initial() {
//   Role.estimatedDocumentCount((err, count) => {
//     if (!err && count === 0) {
//       new Role({
//         name: "user",
//       }).save((err) => {
//         if (err) {
//           console.log("error", err);
//         }
//         console.log("added 'user' to roles collection");
//       });
//       new Role({
//         name: "moderator",
//       }).save((err) => {
//         if (err) {
//           console.log("error", err);
//         }
//         console.log("added 'moderator' to roles collection");
//       });
//       new Role({
//         name: "admin",
//       }).save((err) => {
//         if (err) {
//           console.log("error", err);
//         }
//         console.log("added 'admin' to roles collection");
//       });
//     }
//   });
// }
