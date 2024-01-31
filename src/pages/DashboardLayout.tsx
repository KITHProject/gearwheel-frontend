import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { Outlet } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";

function DashboardLayout() {
  return (
    <>
      <div className="relative flex flex-row h-screen bg-zinc-100 dark:bg-card">
        <Sidebar />
        <div className="flex flex-col w-full h-full md:w-[71%] lg:w-full">
          <Header />
          <div className="mx-4 mt-0 mb-4 border shadow rounded-xl bg-primary-foreground">
            <div className="p-4 border rounded-md ">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
