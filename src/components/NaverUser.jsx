import React, { useEffect, useState } from "react";

function NaverUser() {
  const CLIENT_ID = import.meta.env.VITE_NAVER_CLIENT_ID;
  const CALLBACK_URL = import.meta.env.VITE_CALLBACK_URL;
  const { naver } = window;
  const [userInfo, setUserInfo] = useState({});

  const naverLogin = new naver.LoginWithNaverId({
    clientId: CLIENT_ID,
    callbackUrl: CALLBACK_URL,
    isPopup: true,
    callbackHandle: true,
  });

  // naverLogin.getLoginStatus((status) => {
  //   if (status) {
  //     console.log(status);
  //     const email = naverLogin.user.getEmail();
  //     console.log(naverLogin.user);
  //     setUserInfo(naverLogin.user);
  //   } else {
  //     console.log("status 없음...");
  //   }
  // });
  const userProfile = () => {
    window.location.href.includes("access_token") && GetUser();
    function GetUser() {
      const location = window.location.href.split("=")[1];
      const token = location.split("&")[0];
      console.log("====token====", token);
    }
  };
  useEffect(() => {
    naverLogin.getLoginStatus((status) => {
      if (status) {
        setUserInfo(naverLogin.user);
        console.log(status);
        const email = naverLogin.user.getEmail();
        console.log(naverLogin.user);
      } else {
        console.log("status 없음...");
      }
      userProfile();
    });
  }, []);
  return (
    <>
      <h1>Naver 유저입니다</h1>
      <div className="user-info">
        이름 : <span>{userInfo.name}</span>
      </div>
      <br />
      <div className="user-info">
        닉네임 : <span>{userInfo.nickname}</span>
      </div>
      <br />
      <div className="user-info">
        이메일: <span>{userInfo.email}</span>
      </div>
      <br />
      <div className="user-info">
        프로필 사진 <img src={userInfo.profile_image} className="user-img" />
      </div>
    </>
  );
}

export default NaverUser;
