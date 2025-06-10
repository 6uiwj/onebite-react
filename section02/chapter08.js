//5가지 요소 순회 및 탐색 메서드
//1. forEach
//모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  //item:요소(1, 2, 3...), idx:인덱스(0, 1, 2..)
  console.log(idx, item * 2);
}); //0 2, 1 3, 2 4 출력

let doubledArr = []; //arr의 모든 값에. *2 해서 여기에 넣을 것임

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

console.log(doubledArr);

//2. includes
//배열에 특정 요소가 있는지 확인하는 메서드

let arr2 = [1, 2, 3];
arr2.includes(3);
let isInclude = arr2.includes(3);
console.log(isInclude); //true

//3. indexOf (얕은 비교로 작동)
//특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
console.log(index); //1
//존재하지 않는 요소의 인덱스일 시 -1
//여러개의 요소가 존재할 시 가장 앞에 있는 인덱스 반환

//4. findIndex
//특정 요소의 인덱스(위치)를 반환하는 메서드
//모든 요소를 순횐하면서, 콜백함수를 만족
let arr4 = [1, 2, 3];
// const findedIndex = arr4.findIndex((item) => {
//   if (item % 2 !== 0) return true; //0 반환(조건을 만족하는 가장 첫번째 인덱스 반환)
// });

//위와 같음
const findedIndex = arr4.findIndex((item) => item % 2 !== 0);
console.log(findedIndex);

//조건에 만족하지 않는다면 -1 반환

//오브젝트에서 사용하기
let objectArr = [{ name: "밍" }, { name: "냥" }];

console.log(
  objectArr.indexOf({ name: "밍" }) //-1(찾을 수 없음) : indexOf는 얕은 비교이기 때문에 객체는 참조값으로 비교가 이루어지기 때문에 객체 비교 불가
);

console.log(objectArr.findIndex((item) => item.name === "밍"));

//5. find
//모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [{ name: "이정환" }, { name: "홍길동" }];
const finded = arr5.find((item) => item.name === "이정환");
console.log(finded);
