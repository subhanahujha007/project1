import type { Metadata } from "next";
import Script from 'next/script'
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
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas/>
        <Navbar/>
        {children}
<Script
  src="https://chatsop-i2kb.onrender.com/sdk/widget.js"
  data-key="chatsop_9fc34d32adb1e958b94d8a26adb09eea08b946302948fc08"
  data-api-base-url="https://chatsop-i2kb.onrender.com"
  strategy="afterInteractive"
/>
      </body>
    </html>
  );
}
