exports.getAllProducts = (req, res) => {
  res.render("shop", {
    title: "My Products",
    products: [
      {
        name: "product name here",
        price: "product price here",
        description: "product description here"
      }
    ]
  });
};
