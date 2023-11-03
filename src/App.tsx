import { Button } from "./components/ui/button";
import Home from "./pages/Home";
import LoginPanel from "./pages/LoginPanel";
import { useAuthorizationStore } from "./stores/useAuthorizationStore";

const App = () => {
  const authorized = useAuthorizationStore((state) => state.authorized);
  return (
    <>
      {authorized ? (
        <>
          <Home />
        </>
      ) : (
        <>
          <LoginPanel />
        </>
      )}
    </>
  );
};

export default App;
