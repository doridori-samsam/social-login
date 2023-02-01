import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Naver from "./components/naver";
import AuthPage from "./components/AuthPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login/naver" element={<Naver />}></Route>
            <Route path="/user" element={<AuthPage />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
