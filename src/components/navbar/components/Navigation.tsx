import { useAuthorizationStore } from "@/stores/useAuthorizationStore";
import { Link } from "react-router-dom";

function Navigation() {
  const navigationList = [
    { url: "/", text: "home" },
    { url: "/test", text: "test" },
    { url: "/admin", text: "admin" },
  ];
  const authorized = useAuthorizationStore((state) => state.authorized);

  return (
    <nav className="flex">
      <ul className="flex">
        {navigationList.map((item, index) => (
          <li key={index} className="mr-4">
            <Link to={authorized?item.url:"/"}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navigation;
