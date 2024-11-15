import React from "react";
import LoginBanner from "../components/Login/LoginBanner";
import RegisterForm from "../components/Register/RegisterForm";

export default function Register() {
  return (
    <div className="theme-layout">
      <div className="container-fluid pdng0">
        <div className="row merged">
          <LoginBanner />
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
