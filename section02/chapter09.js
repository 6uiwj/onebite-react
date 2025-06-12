//5가지 배열 변형 메서드
//1. filter
//기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: "밍", hobby: "야옹" },
  { name: "냥", hobby: "야옹" },
  { name: "멍", hobby: "멍" },
];

// const meow = arr1.filter((item) => {
//   if (item.hobby === "야옹") return true;
// });

//위와 같음
const meow = arr1.filter((item) => item.hobby === "야옹");

console.log(meow);

//2. map
//배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2; //결과값을 새로운 배열에 담아 리턴
});

console.log(mapResult1);

//arr1의 name만 가져와 새로운 배열로 만들기
let names = arr1.map((item) => item.name);

console.log(names);

//3. sort
//배열을 사전순으로 정렬하는 메서드 (숫잗인 경우 제대로 동작하지 않음)
let arr3 = ["b", "a", "c"];
arr3.sort();
console.log(arr3); // ['a,' 'b', 'c']

//숫자\
//(1) 오름차순
let arr4 = [10, 3, 5];
arr4.sort((a, b) => {
  if (a > b) {
    return 1; //양수 반환: b가 a 앞에 와라 (둘 중에 더 작은 값이 앞으로 오도록 설정 )
  } else if (a < b) {
    return -1; //음수 반환: a가 b 앞에 와라(오름차순 정렬)
  } else {
    return 0; //0 : 자리 그대로 유지
  }
});
console.log(arr4); //[3, 5, 10]

//(2) 내림차순
let arr5 = [10, 3, 5];
arr4.sort((a, b) => {
  if (a > b) {
    return -1; //양수 반환: b가 a 앞에 와라 (둘 중에 더 작은 값이 앞으로 오도록 설정 )
  } else if (a < b) {
    return 1; //음수 반환: a가 b 앞에 와라(오름차순 정렬)
  } else {
    return 0; //0 : 자리 그대로 유지
  }
});
console.log(arr5); //[10, 5, 3]

//4. toSorted //원본 배열은 놔두고 새로운 배열을 반환하는 정렬 메서드
let arr6 = ["c", "a", "b"];
const sorted = arr6.toSorted();
console.log(arr6); //['c', 'a', 'b']
console.log(sorted); //['a', 'b', 'c']

//5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr7 = ["hi", "im", "ming"];
const joined = arr7.join();
console.log(joined); //hi, im, ming

const joined2 = arr7.join("-"); //구분자 변경해주기
console.log(joined2); //hi-im-ming
