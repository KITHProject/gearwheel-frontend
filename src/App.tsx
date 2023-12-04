import { useAuthorizationStore } from "./stores/useAuthorizationStore";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestPage from "./pages/TestPage";
import ErrorPage from "./pages/ErrorPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UsersPage from "./pages/UsersPage";
import SettingsPage from "./pages/SettingsPage";

const App = () => {
  const queryClient = new QueryClient();

  const authorized = useAuthorizationStore((state) => state.authorized);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            {authorized ? (
              <>
                <Route path="/" element={<Home />}></Route>
                <Route path="/test" element={<TestPage />}></Route>
                <Route path="/users" element={<UsersPage />}></Route>
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
