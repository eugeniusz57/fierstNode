import { info, log, getCurrentDate } from "./import.js";

info("info function");
log("log function");
console.log(`get current date function result: ${getCurrentDate()} `);
const path = require("path");

console.log(path.resolve("import.js"));
