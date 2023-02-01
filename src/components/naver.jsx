import naverLogo from "../assets/naver-logo.png";
import axios from "axios";
import { useEffect } from "react";

function Naver() {
  const CLIENT_ID = import.meta.env.VITE_NAVER_CLIENT_ID;
  const CALLBACK_URL = import.meta.env.VITE_CALLBACK_URL;
  const { naver } = window;

  function initializeNaverLogin() {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: CLIENT_ID,
      callbackUrl: CALLBACK_URL,
      isPopup: false,
      loginButton: { color: "green", type: 3, height: "60" },
      callbackHandle: true,
    });

    naverLogin.init();
    /**user정보를 authpage에 보내줘야 함.... */
    naverLogin.getLoginStatus((status) => {
      if (status) {
        const { id, email } = naverLogin.user;
        console.log(id, email);
        console.log(naverLogin.user);
      }
    });
  }
  const userProfile = () => {
    window.location.href.includes("access_token") && GetUser();
    function GetUser() {
      const location = window.location.href.split("=")[1];
      const token = location.split("&")[0];
      console.log("token", token);
    }
  };

  const Login = () => {
    initializeNaverLogin();
    userProfile();
  };
  useEffect(() => {
    Login();
  }, []);

  return <div id="naverIdLogin"></div>;
}

export default Naver;
