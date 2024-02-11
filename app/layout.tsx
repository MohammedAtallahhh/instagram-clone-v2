import type { Metadata } from "next";
// import { Toaster } from "sonner";

// import { extractRouterConfig } from "uploadthing/server";
// import { ourFileRouter } from "./api/uploadthing/core";
// import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";

import { ThemeProvider } from "@/components/ThemeProvider";
import AuthProvider from "@/components/AuthProvider";
import SideNav from "@/components/SideNav";

import { inter } from "./fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <div className="flex h-screen relative flex-col md:flex-row md:overflow-hidden">
              <div className="w-20 flex-none lg:w-64 md:border-r">
                <SideNav />
              </div>
              {
                // <NextSSRPlugin
                //   /**
                //    * The `extractRouterConfig` will extract **only** the route configs
                //    * from the router to prevent additional information from being
                //    * leaked to the client. The data passed to the client is the same
                //    * as if you were to fetch `/api/uploadthing` directly.
                //    */
                //   routerConfig={extractRouterConfig(ourFileRouter)}
                // />
              }
              <div className="flex-grow mt-12 md:mt-0 flex-1 w-full md:overflow-y-auto sm:p-6 md:p-12 max-w-7xl mx-auto">
                {children}
              </div>{" "}
            </div>
            {/* <Toaster richColors /> */}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
