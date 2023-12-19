import {
  setAuthorized,
  useAuthorizationStore,
} from "./stores/useAuthorizationStore";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestPage from "./pages/TestPage";
import ErrorPage from "./pages/ErrorPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UsersPage from "./pages/UsersPage";
import SettingsPage from "./pages/SettingsPage";
import ProductsPage from "./pages/ProductsPage";
import { useEffect } from "react";

const App = () => {
  const queryClient = new QueryClient();
  // Example using async/await
  const checkAuthentication = async () => {
    const authToken = localStorage.getItem("token");
    if (authToken) {
      // Validate the token against the server

      setAuthorized(true);
    }
  };

  // Call the function when the app loads
  useEffect(() => {
    checkAuthentication();
  }, []);

  const authorized = useAuthorizationStore((state) => state.authorized);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            {authorized ? (
              <>
                <Route path="/" element={<DashboardPage />}></Route>
                <Route path="/test" element={<TestPage />}></Route>
                <Route path="/users" element={<UsersPage />}></Route>
                <Route path="/products" element={<ProductsPage />}></Route>
                <Route path="/settings" element={<SettingsPage />}></Route>
              </>
            ) : (
              <>
                <Route path="/" element={<LoginPage />}></Route>
              </>
            )}
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default App;
