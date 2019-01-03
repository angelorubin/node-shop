const express = require("express");
const router = express.Router();
const pageNotFound = require("../controllers/404");

router.get("/", pageNotFound.get404);

module.exports = router;
