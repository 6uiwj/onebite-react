const Button = ({ text, color = "black" }) => { //구조분해할당으로 color props의 기본값 설정
    return (
    <button style = {{ color: color }}>
        {text} - {color.toUpperCase()}
    </button>
    );     
};

Button

export default Button;