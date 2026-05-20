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
  src="http://localhost:4000/sdk/widget.js"
  data-key="chatsop_904b8fdb6875972c8cab0b8d90e6fc37f3a4a98037ffc587"
  data-api-base-url="http://localhost:4000"
  strategy="afterInteractive"
/>
      </body>
    </html>
  );
}
