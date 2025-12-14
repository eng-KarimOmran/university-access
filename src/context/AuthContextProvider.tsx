import { useState, type ReactNode } from "react";
import { AuthContext } from "./Context";
import Cookies from "js-cookie";

export default function AuthContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const refreshToken = Cookies.get("token");
  const [isLogin, setIsLogin] = useState(refreshToken ? true : false);

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
