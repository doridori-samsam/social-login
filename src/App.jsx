import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Naver from "./components/naver";
import NaverUser from "./components/NaverUser";
import KaKaoUser from "./components/KaKaoUser";
import FacebookUser from "./components/FacebookUser";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login/naver" element={<Naver />}></Route>
            <Route path="/kakao_user" element={<KaKaoUser />}></Route>
            <Route path="/naver_user" element={<NaverUser />}></Route>
            <Route path="/fb_user" element={<FacebookUser />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
