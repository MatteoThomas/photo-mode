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

//GET ALL IMAGES FROM ALL FOLDERS
router.get("/api/gallery", async (req, res) => {
  cloudinary.search
    .expression("-avatar")
    .execute()
    .then((result) => res.json({ status: "ok", results: result }));
});

//GET ALL USER IMAGES FROM USER FOLDER
router.get("/api/usergallery", async (req, res) => {
  const folderSearch = req.query.folderData;
  console.log(folderSearch);
  cloudinary.search
    //GETS ALL IMAGES EXCEPT avatar
    .expression(`folder:${folderSearch} AND -avatar`)
    .execute()
    .then((result) => res.json({ status: "ok", results: result }));
});

//GET USER AVATAR
router.get("/api/avatar", async (req, res) => {
  const folderSearch = req.query.folderData;
  cloudinary.search
    .expression(`folder:${folderSearch} AND avatar`)
    .execute()
    .then((result) => res.json({ status: "ok", results: result }));
});

//GET ALL AVATARS
router.get("/api/avatarList", async (req, res) => {
  cloudinary.search
    .expression("folder:avatars")
    .execute()
    .then((result) => res.json({ status: "ok", results: result }));
});

//DELETE IMAGE
// router.post("/api/deleteImage", async (req, res) => {
//   cloudinary.uploader
//     .destroy("zombie")
//     .then((result) => res.json({ status: "ok", results: result }));
// });

router.get("/api/deleteImage", async (req, res) => {
  const image = req.query.deleteImage;
  cloudinary.uploader
    .destroy(image)
    .then((result) => res.json({ status: "ok", results: result }));
});

module.exports = router;
