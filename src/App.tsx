import { useAuthorizationStore } from "./stores/useAuthorizationStore";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestPage from "./pages/TestPage";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  const authorized = useAuthorizationStore((state) => state.authorized);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {authorized ? (
            <>
              <Route path="/" element={<Home />}></Route>
              <Route path="/test" element={<TestPage />}></Route>
            </>
          ) : (
            <>
              <Route path="/" element={<LoginPage />}></Route>
            </>
          )}
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
