import { Cog, LogOut, Menu, X, User } from "lucide-react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import {
  logoutUser,
  useAuthorizationStore,
} from "@/stores/useAuthorizationStore";
import { ModeToggle } from "@/components/mode-toggle";
import Navbar from "@/components/ui/navbar";
import { Button } from "./ui/button";
import { useState } from "react";
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
  const [nav, setNav] = useState(false);
  const handleHamburgerClick = () => setNav(!nav);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between px-4 mx-auto max-w-7xl h-14 sm:px-8">
        <Link to="/" className="flex items-center justify-center font-bold">
          <Cog className="mr-1" size={26} />
          gearwheel<span className="text-slate-500">/admin</span>
        </Link>
        {/* menu */}
        <div className="flex">
          <nav className="items-center hidden px-4 mr-2 space-x-6 text-sm font-medium border-r md:flex">
            <Navbar />
          </nav>
          {/* hamburger */}
          <div
            onClick={handleHamburgerClick}
            className="z-10 flex items-center gap-2 cursor-pointer md:hidden"
          >
            <ModeToggle />
            {!nav ? (
              <Menu className="hover:text-primary" />
            ) : (
              <X className="hover:text-primary" />
            )}
          </div>

          <div
            className={
              !nav
                ? "hidden"
                : "fixed md:hidden top-14 right-0 w-44 h-64 bg-zinc-50 flex flex-col border space-y-4 p-4 justify-center"
            }
          >
            <Navbar />

            <div className="flex flex-col space-y-4">
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  isActive
                    ? "md:text-sm  text-2xl text-primary font-bold"
                    : "text-2xl font-medium transition-colors text-zinc-500 md:text-sm hover:text-primary"
                }
              >
                Profile
              </NavLink>
              <span
                className="flex items-center gap-2 text-2xl font-medium transition-colors cursor-pointer text-zinc-500 md:text-sm hover:text-primary"
                onClick={() => {
                  logoutUser();
                  navigate("/");
                }}
              >
                Logout <LogOut size={16} />
              </span>
            </div>
          </div>
          <div className="items-center hidden md:flex">
            <ModeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger className="gap-2 p-2 rounded-lg hover:bg-accent">
                <User />
                <span className="sr-only">User Profile</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="hidden md:block min-w-none">
                <DropdownMenuLabel className="px-4">
                  {username}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="h-10 px-4 py-2 cursor-pointer ">
                  <Link to="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="h-10 px-4 py-2 cursor-pointer"
                  onClick={() => {
                    logoutUser();
                    navigate("/");
                    localStorage.clear();
                  }}
                >
                  Logout
                  <LogOut className="ml-2" size={16} />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
