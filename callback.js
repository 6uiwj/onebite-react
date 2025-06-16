//콜백함수 :자신이 아닌 다른 함수에 인수로써 전달된 함수
//n만큼 어떤 일을 반복하는 함수
//i를 출력
function repeat(n) {
  //i를 출력
  for (var i = 0; i < n; i++) console.log(i);
}

repeat(5);

//만약 repeat함수의 반복문 내부에서 다른 일을 하고싶다면 함수를 새롭게 정의해야 한다.
//i가 홀수일 때만 출력
function repeat2(n) {
  for (var i = 0; i < n; i++) {
    if (i % 2) console.log(i);
  }
}

repeat2(5);

//함수를 합성함으로써 변하지 않는 공통 로직은 미리 정의해 두고, 경우에 따라 변경되는 로직은 추상화해서 함수 외부에서 내부로 전달하자

//외부에서 전달받은 f를 n만큼 반복 호출한다. [[공통 부분(추상화)]] [[고차 함수]]
function repeat3(n, f) {
  for (var i = 0; i < n; i++) {
    f(i); //i를 전달하면서 f 호출
  }
}

//console.log를 찍는 함수
//[[변경되는 부분(추상화)]] [[콜백 함수]]
function logAll(i) {
  console.log(i);
}

repeat3(5, logAll); //5만큼 logAll 호출 (함수자체를 호출하는 것이 아닌 전달 (logAll()이 아닌 logAll을 인수로넣음)

//홀수만 호출하는 함수
//[[변경되는 부분(추상화)]] [[콜백 ㅎ마수]]
function logOdds(i) {
  if (i % 2) console.log(i);
}

repeat3(5, logOdds); //5만큼 logOdds 호출
