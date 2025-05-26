//자료형
//원시타입 - Number, String, Boolean, Null, Undefined
//객체 타입 - Object
//-------------- Array, Function, RegexExp

//1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;
console.log(num1 + num2); //28.5
console.log(num1 - num2); //25.5
console.log(num1 * num2); //40.5
console.log(num1 / num2); //18
console.log(num1 % num2); //0

let inf = Infinity;
let minf = -Infinity;
let nan = NaN; //연산 실패의 결과값 -> 안전성 (연산 실패시에도 프로그램이 강제종료되지 않음)

console.log(1 * "hello"); //NaN

//2. String Type
let myName = "ming";
let myLocation = "Pyeongteak";
let introduce = myName + myLocation; //문자열 덧셈이 허용된다.

let introduceText = `${myName}은 ${myLocation}에 거주합니다`; //백틱 - ${}로 변수를 포함한 문자열
console.log(introduceText);

//템플릿 리터럴 문법

//3.Boolean Type
let isSwitchOn = true;
let imEmpty = false;

//4. Null Type (아무것도 없다.)
let empty = null;

//5. Undefined Type (할당되지 않은 상태)
let none;
console.log(none); //undefined

//Undefined Type(초기화X, 존재X) vs Null (빈 값으로 할당 )
