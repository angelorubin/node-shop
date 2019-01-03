exports.get404 = (req, res) => {
  res.render("404", {
    title: "Page not found."
  });
};
