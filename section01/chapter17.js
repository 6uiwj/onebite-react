//1. 배열 생성
let arrA = new Array(); //배열 생성자
let arrB = []; //배열 리터럴

//어떤 타입의 값이든 저장 가능 (불리언, 문자열, null, undefined, 화살표함수, 객체, 배열 등..)
let arrC = [1, 2, 3, true, "hello", null, undefined, () => {}, {}, []];
console.log(arrC);

//2. 배열 요소 접근
let item1 = arrC[0];
let item2 = arrC[1];

arrC[0] = "hello"; //배열 요소 값 바꾸기
console.log(arrC);
