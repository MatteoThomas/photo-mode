const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const User = require("./models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const path = require("path");
const { GridFsStorage } = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const crypto = require("crypto");
const multer = require("multer");

dotenv.config();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.REACT_APP_URI);
const conn = mongoose.connection;

// USER DATA //////////////////////////////////////////////////////////////////////////
app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    //BCRYPT HASHING PASSWORD BEFORE GETTING STORED IN DATABASE
    const newPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: newPassword,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate email" });
  }
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  });
  console.log(user);
  if (!user) {
    return { status: "error", error: "Invalid login" };
  }
  // BCRYPT COMPARING HASHED PASSWORD WITH USER TYPED PASSWORD
  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (isPasswordValid) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.REACT_APP_SECRET
    );
    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
});

app.get("/api/login", async (req, res) => {
  const token = req.headers["x-access-token"];

  try {
    const decoded = jwt.verify(token, process.env.REACT_APP_SECRET);
    const email = decoded.email;
    const user = await User.findOne({ email: email });

    return res.json({ status: "ok", name: user.name });
  } catch (error) {
    res.json({ status: "error", error: "invalid token!" });
  }
});

app.get("/api/quote", async (req, res) => {
  const token = req.headers["x-access-token"];

  try {
    const decoded = jwt.verify(token, process.env.REACT_APP_SECRET);
    const email = decoded.email;
    const user = await User.findOne({ email: email });

    return res.json({ status: "ok", quote: user.quote });
  } catch (error) {
    res.json({ status: "error", error: "invalid token!" });
  }
});

app.post("/api/quote", async (req, res) => {
  const token = req.headers["x-access-token"];

  try {
    const decoded = jwt.verify(token, process.env.REACT_APP_SECRET);
    const email = decoded.email;
    await User.updateOne({ email: email }, { $set: { quote: req.body.quote } });

    return res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: "error", error: "invalid token" });
  }
});

//DELETE AFTER!!!!!!!FOR COPY ONLY
// app.get("/api/login", async (req, res) => {
//   const token = req.headers["x-access-token"];

//   try {
//     const decoded = jwt.verify(token, process.env.REACT_APP_SECRET);
//     const email = decoded.email;
//     const user = await User.findOne({ email: email });

//     return res.json({ status: "ok", name: user.name });
//   } catch (error) {
//     res.json({ status: "error", error: "invalid token!" });
//   }
// });
//////////////////////////

//STORAGE ENGINE
const storage = new GridFsStorage({
  url: process.env.REACT_APP_URI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = file.originalname;
        const fileInfo = { filename: filename, bucketName: "images" };
        resolve(fileInfo);
      });
    });
  },
});

let gfs;
conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("images");
  console.log("Connection Successful");
});

const upload = multer({ storage });

app.post("/api/images", upload.single("img"), (req, res, err) => {
  res.send(req.files);
});

app.get("/api/images/:filename", (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file
    console.log(file);
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: "No file exists",
      });
    }

    // Check if image
    if (file.contentType === "image/jpeg" || file.contentType === "image/png") {
      // Read output to browser
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({
        err: "Not an image",
      });
    }
  });
});
//IMAGE STORAGE /////////////////////////////////////////////////////////////////////

// const userRouter = require("./routes/user");
// app.use("/api", userRouter);

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
