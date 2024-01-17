import { Box, LayoutDashboard, Settings, Users } from "lucide-react";
import { NavLink } from "react-router-dom";

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
    <nav>
      {navigationLinks.map((link) => {
        return (
          <NavLink
            key={link.name}
            to={link.to}
            className={({ isActive }) =>
              isActive
                ? "text-4xl md:text-2xl text-primary font-bold"
                : "text-4xl md:text-2xl font-medium transition-colors text-zinc-500  hover:text-primary"
            }
          >
            <span className="flex items-center gap-2 pl-20 my-4 md:pl-0">
              {link.icon}
              {link.name}
            </span>
          </NavLink>
        );
      })}
    </nav>
  );
}

export default Navbar;
