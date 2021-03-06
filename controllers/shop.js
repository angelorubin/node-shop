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

exports.getIndex = (req, res) => {
  res.render("shop/index", {
    pageTitle: "Home",
    path: "/"
  });
};

exports.getProductList = (req, res) => {
  res.render("shop/product-list", {
    products,
    pageTitle: "Product List",
    path: "/product-list"
  });
};

exports.getCart = (req, res) => {
  res.render("shop/cart", {
    path: "/cart",
    pageTitle: "Your Cart"
  });
};

exports.getCheckout = (req, res) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout"
  });
};
