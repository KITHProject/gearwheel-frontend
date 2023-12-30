import { Cog, LogOut, Menu, X, User } from "lucide-react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import {
  logoutUser,
  useAuthorizationStore,
} from "@/stores/useAuthorizationStore";
import { ModeToggle } from "@/components/mode-toggle";
import Navbar from "@/components/ui/navbar";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";

function Sidebar() {
  const username = useAuthorizationStore((state) => state.username);
  const [nav, setNav] = useState(false);
  const handleHamburgerClick = () => setNav(!nav);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen border-r">
      <div className="flex flex-col justify-between h-full px-4 mx-auto">
        <div>
          <div className="flex p-4">
            <Link
              to="/"
              className="items-center justify-center hidden font-bold md:flex"
            >
              <Cog className="mr-1" size={26} />
              <span>gearwheel</span>
              <span className="text-slate-500">/admin</span>
            </Link>
            <div
              onClick={handleHamburgerClick}
              className="z-10 flex items-center cursor-pointer md:hidden"
            >
              {!nav ? (
                <Menu className="hover:text-primary" />
              ) : (
                <X className="hover:text-primary" />
              )}
            </div>
          </div>
          {/* menu */}
          <Separator />
          <nav className="flex flex-col px-4 mt-10 space-y-6 font-medium">
            <Navbar />
          </nav>
        </div>
        <div className="py-4">
          <Separator />
          <ModeToggle />
          <div className="flex items-center justify-between gap-2 p-1 ">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {username}
            <span
              className="flex items-center text-2xl font-medium transition-colors cursor-pointer hover:text-red-500"
              onClick={() => {
                logoutUser();
                navigate("/");
              }}
            >
              <LogOut size={16} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
