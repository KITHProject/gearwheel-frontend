import { Cog, LogOut, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
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

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between max-w-7xl mx-auto h-14 px-4 sm:px-8">
        <Link
          to="/"
          className="flex justify-center items-center gap-1 font-bold"
        >
          <Cog size={26} />
          gearwheel
        </Link>
        {/* menu */}
        <div className="flex">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium border-r px-3 mr-2">
            <Navbar />
          </nav>
          {/* hamburger */}
          <div
            onClick={handleHamburgerClick}
            className="md:hidden cursor-pointer z-10 flex items-center gap-2"
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
                className="flex gap-1 items-center text-xl font-medium hover:text-primary cursor-pointer"
              >
                Profile
              </Link>
              <Button
                className="h-8 w-8"
                size="lg"
                variant="destructive"
                onClick={() => {
                  logoutUser();
                }}
              >
                Logout <LogOut size={16} />
              </Button>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <ModeToggle />
            <span>{username}</span>
            <Button
              className="h-8 w-8 ml-2"
              size="icon"
              variant="destructive"
              onClick={() => {
                logoutUser();
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
