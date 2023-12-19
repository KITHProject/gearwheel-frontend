import { NavLink } from "react-router-dom";

const navigationLinks = [
  {
    name: "Overview",
    to: "/",
  },
  {
    name: "Users",
    to: "/users",
  },
  {
    name: "Products",
    to: "/products",
  },
  // {
  //   name: "Settings",
  //   to: "/settings",
  // },
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
                ? "md:text-sm  text-2xl text-primary font-bold"
                : "text-2xl font-medium transition-colors text-zinc-500 md:text-sm hover:text-primary"
            }
          >
            {link.name}
          </NavLink>
        );
      })}
    </>
  );
}

export default Navbar;
