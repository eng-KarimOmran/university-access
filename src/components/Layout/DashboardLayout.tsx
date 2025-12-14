import { AuthContext } from "@/context/Context";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { SidebarProvider } from "../ui/sidebar";
import { AppSidebar } from "../common/app-sidebar";
import NavTop from "./nav-top";
import Cookies from "js-cookie";

export default function DashboardLayout() {
  const { isLogin } = useContext(AuthContext);
  const defaultOpen = Cookies.get("sidebar_state") === "true";

  if (isLogin) {
    return (
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        <main className="w-full flex flex-col gap-2 p-2">
          <NavTop />
          <div className="w-full rounded-lg p-2">
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
    );
  }

  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }
}
