const Product = require("../models/product");

exports.getAddProduct = (req, res) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    url: req.baseUrl
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product();
  product.save(req.body);
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {};
