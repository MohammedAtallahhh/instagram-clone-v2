import { auth } from "@/auth";

import Logo from "../Logo";
import MoreDropdown from "./MoreDropdown";
import NavLinks from "./NavLinks";

async function SideNav() {
  const session = await auth();
  const user = session?.user;

  return (
    <div className="">
      <div className="fixed bottom-0 z-50 flex flex-row flex-1 w-full lg:w-64 h-16 p-2 -ml-3 space-x-2 bg-white border-t md:ml-0 dark:bg-neutral-950 justify-evenly md:relative md:h-full md:justify-between md:flex-col md:space-x-0 md:space-y-2 md:border-r md:border-t-0">
        <Logo />
        <NavLinks user={user} />

        <div
          className="flex-shrink-0 md:!w-full hidden md:flex"
          style={{ width: "calc(1/8 * 100%)" }}
        >
          <MoreDropdown />
        </div>
      </div>
    </div>
  );
}

export default SideNav;
