//함수 선언
function greeting() {
  console.log("안녕하세요!");
}

//매개변수
function getArea(w, h) {
  function another() {
    console.log("another");
  }
  another();
  let width = w;
  let height = h;
  let area = width * height;

  return area; //반환값
}

let area1 = getArea(10, 20); //인수
let area2 = getArea(30, 20);

console.log(area1, area2);

//함수는 호출 이후에 정의해도 실행이 잘 된다. (호이스팅)
