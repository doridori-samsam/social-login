import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function KaKaoUser() {
  const location = useLocation();
  const code = location.search.split("=")[1];
  const state = location.search.split("=")[2];
  const [userInfo, setUserInfo] = useState({});
  const { Kakao } = window;

  const kakaoHeader = {
    Authorization: import.meta.env.VITE_KAKAO_ADMIN,
    "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
  };

  useEffect(() => {
    async function getKakaoToken(code) {
      try {
        const data = {
          grant_type: "authorization_code",
          client_id: import.meta.env.VITE_KAKAO_CLIENT_ID,
          redirect_uri: "http://localhost:5173/kakao_user",
          code: code,
        };

        const queryString = Object.keys(data)
          .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
          .join("&");

        const res = await axios.post(
          "https://kauth.kakao.com/oauth/token",
          queryString,
          { headers: kakaoHeader }
        );

        Kakao.Auth.setAccessToken(res.data.access_token);
        console.log(res, "토큰 데이터!!!!!!!");
        getUserInfo();
      } catch (error) {
        console.error(error, "토큰받기 error!!!");
      }
    }

    async function getUserInfo() {
      const res = await Kakao.API.request({
        url: "/v2/user/me",
        success: function (res) {
          console.log(res);
          setUserInfo({
            ...res.kakao_account.profile,
            email: res.kakao_account.email,
          });
        },
        fail: function (error) {
          console.error(error);
        },
      });
    }
    getKakaoToken(code);

    console.log(userInfo);
  }, []);
  return (
    <>
      <h1>Kakao 유저입니다</h1>
      <br />
      <div className="user-info">
        이름 : <span>{userInfo.nickname}</span>
      </div>
      <br />
      <div className="user-info">
        이메일: <span>{userInfo.email}</span>
      </div>
      <br />
      <div className="user-info">
        프로필 사진{" "}
        <img src={userInfo.profile_image_url} className="user-img" />
      </div>
    </>
  );
}

export default KaKaoUser;
