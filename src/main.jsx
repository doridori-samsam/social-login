import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
//Facebook Login
// window.fbAsyncInit = function () {
//   FB.init({
//     appId: "{your-app-id}",
//     cookie: true,
//     xfbml: true,
//     version: "{api-version}",
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

Kakao.init("bc45513e78dbf13556c955d3d28d5577");
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
