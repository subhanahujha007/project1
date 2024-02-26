import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./Footer/page";
import "./globals.css";
import Navbar from "./Navbar/page";
import StarsCanvas from "../app/Hero/content/starts/page";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Subhanshu jha portfolio",
  description: "Software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow--x-hidden  `}>
        <StarsCanvas/>
        <Navbar/>
        {children}
        
        </body>
    </html>
  );
}
