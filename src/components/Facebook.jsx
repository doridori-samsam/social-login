import facebookLogo from "../assets/facebook-logo.svg";
import { useEffect } from "react";
function Facebook() {
  function fbLogin() {
    FB.login((res) => console.log(res));
  }

  return (
    <div
      className="fb-login-button"
      data-width=""
      data-size="large"
      data-button-type="login_with"
      data-layout="rounded"
      data-auto-logout-link="false"
      data-use-continue-as="false"
    ></div>
  );
}

export default Facebook;
