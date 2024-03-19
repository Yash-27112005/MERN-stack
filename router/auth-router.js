const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");
const signupSchema = require("../validators/auth-validators");
const validate = require("../middlewares/validate-middleware");

router.route("/").get(authcontrollers.home);

router
  .route("/register")
  .post(validate(signupSchema), authcontrollers.register);
router.route("/login").post(authcontrollers.login);
module.exports = router;
