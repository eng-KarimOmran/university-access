import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  IconHome,
  IconLogin,
  IconSchool,
  IconUsers,
} from "@tabler/icons-react";
import { Link, NavLink } from "react-router";
import { Separator } from "@/components/ui/separator";
import { NavUser } from "./nav-user";
import type { ReactNode } from "react";

interface NavLink {
  title: string;
  path: string;
  icon: ReactNode;
}

export function AppSidebar() {
  const navLinks: NavLink[] = [
    {
      title: "Home",
      path: "/dashboard",
      icon: <IconHome />,
    },
    {
      title: "Students Management",
      path: "/students-management",
      icon: <IconUsers />,
    },
    {
      title: "Gate Access Logs",
      path: "/gate-access-logs",
      icon: <IconLogin />,
    },
  ];
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
              size="lg"
            >
              <Link to="/dashboard">
                <IconSchool className="size-5! text-(--main-color)" />
                <span className="text-base font-semibold">
                  University Access
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <Separator />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {navLinks.map((link) => (
              <SidebarMenuItem key={link.path}>
                <SidebarMenuButton asChild>
                  <NavLink to={link.path}>
                    {link.icon}
                    {link.title}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <Separator />
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
