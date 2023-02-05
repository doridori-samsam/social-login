import kakaoLogo from "../assets/kakao-logo.png";
function Kakao() {
  const { Kakao } = window;
  console.log(Kakao);
  const kakaoLogin = () => {
    Kakao.Auth.authorize({
      redirectUri: "http://localhost:5173/user",
    });
  };
  return (
    <button type="button" onClick={kakaoLogin}>
      <img src={kakaoLogo} className="logo-img" width="250" />
    </button>
  );
}

export default Kakao;
