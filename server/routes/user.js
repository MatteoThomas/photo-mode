var express = require("express");
var router = express.Router();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const path = require("path");

dotenv.config();

router.use(bodyParser.json());
router.use(cors());
router.use(express.json());
mongoose.connect(process.env.URI);

router.get("/", function (req, res) {
  res.json({ success: true });
});

// USER DATA //////////////////////////////////////////////////////////////////////////
router.post("/api/register", async (req, res) => {
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

router.post("/api/login", async (req, res) => {
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
      process.env.SECRET
    );
    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
});

router.get("/api/login", async (req, res) => {
  const token = req.headers["x-access-token"];
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    const email = decoded.email;
    const user = await User.findOne({ email: email });

    return res.json({ status: "ok", name: user.name });
  } catch (error) {
    res.json({ status: "error", error: "invalid token!" });
  }
});

router.get("/api/quote", async (req, res) => {
  const token = req.headers["x-access-token"];

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    const email = decoded.email;
    const user = await User.findOne({ email: email });

    return res.json({ status: "ok", quote: user.quote });
  } catch (error) {
    res.json({ status: "error", error: "invalid token!" });
  }
});

router.post("/api/quote", async (req, res) => {
  const token = req.headers["x-access-token"];

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    const email = decoded.email;
    await User.updateOne({ email: email }, { $set: { quote: req.body.quote } });

    return res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: "error", error: "invalid token" });
  }
});

module.exports = router;
