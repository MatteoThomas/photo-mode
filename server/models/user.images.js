const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  imageData: { type: Buffer },
  imageType: { type: String },
  imageName: { type: String },
});

//Image is a model which has a schema imageSchema

module.exports = new mongoose.model("Images", imageSchema);
