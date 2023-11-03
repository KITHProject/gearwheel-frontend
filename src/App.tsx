import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { Button } from "./components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "./components/ui/card";
import {
  loginUser,
  logoutUser,
  useAuthorizationStore,
} from "./stores/useAuthorizationStore";
import LoginPanel from "./pages/LoginPanel";
import Home from "./pages/Home";

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
