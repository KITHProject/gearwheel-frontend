import { tokenVerify } from "@/actions/token-verify";
import Sidebar from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import Users from "@/components/users";

function UsersPage() {
  const token = localStorage.getItem("token");

  return (
    <div className="flex bg-zinc-100 dark:bg-primary-foreground">
      <Sidebar />
      <Users />
      <Button onClick={() => tokenVerify(token)}>Verify</Button>
    </div>
  );
}

export default UsersPage;
