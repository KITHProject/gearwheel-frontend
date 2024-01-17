import Sidebar from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import Users from "@/components/users";

function UsersPage() {
  const token = localStorage.getItem("token");

  return (
    <div className="relative flex min-h-screen bg-zinc-100 dark:bg-primary-foreground">
      <Sidebar />

      <div className="w-full mx-auto max-w-7xl">
        <div className="flex flex-col min-h-screen gap-4 p-8">
          <div className="flex items-center justify-center h-10 md:justify-start">
            <h2 className="text-3xl font-bold tracking-tight">Users</h2>
          </div>
          <div>
            <Users />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersPage;
