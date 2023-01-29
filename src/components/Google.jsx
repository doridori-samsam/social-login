import googleLogo from "../assets/google-logo.svg";

function Google() {
  return (
    <button className="btn-wrapper">
      <img src={googleLogo} className="logo-img" width="40" height="38" />
      <span className="btn-txt">구글 로그인하기</span>
    </button>
  );
}

export default Google;
