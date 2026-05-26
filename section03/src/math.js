//math 모듈 -> index.js에서 불러와서 사용
function add(a,b) {
    return a + b;
}

function sub(a,b) {
    return a - b;
}

//CJS module(CommonJS Module) 방식으로 내보내기
module.exports =  {
    add: add, //변수와 키값 이름이 같다면 add, 이렇게 생략 가능
    sub: sub,

};