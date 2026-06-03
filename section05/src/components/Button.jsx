const Button = ({ children, text, color = "black" }) => { //구조분해할당으로 color props의 기본값 설정
    
    const onClickButton = (e) => {
        console.log(e); //클릭 이벤트 객체 출력
        console.log(text);
    };
    
    return (
    <button 
        /* onClick = {() => {
            console.log(text);
        }}
        */ 
        onClick = {onClickButton} //위에서 정의한 onClickButton 함수로 클릭 이벤트 처리(이름만 전달)
        //onMouseEnter = {onClickButton} //마우스가 버튼 위로 올라갈 때도 onClickButton 함수 실행
        style = {{ color: color }}>
        {text} - {color.toUpperCase()}
        {children} {/* Button 컴포넌트의 자식 요소를 렌더링 */  }
    </button>
    );     
};

Button

export default Button;