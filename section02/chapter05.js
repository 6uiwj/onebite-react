// 원시타입 VS 객체타입
// 원시타입 : Number, String, Boolean , Null, Undefined
// 객체타입 : Object => Array, Function, RegexExp

//원시타입: 불변값-> 기존값과 다른 값을 대입해도 기존값이 사라지지 않고 남아있음 (변수가 가리키는 값만 달라짐, 메모리 수정X  )
//객체타입: 가변값 -> 참조값을 통해 변수가 저장되고 복사됨 -> 메모리 값 수정 O

//비교
//얕은 비교
// o1 === o2 : 참조값을 기준으로 비교

//깊은 비교
// JSON.stringify(o1) === JSON.stringify(o2) : 객체를 문자열로변환하여 비교
