// const fs = require("fs/promises");
// // const fs = require("fs").promises

// const fileOperation = async (filePath, action = "read", data = "") => {
//   switch (action) {
//     case "read":
//       const text = await fs.readFile(filePath, "utf-8");
//       console.log(text);
//       break;
//     case "add":
//       const result = await fs.appendFile(filePath, data);
//       break;
//     case "replace":
//       await fs.writeFile(filePath, data);
//       break;
//     default:
//       console.log("Unknow comand");
//       break;
//   }
// };

// fileOperation("./files/text.tx", "replace", "Do you?");

// // fs.readFile("./files/text.tx", "utf-8")
// //   .then((data) => {
// //     console.log(data);
// //     // console.log(data.toString())
// //   })
// //   .catch((error) => console.error(error.message));

///////////////////// JSON  /////////////////////
const productsOperation = require("./products");

// 1. Allproducts - productsOperation.getAll
//2. One product by id - productsOperation.getByid
//3. Add product - productsOperation.add
// const  (getAll, add, getById, updateById, removeById)  = require("./index");
const invokeAction = async ({ action, id, data }) => {
  switch (action) {
    case "getAll":
      const products = await productsOperation.getAll();
      console.log(products);
      break;
    case "getById":
      const product = await productsOperation.getById(id);
      console.log("product getById = ", product);
      if (!product) {
        throw new Error(`product with id={id} not found`);
      }
    case "add":
      const newProduct = await productsOperation.add(data);
      console.log(newProduct);
      break;
    case "updateById":
      const updateProduct = await productsOperation.updateById(id, data);
      if (!updateProduct) {
        throw new Error(`Product with id={id} not found`);
      }
      break;
    case "removeById":
      const removeProduct = await productsOperation.removeById(id);
      console.log(removeProduct);
      break;
    default:
      console.log("Unknow action");
  }
};

// const id = "124";
const newData = {
  name: "Iphon",
  price: 7.5,
  location: "USA",
};
// invokeAction({ action: "getById", id: "124" });
// const updateId = "124kg";
// const updateData = {
//   name: "Iphon",
//   price: 6.5,
//   location: "USA",
// };

// invokeAction({ action: "updateById", id: updateId, data: updateData });

invokeAction({ action: "removeById", id: "1" });
