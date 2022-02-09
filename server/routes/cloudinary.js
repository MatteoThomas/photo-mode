var express = require("express");
require("dotenv").config();
var router = express.Router();
const cloudinary = require("cloudinary").v2;
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

//IMAGES /////////////////////////////////////////////////////////////////////
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
  secure: true,
});

//CREATE USER FOLDER ON CLOUDINARY FROM USERNAME WHEN REGISTERING
router.post("/api/folder", async (req, res) => {
  try {
    const userFolder = await req.body.name;
    await cloudinary.api.create_folder(userFolder, {});
    res.json({ msg: "foldy!yaya" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Something went wrong with FOLDER" });
  }
});

//GET ALL IMAGES FROM ACCOUNT
router.get("/api/gallery", async (req, res) => {
  cloudinary.api.resources(function (error, result) {
    console.log(result, error);
    return res.json({ status: "ok", results: result });
  });
});

//UPLOAD IMAGE
router.post("/api/upload", async (req, res) => {
  try {
    const fileStr = await req.body.data;
    const folder = await req.body.folder;
    const name = await req.body.name;
    // console.log(folder);
    await cloudinary.uploader.upload(fileStr, {
      upload_preset: "gallery",
      folder: folder,
      public_id: name,
    });
    res.json({ msg: "yaya" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Something went wrong" });
  }
});

//GET /PHOTOMODE IMAGES FROM ACCOUNT
// router.post("/api/search", async (req, res) => {
//   const token = req.headers["x-access-token"];

//   try {
//     await User.updateOne({ $set: { search: req.body.search } });

//     return res.json({ status: "ok" });
//   } catch (error) {
//     res.json({ status: "error", error: "invalid token" });
//   }
// });

// router.get("/api/search", async (req, res) => {
//   const tag = await cloudinary.api.resources_by_tag(tag, options, callback);
//   {
//     console.log(result, error);
//     return res.json({ status: "ok", results: result });
//   }
// });

module.exports = router;
