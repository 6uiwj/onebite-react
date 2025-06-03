//단락 평가 ( 첫번째 피연산자만으로도 연산의 결과를 확정지을 수 있다면 두번째 피연산자까지 가지 않음 )
function returnFalse() {
  return false;
}

function returnTrue() {
  return true;
}

console.log(returnFalse() && returnTrue());
//False 함수만 출력

//단략 평가 활용 사례

// function printName(person) {
//     if(!person) {    console.log("person에 값이 없음");
//     return;
//     }
// }

// function printName(person) {
//   console.log(person && person.name);
// }

// printName();

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName(); //person: undefined이므로 name =undefined  -> 두번째 피연산자인 값이 없음 출력
printName({ name: "ming" });
