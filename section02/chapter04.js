//1. Spread 연산자
// -> Spraed: 흩뿌리다, 펼치다 라는 뜻
// 객체나 배열에 저장된 여러가지 값을 개별로 흩뿌리는 역할

//예제 1 )
let arr1 = [1, 2, 3];
//let arr2 = [4, 5, 6];
//arr1을 arr2의 4와 5사이에 넣어주고 싶다 [4, 1, 2, 3, 5, 6];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2);

//예제 2)
let obj1 = {
  a: 1,
  b: 2,
};

// let obj2 = {
//   a: obj1.a,
//   b: obj1.b,
//   c: 3,
//   d: 4,
// };

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

console.log(obj2);

//예제3
function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}
funcA(...arr1); //매개변수로로 전달하기

//2. Rest 매개변수
//  -> Rest는 나머지, 나머지 매개변수 :매개변수에 사용
//여러개의 매개변수를 받아야할 때 배열 형태로 한방에 여러개의 매개변수를 받아올 수 있도록 해줌

function funcB(...rest) {
  console.log(rest);
}
funcB(...arr1);

function funcC(one, ...rest) {
  //[2,3] 출력 (one:1 , rest: [2, 3])
  //첫번째 매개변수는 이름을 주고싶을때 이름 지정
  console.log(rest);
}
funcC(...arr1);

//rest. 매개변수는 항상 마지막에 와야 함
// function funcD(one, two, ...rest, three) { 불가능

// }

//이름이 꼭 rest일 필요는 없음
function funcD(one, two, ...param) {}
