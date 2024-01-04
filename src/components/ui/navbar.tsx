import { Box, LayoutDashboard, Settings, Users } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const navigationLinks = [
  {
    name: "Dashboard",
    to: "/",
    icon: <LayoutDashboard />,
  },
  {
    name: "Users",
    to: "/users",
    icon: <Users />,
  },
  {
    name: "Products",
    to: "/products",
    icon: <Box />,
  },
  {
    name: "Settings",
    to: "/settings",
    icon: <Settings />,
  },
];

function Navbar() {
  return (
    <>
      {navigationLinks.map((link) => {
        return (
          <NavLink
            key={link.name}
            to={link.to}
            className={({ isActive }) =>
              isActive
                ? "text-2xl flex gap-2 items-center text-primary font-bold"
                : "text-2xl flex gap-2 items-center font-medium transition-colors text-zinc-500  hover:text-primary"
            }
          >
            {}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>{link.icon}</TooltipTrigger>
                <TooltipContent className="block md:hidden ">
                  {link.name}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <span className="hidden md:flex"> {link.name}</span>
          </NavLink>
        );
      })}
    </>
  );
}

export default Navbar;
