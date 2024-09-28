import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SearchContextProvider } from "@/context/search.context";
import ProgressBarProvider from "@/components/layout/ProgressBarProvider";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={`bg-light-bg dark:bg-dark-bg${inter.className}`}>
        <Suspense fallback={<></>}>
          <SearchContextProvider>
            <ProgressBarProvider>
              {children}
              <Footer />
            </ProgressBarProvider>
          </SearchContextProvider>
        </Suspense>
      </body>
    </html>
  );
}
