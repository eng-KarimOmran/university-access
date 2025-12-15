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
        <main className="w-full md:p-3 bg-sidebar">
          <div className="bg-background p-1 md:rounded-xl min-h-dvh md:min-h-[calc(100dvh-1.5rem)]">
            <NavTop />
            <div className="px-2">
              <Outlet />
            </div>
          </div>
        </main>
      </SidebarProvider>
    );
  }

  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }
}
