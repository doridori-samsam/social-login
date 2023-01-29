import "./App.css";
import Kakao from "./components/Kakao";
import Google from "./components/Google";
import Facebook from "./components/facebook";
function App() {
  return (
    <div className="App">
      <h1>SNS 로그인 테스트</h1>
      <Kakao />
      <Facebook />
      <Google />
    </div>
  );
}

export default App;
