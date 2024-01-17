import { Cog, LogOut, Menu, X, User } from "lucide-react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import {
  logoutUser,
  useAuthorizationStore,
} from "@/stores/useAuthorizationStore";
import { ModeToggle } from "@/components/mode-toggle";
import Navbar from "@/components/ui/navbar";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { useMediaQuery } from "usehooks-ts";

export default function Sidebar() {
  const username = useAuthorizationStore((state) => state.username);
  const navigate = useNavigate();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <div className="h-screen border-r">
        <div className="flex flex-col justify-between h-full px-2 mx-auto">
          <div>
            <div className="flex p-4">
              <Link
                to="/"
                className="flex items-center justify-center font-bold"
              >
                <Cog className="mr-1" size={26} />
                <span>gearwheel</span>
                <span className="text-slate-500">/admin</span>
              </Link>
            </div>
            <Separator />
            <div className="flex flex-col px-4 py-2 mt-10 space-y-4 font-medium md:gap-2">
              <Navbar />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center py-4">
            <Separator className="mb-4" />
            <span className="flex items-center justify-center gap-2">
              <span className="hidden gap-2 md:block">Change theme </span>
              <ModeToggle />
            </span>
            <div className="flex items-center justify-between gap-2 p-1 my-1">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="hidden gap-2 md:flex">
                {username}
                <span
                  className="flex items-center text-2xl font-medium transition-colors cursor-pointer hover:text-red-500"
                  onClick={() => {
                    logoutUser();
                    navigate("/");
                    localStorage.removeItem("token");
                  }}
                >
                  <LogOut size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <Drawer>
      <DrawerTrigger>
        <div className="absolute p-2 rounded-full left-6 top-8 z-1 hover:bg-zinc-300">
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
          <div className="flex items-center gap-2 pl-16">
            <ModeToggle />
            <div className="flex items-center justify-between gap-2 ">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="flex gap-2 text-2xl font-medium">
                {username}
                <span
                  className="flex items-center transition-colors cursor-pointer hover:text-red-500"
                  onClick={() => {
                    logoutUser();
                    navigate("/");
                    localStorage.removeItem("token");
                  }}
                >
                  <LogOut size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
