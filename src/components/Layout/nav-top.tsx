import { ModeToggle } from "../common/mode-toggle";
import { NavUser } from "../common/nav-user";
import { SidebarTrigger } from "../ui/sidebar";

export default function NavTop() {
  return (
    <nav className="w-full py-0.5 flex justify-between items-center">
      <SidebarTrigger />
      <div className="flex items-center gap-2">
        <ModeToggle />
        <NavUser isNavTop={true} />
      </div>
    </nav>
  );
}
