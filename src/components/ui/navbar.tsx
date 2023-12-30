import { Bike, LayoutDashboard, Settings, Users } from "lucide-react";
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
    icon: <Bike />,
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
            {link.icon} <span className="hidden md:flex"> {link.name}</span>
          </NavLink>
        );
      })}
    </>
  );
}

export default Navbar;
