const express = require("express");
const router = express.Router();
const { AddUser } = require("../controller/user");
router.post("/", AddUser);

module.exports = router;
