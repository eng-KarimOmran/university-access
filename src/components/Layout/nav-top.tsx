import { ModeToggle } from "../common/mode-toggle";
import { NavUser } from "../common/nav-user";
import { SidebarTrigger } from "../ui/sidebar";

export default function NavTop() {
  return (
    <nav className="bg-accent w-full py-1 px-2 flex justify-between items-center rounded-2xl">
      <SidebarTrigger />
      <div className="flex items-center gap-2">
        <ModeToggle />
        <NavUser isNavTop={true} />
      </div>
    </nav>
  );
}
