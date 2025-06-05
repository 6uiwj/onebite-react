//1. 배열의 구조 분해 할당
//구조 분해 할당 : 배열이나 객체에 저장된 여러개의 값들을 분해해서 각각 다른 변수에 할당
let arr = [1, 2, 3];
let [one, two, three, four] = arr; //변수에 배열 할당
console.log(one, two, three, four);

let arr2 = [1, 2, 3];
let [o, t, th, f = 4] = arr2;
console.log(o, t, th, f);

//2. 객체의 구조 분해 할당
let person = {
  name: "ming",
  age: 29,
  hobby: "주인핥기",
};

// let { name, age, hobby } = person; //객체는 중괄호에 할당, 프로퍼티 키와 이름이 같아야 함
// console.log(name, age, hobby);

let {
  age: myAge, //재할당하면 프로퍼티 키 이름와 다르게 할당할 수 있음
  hobby,
  name,
  extra = "hello",
} = person;

//console.log(name, myAge, hobby, extra);

//3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  //여기에 구조분해 할당
  console.log(name, age, hobby, extra);
};

func(person);
