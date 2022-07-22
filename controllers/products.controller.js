const getAllProductsStatic = (req, res) => {
  return res.send("getAllProductsStatic");
};

const getAllProducts = (req, res) => {
  return res.send("getAllProducts");
};

module.exports = { getAllProductsStatic, getAllProducts };
