//2.10 Date 객체와 날짜

//1. Date 객체를 생성하는 방법
let date1 = new Date(); //생성자 (현재 지금 시간 저장)
console.log(date1);

let date2 = new Date("1995-06-07"); //특정 시각 저장
//let date2 = new Date("1995.06.07"); //가능
//let date2 = new Date("1995/06/07");  //가능
console.log(date2);

//시간도 설정
let date3 = new Date("1995/06/07/12:25:25");
let date4 = new Date(1995, 6, 7, 12, 25, 25);
console.log(date3);
console.log(date4);

//2. 타임 스탬프
//특정 시간이 "1970.01.01 00시 00분 00초"부터 몇 ms가 지났는지를 의미한 숫자값
//1970.01.01 = 협정세계시 = UTC
let ts1 = date1.getTime();
let date5 = new Date(ts1); //타임스탬프에 해당하는 값으로 시간 생성
console.log(ts1);
console.log(date1, date5); //같은 값 출력

//3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth(); //0부터 출력
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let second = date1.getSeconds();

console.log(year, month, date, hour, minute, second);

//4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2); //2=3월
date1.setDate(30);
date1.setHours(3);
date1.setMinutes(50);
date1.setSeconds(20);

console.log(date1);

//5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); //시간을 제외하고 날짜만 스트링으로
console.log(date1.toLocaleString()); //한국 포맷으로 날짜 출력
