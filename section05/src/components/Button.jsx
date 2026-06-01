const Button = ({ children, text, color = "black" }) => { //구조분해할당으로 color props의 기본값 설정
    return (
    <button style = {{ color: color }}>
        {text} - {color.toUpperCase()}
        {children} {/* Button 컴포넌트의 자식 요소를 렌더링 */  }
    </button>
    );     
};

Button

export default Button;