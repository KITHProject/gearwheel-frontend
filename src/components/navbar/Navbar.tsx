import App from "@/App";
import AdminPanel from "@/pages/AdminPanel";
import LoginPanel from "@/components/navbar/components/LoginPanel";
import Products from "@/pages/Products";
import { useAuthorizationStore } from "@/stores/useAuthorizationStore";
import { Contact, Home, Layout } from "lucide-react";
import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import LoginPanell from "./components/LoginPanel";
import LogoutPanel from "@/components/navbar/components/LogoutPanel";
const Navbar = () => {
  const authorized = useAuthorizationStore((state) => state.authorized);
  return (
    <>
      {authorized ? (
        <>
          <LogoutPanel />
        </>
      ) : (
        <>
          <LoginPanel />
        </>
      )}
      
    </>
  );
};

export default Navbar;
