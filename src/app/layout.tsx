import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { titleFont } from "@/config/fonts";
import { ClerkProvider } from "@clerk/nextjs";
import Auth from "@/components/auth/Auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "El rincon del vino",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <ClerkProvider>
        <body className={`${titleFont.className}`}>
          <Navbar />
          
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
