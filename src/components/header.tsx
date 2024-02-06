import {
  logoutUser,
  useAuthorizationStore,
} from "@/stores/useAuthorizationStore";
import { ModeToggle } from "./mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header() {
  const username = useAuthorizationStore((state) => state.username);
  const navigate = useNavigate();
  const firstLetterOfUsername = Array.from(username)[0].toUpperCase();

  return (
    <header className="flex justify-end m-4 border shadow rounded-xl bg-primary-foreground">
      <div className="flex items-center px-4 h-14">
        <div className="flex items-center gap-2 pl-16">
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarFallback>{firstLetterOfUsername}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>{username}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  logoutUser();
                  navigate("/");
                }}
                className="gap-2 focus:text-red-500 focus:cursor-pointer"
              >
                Log out
                <LogOut size={16} />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

export default Header;
