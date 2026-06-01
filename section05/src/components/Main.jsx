// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립츠 표현식만 넣을 수 있다.
// 2. 숫자, 문자열, 배열 값만 렌더링 된다. (객체는 렌더링 X)
// 3. 모든 태그는 닫혀있어야 한다.  (닫는 태그가 필요없는 img 등의 경우라도)
// 4. 최상위 태그는 반드시 하나여야만 한다. (없다면 빈 태그 <> </>로 감싸주면 된다.)
import "./Main.css";

const Main = () => {
    //const number = 9;
    //const obj = { a:1};
    //return (
        // <main>
        //     <h1>main</h1>
        //     <h2> {number %2 === 0 ? '짝수' : '홀수'} </h2>
        //     {10}
        //     {number}
        //     {[1,2,3]}
        //     {true}
        //     {undefined}
        //     {null}
        //     {obj.a} {/* 객체는 렌더링되지 않지만 객체의 속성은 렌더링 가능 */}
        // </main>

   // };

        const user = {
            name: '홍길동',
            isLogin: true,
        }
    //     return (
    //         <>
    //             {user.isLogin? (
    //                 <div>로그아웃</div>
    //             ) : (
    //                 <div>로그인</div>
    //             )}
    //         </>
    // );
    if (user.isLogin) {
        return <div className="logout">로그아웃</div>; //jsx 내부에서 class 대신 className 사용
    } else {
        return <div>로그인</div>;
    }

};

export default Main;