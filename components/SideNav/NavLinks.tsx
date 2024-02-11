"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { buttonVariants } from "../ui/button";
import ProfileLink from "./ProfileLink";

import { cn } from "@/lib/utils";

import {
  Clapperboard,
  Compass,
  Heart,
  Home,
  MessageCircle,
  PlusSquare,
  Search,
} from "lucide-react";
import { User } from "next-auth";

const links = [
  { name: "Home", href: "/", icon: Home },
  {
    name: "Search",
    href: "/search",
    icon: Search,
    hideOnMobile: true,
  },
  { name: "Explore", href: "/explore", icon: Compass },
  {
    name: "Reels",
    href: "/reels",
    icon: Clapperboard,
  },
  {
    name: "Messages",
    href: "/messages",
    icon: MessageCircle,
  },
  {
    name: "Notifications",
    href: "/notifications",
    icon: Heart,
    hideOnMobile: true,
  },
  {
    name: "Create",
    href: "/create",
    icon: PlusSquare,
  },
];

function NavLinks({ user }: { user?: User }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-row flex-1 gap-2 nav-links md:flex-col justify-evenly md:justify-center">
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={buttonVariants({
              variant: isActive ? "secondary" : "ghost",
              className: cn("navLink", {
                "hidden md:flex": link.hideOnMobile,
              }),
              size: "lg",
            })}
            style={{ width: "calc(1/7 * 100%)" }}
          >
            <LinkIcon className="w-full h-full lg:w-[unset] lg:h-[unset]" />
            <p
              className={`${cn("hidden lg:block", {
                "font-extrabold": isActive,
              })}`}
            >
              {link.name}
            </p>
          </Link>
        );
      })}
      {user && <ProfileLink user={user} />}
    </div>
  );
}

export default NavLinks;
