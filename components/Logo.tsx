import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { calSans } from "@/app/fonts";
import Image from "next/image";

function Logo() {
  return (
    <Link
      href={"/"}
      // className={buttonVariants({
      //   className:
      //     "hidden md:flex navLink !mb-10 lg:hover:bg-transparent lg:!p-0",
      //   variant: "ghost",
      //   size: "lg",
      // })}
      className="flex items-center justify-center p-2 lg:justify-start mt-4"
    >
      <div className="relative w-9 h-9 lg:hidden">
        <Image src="/fotos.svg" alt="Fotos Logo" fill className="invert" />
      </div>
      <p
        className={`font-semibold text-xl hidden lg:block ${calSans.className}`}
      >
        Fotos
      </p>
    </Link>
  );
}

export default Logo;
