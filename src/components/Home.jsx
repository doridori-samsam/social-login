import Naver from "./Naver";
import Facebook from "./Facebook";
import Kakao from "./Kakao";

function Home() {
  return (
    <>
      <h1>SNS 로그인 테스트</h1>
      <Naver />
      <Kakao />
      <Facebook />
    </>
  );
}

export default Home;
