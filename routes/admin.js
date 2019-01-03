const express = require("express");
const router = express.Router();
const multer = require("multer");
// const upload = multer({ dest: "uploads/" });
const productsController = require("../controllers/products");

// admin/add-product => GET
router.get("/", productsController.getAddProduct);

// admin/add-product => POST
router.post("/", productsController.postAddProduct);

module.exports = router;
