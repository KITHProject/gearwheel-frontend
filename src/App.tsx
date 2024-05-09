import {
  setUsername,
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
import LandingPage from "./pages/LandingPage";
import { verifyToken } from "./actions/verify-token";
import { useEffect } from "react";
import DashboardLayout from "./pages/DashboardLayout";

const App = () => {
  const queryClient = new QueryClient();
  const authorized = useAuthorizationStore((state) => state.authorized);
  const token = { token: localStorage.getItem("token") };
  const user = localStorage.getItem("user") as string;

  setUsername(user);
  useEffect(() => {
    verifyToken(token);
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            {authorized ? (
              <>
                <Route path="/" element={<DashboardLayout />}>
                  <Route index element={<DashboardPage />} />
                  <Route path="/test" element={<TestPage />} />
                  <Route path="/users" element={<UsersPage />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/settings" element={<SettingsPage />} />
                </Route>
              </>
            ) : (
              <>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
              </>
            )}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default App;
