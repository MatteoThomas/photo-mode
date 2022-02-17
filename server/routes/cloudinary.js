var express = require("express");
require("dotenv").config();
var router = express.Router();
const cloudinary = require("cloudinary").v2;

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
    // console.log(userFolder);
    await cloudinary.api.create_folder(userFolder, {});
    res.json({ msg: "foldy!yaya" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Something went wrong with FOLDER" });
  }
});

//GET ALL IMAGES FROM ALL FOLDERS
router.get("/api/gallery", async (req, res) => {
  cloudinary.search
    .expression()
    .execute()
    .then((result) => res.json({ status: "ok", results: result }));
});

//GET ALL IMAGES FROM ALL FOLDERS
router.get("/api/cloudUser", async (req, res) => {
  cloudinary.search
    .expression()
    .execute()
    .then((result) => res.json({ status: "ok", results: result }));
});

//GET ALL USER IMAGES FROM USER FOLDER
router.get("/api/usergallery", async (req, res) => {
  const folderSearch = req.query.folderData;
  cloudinary.search
    .expression(`folder:${folderSearch}`)
    .execute()
    .then((result) => res.json({ status: "ok", results: result }));
});

// https://api.cloudinary.com/v1_1/proj3/image/upload
//UPLOAD IMAGE
// router.post(
//   "https://api.cloudinary.com/v1_1/proj3/image/upload",
//   async (req, res) => {
//     try {
//       const fileStr = await req.body.data;
//       const name = await req.body.name;
//       const tag = await req.body.tag;
//       const folder = await req.body.folder;

//       await cloudinary.uploader.upload(fileStr, {
//         upload_preset: "gallery",
//         public_id: name,
//         tags: tag,
//         folder: folder,
//       });

//       res.json({ msg: "yaya" });
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ err: "Something went wrong" });
//     }
//   }
// );

module.exports = router;
