const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio: { type: String },
  },
  { collection: "users" }
);

const model = mongoose.model("Photomode", User);

module.exports = model;
