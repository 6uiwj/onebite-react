//객체
//1. 객체생성
//방법1)
let obj1 = new Object(); //객체 생성자 이용

//방법2)
let obj2 = {}; //객체 리터럴

//2. 객체 프로퍼티
let person = {
  name: "ming", //객체 프로퍼티(객체 속성)
  age: 29, // key : value
  hobby: "주인핥기",
  10: 20,
  //객체도 프로퍼티로 가질 수 있음
  extra: {
    a: "a",
    b: "b",
  },
  //띄어쓰기 있는 키는 따옴표로 감싸 줌줌
  "like cat": true,
};

//3. 객체 프로퍼티를 다루는 방법
//3.1 특정 프로퍼티에 접근(점 표ㅕ기법, 괄호 표기법)
let name = person.name; //프로퍼티의 키로 접근
let age = person["age"]; //대괄호에 키를 쌍따옴표로 묶어서 접근

console.log(name, age);

let property = "hobby";
let hobby = person[property];

//3.2 새로운 프로퍼티를 추가하는 방법
person.job = "home protector";
person["faveritFood"] = "sushi";

console.log(person);

//3.3 프로퍼티 수정
person.job = "swan";
console.log(person.job);

//3.4 프로퍼티 삭제
delete person.job;
console.log(person);

//3.5 프로퍼티의 존재 유무 확인 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result1, result2);
