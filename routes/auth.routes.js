const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

dotenv.config();

// USER DATA //////////////////////////////////////////////////////////////////////////
router.post("/signup", async (req, res) => {
  try {
    //BCRYPT HASHING PASSWORD BEFORE GETTING STORED IN DATABASE
    const newPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      username: req.body.username,
      email: req.body.email,
      password: newPassword,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: err });
  }
});

router.post("/signin", async (req, res) => {
  try {
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

      return res.json({
        status: "ok",
        id: user._id,
        username: user.username,
        email: user.email,
        bio: user.bio,
        accessToken: token,
      });
    } else {
      return res.json({ status: "error", user: false });
    }
  } catch (err) {
    res.json({ error: "/api/login failed" });
  }
});

router.get("/signin", async (req, res) => {
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

//GETS USER BIO
router.get("/bio", async (req, res) => {
  const token = req.headers["x-access-token"];

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    const email = decoded.email;
    const user = await User.findOne({ email: email });

    return res.json({ status: "ok", bio: user.bio });
  } catch (error) {
    res.json({ status: "error", error: "invalid token!" });
  }
});

//POSTS USER BIO
router.post("/editBio", async (req, res) => {
  User.updateOne(
    { email: req.body.email },
    { $set: { bio: req.body.bio } }
  ).then();
  return res.json({ status: "ok", bio: req.body.bio });
});

//GETS USER AVATAR URL FROM MONGODB - THE URL IS A CLOUDINARY FILE
router.get("/avatarUrl", async (req, res) => {
  const token = req.headers["x-access-token"];
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    const email = decoded.email;
    const user = await User.findOne({ email: email });
    return res.json({ status: "ok", avatar: user.avatar });
  } catch (error) {
    res.json({ status: "error", error: "invalid token!" });
  }
});

module.exports = router;
