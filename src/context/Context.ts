import type { IAuthContext } from "@/types/auth";
import { createContext } from "react";

// AuthContext
const authContext: IAuthContext = {
  isLogin: false,
  setIsLogin: () => {},
};
export const AuthContext = createContext(authContext);
