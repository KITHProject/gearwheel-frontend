import { Link } from "react-router-dom";

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
    to: "/",
  },
  {
    name: "Settings",
    to: "/settings",
  },
];

function Navbar() {
  return (
    <>
      {navigationLinks.map((link) => {
        return (
          <Link
            key={link.name}
            to={link.to}
            className="text-xl md:text-sm font-medium transition-colors hover:text-primary"
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}

export default Navbar;
