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
  } from "@/components/ui/navigation-menu"  
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

const Header = () => {
    return (
        <div className="p-2 flex justify-center">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/">
                            <NavigationMenuLink className={navigationMenuTriggerStyle() + " px-5"}>
                                <text className="text-lg">
                                    Home
                                </text>
                            </NavigationMenuLink>
                        </Link>
                        <Link href="/about">
                            <NavigationMenuLink className={navigationMenuTriggerStyle() + " px-5"}>
                                <text className="text-lg">
                                    About
                                </text>
                            </NavigationMenuLink>
                        </Link>
                        <Dialog>
                            <DialogTrigger className="px-5">
                                <text className="text-lg">
                                    Log In
                                </text>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>
                                        <text className="text-lg">
                                            Log In
                                        </text>
                                    </DialogTitle>
                                </DialogHeader>
                                <div className="py-1 w-full">
                                    <Button className="w-full">
                                        Login with Google
                                    </Button>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

export default Header;
