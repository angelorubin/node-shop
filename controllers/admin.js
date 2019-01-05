const Product = require("../models/product");

const products = [
  {
    id: 1,
    title: "book title 1",
    image: "https://bit.ly/2Awha1o",
    price: 80,
    description: "A very interesting book about node 1"
  },
  {
    id: 2,
    title: "book title 2",
    image: "https://bit.ly/2C133ku",
    price: 120,
    description: "A very interesting book about node 2"
  },
  {
    id: 3,
    title: "book title 3",
    image: "https://bit.ly/2Awha1o",
    price: 120,
    description: "A very interesting book about node 3"
  }
];

exports.getAddProduct = (req, res) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    url: req.baseUrl
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product();
  product.save(req.body);
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  res.render("admin/add-product", {
    products,
    pageTitle: "Admin Products",
    path: "/admin/products"
  });
};
