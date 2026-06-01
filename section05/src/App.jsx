import './App.css';
import Header from './components/Header'; //확장자 생략가능 
import Main from './components/Main';
import Footer from './components/Footer';
import Button from './components/Button';

function App() {

   const buttonProps = {
      text: "메일",
      color: "red",
      a: 1,
      b: 2,
      c: 3,
   };
  
  return (
    <>
      <Header /> {/* header 컴포넌트 사용 */}
      <Main /> {/* main 컴포넌트 사용 */}
      <Footer /> {/* footer 컴포넌트 사용 */} 
      <Button {...buttonProps} />
      <Button text={"카페"}/>
      <Button text={"블로그"}/>
    </>
  );
}

export default App;
