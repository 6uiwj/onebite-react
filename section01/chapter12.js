//1. 함수 표현식
function funcA() {
  console.log("funcA");
}

let varA = funcA; // ()없이 저장
console.log(varA); //funcA 자체가 출력됨

//함수를 선언과 동시에 변수에 담기 -> 함수를 값으로써 변수에 담았기 때문에 재호출 불가능
let varB = function funcB() {
  console.log("funcB");
};
//funcB();  호출 불가능
//따라서 호출할 일이 없으므로 보통 이름 없이 함수 생성 => 익명 함수
let varC = function () {
  console.log("funC");
};

//이처럼 값으로써 함수를 생성하는 방식 : 함수 표현식(호이스팅 대상X)
// -> 콜백함수에 활용

//2. 화살표 함수
// let varD = function() {
//     return 1;
// }

let varD = () => {
  return 1;
};

//let bar D = () => 1;

console.log(varD());

let varE = (value) => value + 1;
console.log(varE(10));

let varF = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varF(10));
