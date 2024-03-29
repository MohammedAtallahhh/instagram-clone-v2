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
import Head from "next/head";

export const metadata: Metadata = {
  title: "Fotos",
  description: "An application for sharing photos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <Head>
        <title>Fotos</title>
      </Head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
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
            {children}
            {/* <Toaster richColors /> */}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
