import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-center w-screen">
      <div className="flex basis-full justify-center max-w-screen-lg">
        <div className="p-2 flex justify-between w-full">
          <Image src="/logo.png" width="100" height="30" alt={""} />
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/">
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle() + " px-5"}
                  >
                    <text className="text-lg">Home</text>
                  </NavigationMenuLink>
                </Link>
                <Link href="/about">
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle() + " px-5"}
                  >
                    <text className="text-lg">About</text>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Dialog>
            <DialogTrigger className="px-1">
              <Button className="text-md">Log In</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  <text className="text-lg">Log In</text>
                </DialogTitle>
              </DialogHeader>
              <div className="py-1 w-full">
                <Button className="w-full">Login with Google</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Header;
