//Promise : 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
//비동기 작업을 Wrapping함(감싼다.)

//기능: 비동기 작업 실행, 작업 상태관리, 작업 결과 저장, 작업 병렬 실행, 작업 다시 실행 등..

//Promise의 3가지 상태
//1. 대기 (Pending) : 아직 작업이 완료되지 않은 상태 (ex: 유튜브 로딩상태)
//2. 성공(Fulfilled) : 비동기 작업이 성공적으로 마무리 된 상태  (ex: 로딩완료(resolve) 후 시청가능)
//3. 실패(rejected) : 비동기 작업이 실패한 상태 (ex: 로딩실패, 시청불가능)

//프로미스 객체 생성
const promise = new Promise(() => {
  //비동기 작업(excutor)
  setTimeout(() => {
    console.log("안녕");
  }, 2000);
}); //비동기 작업을 진행할 콜백 함수(excutor)

console.log(promise);
