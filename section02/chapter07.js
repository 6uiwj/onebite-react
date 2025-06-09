//배열 메서드 1. 요소 조작

// 1.push : 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];

//push는 결과값에 새로운 배열의 길이를 반환한다.
const newLength = arr1.push(4, 5); //arr1 배열에 4 추가

console.log("push의 결과: " + arr1); //1, 2, 3, 4, 5
console.log(newLength); //push후 배열의 길이 : 5

// 2. pop
//배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();
console.log("pop시킨 요소 :" + poppedItem); //3
console.log("pop 이후 배열 : " + arr2); //1, 2

//push나 pop보다 느리게 동작함 (배열은 순차적으로 작용하는 얘는 앞에 추가해서 인덱스를 다 바꿔야함 )
//3. shift
//배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
console.log(shiftedItem, arr3); //결과값: 2, 3

//4. unshift
//배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
console.log(arr4); //1, 2, 3, 4
console.log(newLength2); //4

//5. slice : 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); //[x, y) 범위 적용
let sliced2 = arr5.slice(2); //위와 같음
let sliced3 = arr5.slice(-1); //slice(-n) : 뒤에서부터 n개자름

console.log(sliced); //3, 4, 5
console.log(sliced2); //3, 4, 5
console.log(sliced3); //5
console.log(arr5); //원본 배열은 바뀌지 않음

//6. concat
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr); //1, 2, 3, 4
