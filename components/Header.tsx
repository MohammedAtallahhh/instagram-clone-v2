import { Heart, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed md:hidden top-0 flex items-center justify-between gap-4 dark:bg-neutral-950 w-full z-50 border-b border-zinc-300 dark:border-neutral-700 px-3 py-2 sm:-ml-6 h-20">
      <Link href="/" className="block w-8 h-8 relative">
        <Image src="/fotos.svg" fill alt="Fotos Logo" className="invert" />
      </Link>

      {/* <div className="flex items-center space-x-2"> */}
      <div className="flex items-center text-neutral-600 dark:text-neutral-400 bg-zinc-100 dark:bg-neutral-800 gap-x-2 rounded-md px-3.5 py-1.5 flex-1">
        <Search className="h-4 w-4" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent placeholder:text-neutral-600 dark:placeholder:text-neutral-400 flex-1 outline-none w-full"
        />
      </div>
      {/* </div> */}
      <Button size={"icon"} variant={"ghost"}>
        <Heart className="w-full h-full p-1.5 hover:fill-red-500" />
      </Button>
    </header>
  );
};

export default Header;
