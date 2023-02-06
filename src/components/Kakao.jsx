import kakaoLogo from "../assets/kakao-logo.png";
function Kakao() {
  const { Kakao } = window;
  console.log(Kakao);
  const kakaoLogin = () => {
    const res = Kakao.Auth.authorize({
      redirectUri: "http://localhost:5173/kakao_user",
    });
    console.log(res);
  };
  return (
    <button type="button" onClick={kakaoLogin}>
      <img src={kakaoLogo} className="logo-img" width="250" />
    </button>
  );
}

export default Kakao;
