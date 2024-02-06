import { Outlet } from "react-router-dom";

function ShopPageLayout() {
  return (
    <>
      <div className="relative flex flex-row h-screen bg-zinc-100 dark:bg-card">
        <Outlet />
      </div>
    </>
  );
}

export default ShopPageLayout;
