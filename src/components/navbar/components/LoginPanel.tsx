import { Button } from "@/components/ui/button";
import { loginUser } from "@/stores/useAuthorizationStore";
import Navigation from "./Navigation";

function LoginPanel() {
  return (
    <>
      <div className="flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4"></div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              nie zalgoowano
            </h2>
            <Button
              onClick={() => {
                loginUser("admin", "haslo123");
              }}
            >
              log in
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPanel;
