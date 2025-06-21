function add10(num) {
  const promise = new Promise((resolve, reject) => {
    //비동기 작업 실행하는 함수
    //excutor

    setTimeout(() => {
      //const num = null;

      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다");
      }
    }, 2000);
  });
  return promise;
}

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
    //const newP = add10(result);
    //   newP.then((result) => {
    //     console.log(result); //10+10
    //   }
    //return newP;
  })
  .then((result) => {
    console.log(result); //10 + 10
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
