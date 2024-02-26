import Image from "next/image";
import Hero from "@/app/Hero/page"
import Skills from "./skills/page";
import Footer from "./Footer/page";
export default function Home() {
  return (
    <main className="h-full w-full">
     <div className="flex flex-col h-[850px] gap-20">
      <Hero/>
      <Footer/>
     </div>
    </main>
  );
}
