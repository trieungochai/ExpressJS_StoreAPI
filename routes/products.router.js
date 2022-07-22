const express = require("express");
const {
  getAllProductsStatic,
  getAllProducts,
} = require("../controllers/products.controller");
const productsRouter = express.Router();

productsRouter.route("/").get(getAllProducts);
productsRouter.route("/static").get(getAllProductsStatic);

module.exports = productsRouter;
