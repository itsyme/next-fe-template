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

const Header = () => {
    return (
        <div className="p-1 flex justify-center">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <text className="text-lg">
                                    Home
                                </text>
                            </NavigationMenuLink>
                        </Link>
                        <Link href="/about">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <text className="text-lg">
                                    About
                                </text>
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>   
        </div>
        
    )
}

export default Header;
