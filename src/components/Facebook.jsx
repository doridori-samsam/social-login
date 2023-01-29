import facebookLogo from "../assets/facebook-logo.svg";

function Facebook() {
  return (
    <button className="btn-wrapper">
      <img src={facebookLogo} className="logo-img" width="40" height="38" />
      <span className="btn-txt">페이스북 로그인하기</span>
    </button>
  );
}

export default Facebook;
