const fs = require("fs/promises");
const { v4 } = require("uuid");
const getAll = require("./getAll");
const filePath = require("./filePath");

const add = async (data) => {
  const products = await getAll();
  const newProduct = { ...data, id: v4() };
  products.push(newProduct);
  await fs.writeFile(filePath, JSON.stringify(product));
  return newProduct;
};

module.exports = add;
