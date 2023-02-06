import { useState, useEffect } from "react";

function FacebookUser() {
  const [userInfo, setuserInfo] = useState({});
  return (
    <>
      <h1>Facebook 유저입니다</h1>
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

export default FacebookUser;
