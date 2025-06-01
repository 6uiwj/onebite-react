//콜백 함수 : 자신이 아닌 다른 함수에 인수로써 전달된 함수를 의미함
// function main(value) {
//   value();
// }

// function sub() {
//   console.log("sub");
// }

//main(sub); //main함수에 인수로 sub함수를 넣어줌

//------------------------------------
// function main(value) {
//   value();
// }

// function sub() {
//   console.log("i am sub");
// }

// main(sub);

// main(function sub() {
//    console.log("i am sub");
//  })

//main함수의 콜백함수로써 sub를 넣어주고 화살표 함수로 만들어 줌

function main(value) {
  value();
}

main(() => {
  console.log("i am sub");
});

//2. 콜백 함수의 활용=========================================================
// function repeat(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx);
//   }
// }

// function repeatDouble(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx * 2);
//   }
// }
// repeat(5);
// repeatDouble(5);

function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});
