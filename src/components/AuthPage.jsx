import React from "react";
import { useLocation } from "react-router-dom";

function AuthPage() {
  const location = useLocation();
  const code = location.search.split("=")[1];
  const state = location.search.split("=")[2];
  console.log(code);
  return <h1>AuthPage</h1>;
}

export default AuthPage;
