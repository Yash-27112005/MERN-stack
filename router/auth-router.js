const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");
const signupSchema = require("../validators/auth-validators");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-Middleware");

router.route("/").get(authcontrollers.home);

router
  .route("/register")
  .post(validate(signupSchema), authcontrollers.register);
router.route("/login").post(authcontrollers.login);

router.route("/user").get(authMiddleware, authcontrollers.user);

module.exports = router;
