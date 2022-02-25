const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio: { type: String },
    imageData: { type: Buffer },
    imageType: { type: String },
    imageName: { type: String },
    search: { type: String },
    avatar: { type: Buffer },
  },
  { collection: "user-data" }
);

const model = mongoose.model("Photomode", User);

module.exports = model;
