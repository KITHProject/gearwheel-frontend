import { Cog, LogOut, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  logoutUser,
  useAuthorizationStore,
} from "@/stores/useAuthorizationStore";
import { ModeToggle } from "@/components/mode-toggle";
import Navbar from "@/components/ui/navbar";
import { Button } from "./ui/button";
import { useState } from "react";

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
          <nav className="items-center hidden px-3 mr-2 space-x-6 text-sm font-medium border-r md:flex">
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
                : "fixed md:hidden top-14 right-0 w-96 h-96 bg-gray-50 flex flex-col justify-center items-center border space-y-8"
            }
          >
            <Navbar />
            <div className="flex flex-col items-center gap-2 space-y-4">
              <Link
                to="/"
                className="flex items-center gap-1 text-xl font-medium cursor-pointer hover:text-primary"
              >
                Profile
              </Link>
              <Button
                className="w-8 h-8"
                size="lg"
                variant="destructive"
                onClick={() => {
                  logoutUser();
                  navigate("/");
                }}
              >
                Logout <LogOut size={16} />
              </Button>
            </div>
          </div>

          <div className="items-center hidden gap-2 md:flex">
            <ModeToggle />
            <span>{username}</span>
            <Button
              className="w-8 h-8 ml-2"
              size="icon"
              variant="destructive"
              onClick={() => {
                logoutUser();
                navigate("/");
              }}
            >
              <LogOut size={16} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
