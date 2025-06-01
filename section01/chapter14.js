//스코프(Scope) : 변수나 함수에 접근하거나 호출할 수 있는 범위
// - 전역 스코프(전체 영역) : 전체 영여겡서 접근 가능
// - 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; // //전역 스코프

function funcA() {
  let b = 2; //지역 스코프
  function funcB() {
    //지역 스코프
    console.log("B");
  }
  console.log(a);
}

funcA();
//funcB(); (X)

//함수선언문은 반복문이나 조건문에서는 예외적으로 지역스코프를 갖지 않고 전역 스코프를 갖는다.
//하지만 함수 안에 선언된 함수는 지역스코프를 갖는다.
if (true) {
  let c = 1;
  function funcC() {
    console.log("C");
  }
}

funcC();
