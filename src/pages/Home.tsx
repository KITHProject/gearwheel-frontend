import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import {
  logoutUser,
  useAuthorizationStore,
} from "@/stores/useAuthorizationStore";
import { Cog } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function LoginPanel() {
  const username = useAuthorizationStore((state) => state.username);

  return (
    <div className="flex-col md:flex">
      <div className="border-b">
        <div className="flex justify-between max-w-7xl mx-auto p-4">
          <div className="flex justify-center items-center gap-1">
            GEARWHEEL
            <Cog size={26} />
          </div>
          <Navbar />
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h2 className="text-xl font-bold tracking-tight">{username}</h2>
            <Button
              size="sm"
              variant="destructive"
              onClick={() => {
                logoutUser();
              }}
            >
              Log out
            </Button>
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2"></div>
      </div>
      <ul className="flex justify-center items-center">
        <li>
          <Link to="/test"> Go to Test Page</Link>
        </li>
      </ul>
    </div>
  );
}

export default LoginPanel;
