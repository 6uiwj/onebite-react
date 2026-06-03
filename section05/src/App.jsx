import './App.css';
import {useState} from 'react';

function App() {

  //변수를 쓰지 않고 state를 사용하는 이유: 변수는 값이 바뀌어도 화면이 다시 렌더링되지 않지만, 
  // state는 값이 바뀌면 화면이 다시 렌더링되기 때문에 
  // 사용자에게 변경된 값을 보여줄 수 있다. 
  // 따라서, 사용자 인터페이스에서 동적인 데이터를 관리할 때는 
  // state를 사용하는 것이 적합하다.
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");
  console.log(count);
  return  (
    <>
    <div>
      <h1>{light }</h1>
      <button onClick = {() => {
        setLight(light === "ON" ? "OFF" : "ON");
      }}> {light === "ON" ? "끄기" : "켜기"} </button>
    </div>
    <div>
      <h1>{count}</h1>
      <button onClick= {() => 
        setCount(count+1)
      }>+</button>
      </div>
    </>
  );
}

export default App;
