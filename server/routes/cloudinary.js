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
// router.post("/api/folder", async (req, res) => {
//   try {
//     const userFolder = await req.body.name;
//     console.log(userFolder);
//     await cloudinary.api.create_folder(userFolder, {});
//     res.json({ msg: "created a user folder on Cloudinary" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ err: "Something went wrong with FOLDER" });
//   }
// });

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
  console.log(folderSearch);
  cloudinary.search
    .expression(`folder:${folderSearch}`)
    .execute()
    .then((result) => res.json({ status: "ok", results: result }));
});

module.exports = router;
