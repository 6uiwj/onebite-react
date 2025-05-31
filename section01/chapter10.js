for (let i = 0; i <= 10; i++) {
  //i : 카운터 변수\

  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
  if (i >= 5) {
    break;
  }
}
