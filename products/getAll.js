const fs = require("fs/promises");
const path = require("path");

const filePath = path.join(__dirname, "product.json");
const getAll = async () => {
  const data = await fs.readFile(filePath);
  const products = JSON.parse(data);
  return products;
};

module.exports = getAll;
