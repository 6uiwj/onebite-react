//반복문으로 배열과 객체 순회하기

//순회 : 배열, 객체에 저장된 여러 개의 값에 순서대로 하나씩 접근하는 것

//1. 배열 순회
let arr = [1, 2, 3];

//1-1 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//1-2 for of 반복문
for (let item of arr) {
  //of 뒤에 있는 배열의 값을 하나씩 순서대로 꺼내서 item에 저장
  console.log(item);
}

// 2. 객체 순회
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
};

//2.1 Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
}

for (let key of keys) {
  //for of: 배열에만 사용 가능
  console.log(key);
}

for (let key of keys) {
  const value = person[key];
  console.log(key, value);
}

//2.2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);

for (let value of values) {
  console.log(value);
}

//2.3 for in : 객체에서만 사용할 수 있음
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
