import { Button } from "./components/ui/button";
import Home from "./components/navbar/components/LogoutPanel";
import LoginPanel from "./components/navbar/components/LoginPanel";
import { useAuthorizationStore } from "./stores/useAuthorizationStore";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import LogoutPanel from "./components/navbar/components/LogoutPanel";
import ErrorPage from "./pages/ErrorPage";
import Products from "./pages/Products";
import Navigation from "./components/navbar/components/Navigation";
const App = () => {
  const authorized = useAuthorizationStore((state) => state.authorized);
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          {authorized ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/test" element={<Products />} />
            </>
          ) : (
            <Route path="/" element={<LoginPanel />} />
          )}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
