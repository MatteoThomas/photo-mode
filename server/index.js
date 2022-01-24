const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/user.model");
const jwt = require("jsonwebtoken");

dotenv.config();
app.use(cors());
app.use(express.json());

mongoose.connect(
  `mongodb+srv://${process.env.REACT_APP_MONGONAME}:${process.env.REACT_APP_MONGODB}@cluster0.ihfjs.mongodb.net/Photomode?retryWrites=true&w=majority`
);

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate email" });
  }
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (user) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.REACT_APP_SECRET
    );
    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
});

app.get("/api/quote", async (req, res) => {
  const token = req.headers["x-access-token"];

  try {
    const decoded = jwt.verify(token, process.env.REACT_APP_SECRET);
    const email = decoded.email;
    const user = await User.findOne({ email: email });

    return res.json({ status: "ok", quote: user.quote });
  } catch (error) {
    res.json({ status: "error", error: "invalid token!" });
  }
});

app.post("/api/quote", async (req, res) => {
  const token = req.headers["x-access-token"];

  try {
    const decoded = jwt.verify(token, process.env.REACT_APP_SECRET);
    const email = decoded.email;
    await User.updateOne({ email: email }, { $set: { quote: req.body.quote } });

    return res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: "error", error: "invalid token" });
  }
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
