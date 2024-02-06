import { Cog, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";
import { Separator } from "./ui/separator";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useMediaQuery } from "usehooks-ts";
import { Button } from "./ui/button";
import { useState } from "react";

export default function Sidebar() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [open, setOpen] = useState(false);
  if (isDesktop) {
    return (
      <div className="my-4 ml-4 mr-0 border shadow rounded-xl bg-primary-foreground">
        <div className="flex flex-col px-1 py-2 mx-1">
          <div>
            <div className="flex items-center justify-center px-2">
              <span className="flex items-center justify-center font-bold">
                <Link
                  to="/"
                  className="flex items-center justify-center mt-2 font-bold"
                >
                  <Cog className="mr-1" size={26} />
                  <span>gearwheel</span>
                  <span className="text-slate-500">/admin</span>
                </Link>
              </span>
            </div>

            <div className="flex flex-col px-4 py-2 mt-2 space-y-4 font-medium md:gap-2">
              <Navbar />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
        <div className="absolute p-2 rounded-full left-6 top-6 z-1 hover:bg-zinc-300">
          <Menu />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="w-full max-w-sm mx-auto h-96">
          <div className="flex items-center justify-center p-4 text-center">
            <Link to="/" className="flex items-center justify-center font-bold">
              <Cog className="mr-1" size={26} />
              <span>gearwheel</span>
              <span className="text-slate-500">/admin</span>
            </Link>
          </div>
          <Navbar />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
