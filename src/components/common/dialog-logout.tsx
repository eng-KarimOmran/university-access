import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { useContext } from "react";
import { AuthContext } from "@/context/Context";
import Cookies from "js-cookie";

export default function DialogLogout({ email }: { email: string }) {
  const { setIsLogin } = useContext(AuthContext);
  const logout = () => {
    Cookies.remove("token");
    setIsLogin(false);
  };
  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-2 w-full">
        <LogOut />
        Log out
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle className="text-center">
            Are you sure you want to log out?
          </DialogTitle>
          <DialogDescription>
            Log out of University Access as {email}?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={logout}>Logout</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
