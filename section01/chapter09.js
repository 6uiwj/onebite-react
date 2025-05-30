//1. if 조건문
let num = 10;

if (num >= 10) {
  console.log("num은 10 이상입니다.");
} else if (num >= 5) {
  console.log("num은 5 이상입니다.");
} else {
  console.log("조건이 거짓입니다.");
}

//2. switch문
//-> 다수의 조건을 처리할 때 if보다 더 직관적
//-> 참인 값부터 아래 전부 실행
//-> 참인 값만 출력하고 싶으면 break; 사용
// 참인 값이 존재하지 않을 때 defaul: 사용
let animal = "cat";
switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog": {
    console.log("강아지");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  case "snake": {
    console.log("뱀");
    break;
  }
  case "tiger": {
    console.log("호랑이");
    break;
  }
  default: {
    console.log("그런 동물은 전 모릅니다. ");
  }
}
