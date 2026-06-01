// const moduleData = require("./math");

// console.log(moduleData.add(1,2));
// console.log(moduleData.sub(1,2));


//const {add, sub} = require("./math"); //구조분해할당

//import mul from "./math.js"; //math 모듈의 기본값으로 내보내진 multiply 함수 불러오기(import이름 변경 가능)
//import { add, sub } from "./math.js"; //ES6 Module 방식으로 불러오기
import mul, { add, sub } from "./math.js"; //기본값과 일반값을 함께 불러오기   
import randomColor from "randomcolor"; //node_modules에서 randomcolor 패키지 불러오기

const color = randomColor(); //랜덤한 색상 생성
console.log(color); //생성된 랜덤 색상 출력


console.log(add(1,2));
console.log(sub(1,2));
console.log(mul(1,2));