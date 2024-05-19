import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="relative grid min-h-screen grid-cols-1 lg:grid-cols-4 xl:grid-cols-6 bg-zinc-100 dark:bg-card">
      <Sidebar />
      <div className="flex flex-col w-full h-full lg:col-span-3 xl:col-span-5">
        <Header />
        <div className="mx-4 mt-0 mb-4 border shadow rounded-xl bg-primary-foreground">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
