//2.14 비동기 작업 처리하기  3. Async&Await

//async : 어떤 함수를 비동기 함수로 만들어주는 키워드
//함수가 프로미스를 반환하도록 변환해주는 키워드

// async function getData() {
//   //서버로부터 데이터를 받아오는 함수
//   return {
//     name: "ming",
//     id: "oterges",
//   };
// }

async function getData() {
  //서버로부터 데이터를 받아오는 함수
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "ming",
        id: "oterges",
      });
    }, 1500);
  });
}

//console.log(getData());

//원래 Promise를 반환하는 비동기 함수였다면 async는 아무 일도 하지 않는다.

//await : async함수 내부에서만 사용이 가능한 키워드
//비동기 함수가 다 처리되기를 기다리는 역할

// function printData() {
//   getData().then((result) => {
//     console.log(result);
//   });
// }

async function printData() {
  const data = await getData(); //비동기 작업(get Data)이 끝날 때까지 기다렸다가 결과를 받아옴
  console.log(data);
}

printData();
