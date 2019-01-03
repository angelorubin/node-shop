const fs = require("fs");
const path = require("path");

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save(product) {
    /*
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "product"
    );
    fs.readFile(p, (err, fileContent) => {
      console.log(fileContent);
    });
    */
    console.log(product);
    console.log("O produto foi salvo com sucesso.");
  }

  static fetchAll() {
    return products;
  }
};
