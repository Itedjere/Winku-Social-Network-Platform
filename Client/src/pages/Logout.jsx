import React, { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Logout() {
  const { logout } = useContext(AuthContext);
  useEffect(() => {}, []);
  return <div>Logout</div>;
}
