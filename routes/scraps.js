const express = require("express");
const router = express.Router();
const { AddScrap, GetScraps, RemoveScrap } = require("../controller/scrap");
router.post("/", AddScrap);
router.post("/get", GetScraps);
router.delete("/", RemoveScrap);

module.exports = router;
