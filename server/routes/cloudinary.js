var express = require("express");
var router = express.Router();
const cloudinary = require("cloudinary").v2;

//IMAGES /////////////////////////////////////////////////////////////////////
cloudinary.config({
  cloud_name: "proj3",
  api_key: "817967375469752",
  api_secret: "vsC84gCikDBP6Dppf4pfOE4ZGX4",
  secure: true,
});

//GET ALL IMAGES FROM ACCOUNT
router.get("/api/gallery", async (req, res) => {
  cloudinary.api.resources(function (error, result) {
    console.log(result, error);
    return res.json({ status: "ok", results: result });
  });
});

//DELETE IMAGE

// router.post("/api/delete", async (req, res) => {
//   cloudinary.api.destroy(function (result) {
//     console.log(result);
//   });
// });

module.exports = router;
