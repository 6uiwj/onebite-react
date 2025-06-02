//1. 상수 객체 -> 프로퍼티 추가/수정/삭제 가능
//animal에  새로운 객체를 할당하지 못하는 것 뿐...
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = 2; //추가
animal.name = "까망이"; //수정
delete animal.color; //삭제
console.log(animal);

//2. 메서드
// -> 객체 프로퍼티 중 값이 함수인 프로퍼티

const person = {
  name: "이정환",
  //메서드
  sayHi: function () {
    console.log("안녕!");
    //sayHi() {
    // console.log("안녕!");
    //},
  },
};
person.sayHi();
