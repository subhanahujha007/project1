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
                <Script
          src="http://localhost:5173/src/main.tsx"
          data-key="chatsop_ca830444600c9f31a7b58204d76dc21eed45de1f59b05a62"
          data-api-base-url="http://localhost:4000"
          type="module"
          strategy="afterInteractive"
        />

        </body>
    </html>
  );
}
