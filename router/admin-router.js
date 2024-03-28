const express = require("express");
const adminController = require("../controllers/admin-controllers");
const authMiddleware = require("../middlewares/auth-Middleware");

const router = express.Router();

router.route("/users").get(authMiddleware,adminController.getAllUsers);
router.route("/contacts").get(authMiddleware,adminController.getAllContacts);

module.exports = router;
