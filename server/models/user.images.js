const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  photo: {
    type: String,
  },
  description: {
    type: String,
  },
});

//Image is a model which has a schema imageSchema

module.exports = new mongoose.model("Images", userSchema);
