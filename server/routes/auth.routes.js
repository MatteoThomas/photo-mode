const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
const controllerBio = require("../controllers/bio.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Accept",
      "Content-Type: application/json; charset=UTF-8"
    );

    next();
  });
  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted,
    ],
    controller.signup
  );
  app.post("/api/auth/signin", controller.signin);
  app.get("/api/auth/bio", controllerBio.getBio);
};
