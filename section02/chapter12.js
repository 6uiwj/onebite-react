//2.12 비동기 작업 처리하기 1. 콜백함수

function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    console.log(sum);
  }, 3000);
}

add(1, 2, (value) => {
  console.log(value);
});

//음식을 주문하는 상황 가정
function orderFood(callback) {
  setTimeout(() => {
    const food = "초밥";
    callback(food);
  }, 3000);
}

//음식식히기
function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

//음식 냉동하기
function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});
