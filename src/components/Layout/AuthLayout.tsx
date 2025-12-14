import { AuthContext } from "@/context/Context";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { IconSchool } from "@tabler/icons-react";
import Footer from "./Footer";

export default function AuthLayout() {
  const { isLogin } = useContext(AuthContext);

  if (isLogin) {
    return <Navigate to="/dashboard" replace />;
  }

  if (!isLogin) {
    return (
      <section className="w-full min-h-dvh flex justify-center items-center flex-col gap-4 p-3">
        <div className="flex flex-col items-center gap-2 mt-auto">
          <div className="size-16 flex justify-center items-center rounded-full bg-(--main-color)">
            <IconSchool  className="text-3xl text-white" />
          </div>
          <h1 className="text-3xl font-bold">University Access</h1>
          <p>Administrator Portal</p>
        </div>
        <Outlet />
        <Footer />
      </section>
    );
  }
}
