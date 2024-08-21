import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/context/AuthContext";
import { AuroraBackgroundDemo } from "@/components/AuroraBackgroundDemo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Algomania",
  description: "Fall in love with algos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
      <body className={inter.className}>
        <AuroraBackgroundDemo>
          <main className="h-[80vh] w-full">{children}</main>
        </AuroraBackgroundDemo>
      </body>
      </AuthProvider>
    </html>
  );
}
