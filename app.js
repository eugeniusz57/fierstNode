const fs = require("fs/promises");
// const fs = require("fs").promises

const fileOperation = async (filePath, action = "read", data = "") => {
  switch (action) {
    case "read":
      const text = await fs.readFile(filePath, "utf-8");
      console.log(text);
      break;
    case "add":
      const result = await fs.appendFile(filePath, data);
      break;
    case "replace":
      await fs.writeFile(filePath, data);
      break;
    default:
      console.log("Unknow comand");
      break;
  }
};

fileOperation("./files/text.tx", "replace", "Do you?");

// fs.readFile("./files/text.tx", "utf-8")
//   .then((data) => {
//     console.log(data);
//     // console.log(data.toString())
//   })
//   .catch((error) => console.error(error.message));
