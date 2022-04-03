const config = require("../config/auth.config");
const jwt = require("jsonwebtoken");

const db = require("../models");
const bcrypt = require("bcryptjs");
const Bio = db.bio;

// verifyToken = (req, res, next) => {
//   let token = req.headers["x-access-token"];
//   if (!token) {
//     return res.status(403).send({ message: "No token provided!" });
//   }
//   jwt.verify(token, config.secret, (err, decoded) => {
//     if (err) {
//       return res.status(401).send({ message: "Unauthorized!" });
//     }
//     req.userId = decoded.id;
//     next();
//   });
// };

exports.getBio = async (req, res, next) => {
  const token = req.headers["x-access-token"];

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    const email = decoded.email;
    const user = await User.findOne({ email: email });

    return res.json({ status: "ok", bio: user.bio });
  } catch (error) {
    res.json({ status: "error", error: "invalid token!" });
  }
};
