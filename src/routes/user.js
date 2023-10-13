const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");
router.get("/", userController.getAllUser);

module.exports = router;
