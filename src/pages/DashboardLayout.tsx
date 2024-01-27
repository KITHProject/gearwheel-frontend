import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { Outlet } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";

function DashboardLayout() {
  return (
    <>
      <div className="relative flex flex-col h-screen md:flex-row md:overflow-hidden bg-zinc-100 dark:bg-primary-foreground">
        <Sidebar />
        <div className="flex flex-col w-full mx-auto">
          <Header />
          <div className="mx-4 mt-0 mb-4 border shadow rounded-xl bg-primary-foreground">
            <ScrollArea className="p-4 border rounded-md ">
              <Outlet />
            </ScrollArea>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
