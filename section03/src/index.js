// const moduleData = require("./math");

// console.log(moduleData.add(1,2));
// console.log(moduleData.sub(1,2));


const {add, sub} = require("./math"); //구조분해할당

console.log(add(1,2));
console.log(sub(1,2));