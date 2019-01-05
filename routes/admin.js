const express = require("express");
const router = express.Router();
// const multer = require("multer");
// const upload = multer({ dest: "uploads/" });
const adminController = require("../controllers/admin");

// admin/add-product => GET
router.get("/add-product", adminController.getAddProduct);

// admin/products => GET
router.get("/products", adminController.getProducts);

// admin/add-product => POST
router.post("/add-product", adminController.postAddProduct);

module.exports = router;
