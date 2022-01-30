const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    quote: { type: String },
    imageData: { type: Buffer },
    imageType: { type: String },
    imageName: { type: String },
  },
  { collection: "user-data" }
);

const model = mongoose.model("Photomode", User);

module.exports = model;
