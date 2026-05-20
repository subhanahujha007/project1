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
        <Script>
  (function() {
    const script = document.createElement('script');
    script.src = "https://cdn.chatsop.com/widget.js";
    script.async = true;
    script.onload = function() {
      ChatSOP.init({
        key: "chatsop_904b8fdb6875972c8cab0b8d90e6fc37f3a4a98037ffc587",
        primaryColor: "",
        secondaryColor: "",
        width: 400,
        height: 600,
        position: "bottom-right",
        botName: "",
        botMessage: "",
        backgroundColor: ""
      });
    };
    document.head.appendChild(script);
  })();
</Script>
      </body>
    </html>
  );
}
