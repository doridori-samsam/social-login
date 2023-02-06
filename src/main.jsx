import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
//Facebook Login
// window.fbAsyncInit = function () {
//   FB.init({
//     appId: "961195221924157",
//     cookie: true,
//     xfbml: true,
//     version: "v10.0",
//   });

//   FB.AppEvents.logPageView();
// };

// (function (d, s, id) {
//   var js,
//     fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) {
//     return;
//   }
//   js = d.createElement(s);
//   js.id = id;
//   js.src = "https://connect.facebook.net/en_US/sdk.js";
//   fjs.parentNode.insertBefore(js, fjs);
// })(document, "script", "facebook-jssdk");

//naver login
const naverLogin = new naver.LoginWithNaverId({
  clientId: import.meta.env.VITE_NAVER_CLIENT_ID,
  callbackUrl: import.meta.env.VITE_CALLBACK_URL,
  isPopup: true,
  callbackHandle: true,
});
naverLogin.init();

//kakao login
Kakao.init(import.meta.env.VITE_KAKAO_JS);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
