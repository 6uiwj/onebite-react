// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20";

const result = num + str;
console.log(result);

//2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
//문자열 -> 숫자
let str1 = "10";
let str2 = "10개";
let str3 = Number(str1); //숫자만 있을때 형변환 가능
let str4 = parseInt(str1); //숫자와 글자가 섞여있을 때 숫자만 추출(숫자가 앞에 있어야함)
console.log(typeof str3);
console.log(typeof str4);

//숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다.");
