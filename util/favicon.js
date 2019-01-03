const express = require("express");

module.exports = function ignoreFavicon(req, res, next) {
  if (req.path === "/favicon.ico") {
    res.status(204).json({ nope: true });
  } else {
    next();
  }
};
