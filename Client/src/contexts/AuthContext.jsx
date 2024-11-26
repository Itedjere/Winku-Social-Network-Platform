import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const authDetails = JSON.parse(localStorage.getItem("AuthUser"));
    if (!authDetails) {
      setAuthLoading(false);
      return;
    }

    setAuth(authDetails);
    setAuthLoading(false);
  }, []);

  const handleAuthentication = (authDetails) => {
    setAuth(authDetails);
    localStorage.setItem("AuthUser", JSON.stringify(authDetails));
  };

  const logoutUser = () => {
    localStorage.removeItem("AuthUser");
    setAuth(null);
  };

  const updateUserInfo = (userInfo) => {
    let authDetails = JSON.parse(localStorage.getItem("AuthUser"));
    if (!authDetails) {
      return;
    }
    console.log(userInfo);

    let updatedUser = { ...authDetails.user, ...userInfo };
    console.log(updatedUser);

    authDetails = { ...authDetails, user: updatedUser };
    localStorage.setItem("AuthUser", JSON.stringify(authDetails));
    setAuth(authDetails);
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        handleAuthentication,
        authLoading,
        logoutUser,
        updateUserInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
