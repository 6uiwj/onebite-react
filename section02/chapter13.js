//Promise : 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
//비동기 작업을 Wrapping함(감싼다.)

//기능: 비동기 작업 실행, 작업 상태관리, 작업 결과 저장, 작업 병렬 실행, 작업 다시 실행 등..

//Promise의 3가지 상태
//1. 대기 (Pending) : 아직 작업이 완료되지 않은 상태 (ex: 유튜브 로딩상태)
//2. 성공(Fulfilled) : 비동기 작업이 성공적으로 마무리 된 상태  (ex: 로딩완료(resolve) 후 시청가능)
//3. 실패(rejected) : 비동기 작업이 실패한 상태 (ex: 로딩실패, 시청불가능)

//프로미스 객체 생성

//성공시
const promise = new Promise((resolve, reject) => {
  //비동기 작업(excutor)
  //- 두가지의 매개 변수가 전달됨
  //  - resolve : primise(비동기) 작업을 성공 상태로 바꾸는 함수
  //  - reject : promise(비동기) 작업을 실패 상태로 바꾸는 함수
  setTimeout(() => {
    console.log("안녕");
    resolve("안녕"); // resolve(결괏값) : 성공 상태로 변경
  }, 2000);
}); //비동기 작업을 진행할 콜백 함수(excutor)

setTimeout(() => {
  console.log(promise);
}, 3000);

//실패시
const promise2 = new Promise((resolve, reject) => {
  //비동기 작업(excutor)
  setTimeout(() => {
    console.log("안녕");
    reject("왜 실패했냐면 ..."); //reject(실패이유) : 실패 상태로 변경
  }, 2000);
}); //비동기 작업을 진행할 콜백 함수(excutor)

setTimeout(() => {
  console.log(promise2);
}, 3000);

//프로미스 객체 이용하는 법
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const num = 10;

    if (typeof num === "number") {
      resolve(num + 10); //성공
    } else {
      reject("num이 숫자가 아닙니다"); //실패
    }
  }, 2000);
});

//then 메서드 :프로미스 성공 시 then메서드의 콜백함수가 실행됨
//매개변수 : 프로미스의 결괏값을 받음
//then 메서드는 호출 결과로 자기자신을 promise 객체로 반환한다.
promise3.then((value) => {
  console.log(value);
});

//catch: 프로미스 실패시 실행되는 메서드
promise3.catch((error) => {
  console.log(error);
});

//then과 catch 같이 사용하기 (promise chaining)
promise3
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
