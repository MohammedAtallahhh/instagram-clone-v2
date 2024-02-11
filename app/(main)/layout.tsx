import type { Metadata } from "next";

import SideNav from "@/components/SideNav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen md:flex-row md:overflow-hidden">
      <div className="flex-none w-20 lg:w-64 md:border-r">
        <SideNav />
      </div>
      <div className="flex-1 flex-grow w-full mx-auto mt-12 md:mt-0 md:overflow-y-auto sm:p-6 md:p-12 max-w-7xl">
        {children}
      </div>{" "}
    </div>
  );
}
