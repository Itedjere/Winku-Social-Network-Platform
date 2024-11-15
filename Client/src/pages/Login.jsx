import React from "react";
import LoginBanner from "../components/Login/LoginBanner";
import LoginForm from "../components/Login/LoginForm";

export default function Login() {
  return (
    <div className="theme-layout">
      <div className="container-fluid pdng0">
        <div className="row merged">
          <LoginBanner />
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
