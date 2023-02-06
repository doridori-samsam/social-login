import kakaoLogo from "../assets/kakao-logo.png";
function Kakao() {
  const { Kakao } = window;

  console.log(Kakao);
  const kakaoLogin = () => {
    const res = Kakao.Auth.authorize({
      redirectUri: import.meta.env.VITE_KAKAO_CALLBACK,
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
