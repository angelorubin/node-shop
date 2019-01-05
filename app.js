const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
app.set("PORT", 3000);
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));

// Routes
// const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
// const pageNotFound = require("./routes/404");

// app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);
// app.use("/", pageNotFound);

app.listen(app.get("PORT"), () => {
  console.log("Server running on http://localhost:3000");
});
