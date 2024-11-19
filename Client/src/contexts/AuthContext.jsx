import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const authDetails = JSON.parse(localStorage.getItem("AuthUser"));
    if (authDetails) {
      setAuth(authDetails);
    }
  }, []);

  const handleAuthentication = (authDetails) => {
    setAuth(authDetails);
    localStorage.setItem("AuthUser", JSON.stringify(authDetails));
  };

  const logoutUser = () => {
    localStorage.removeItem("AuthUser");
    setAuth(null);
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        handleAuthentication,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
