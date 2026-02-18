import Header from "@/components/header/header";
import { ThemeProvider } from "@/components/theme-provider";
import { HEADER_HEIGHT } from "@/shared/constants/constants";
import clsx from "clsx";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "GamestatsDB | Steam Game Stats Database",
  description:
    "A database of Steam game statistics, including player counts, achievements, and more.",
  applicationName: "GamestatsDB",
  appleWebApp: {
    title: "GamestatsDB",
    capable: true,
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {/* div below serves as a buffer header height */}
          <div className={clsx(`${HEADER_HEIGHT} mt-4`)} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
