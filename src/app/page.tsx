"use client";
import Navbar from "@/app/components/navbar";
import PicafeLogo from "./components/logo";

export default function Home() {
  
  return (
    <div className="flex flex-col items-center justify-center w-screen h-full"> 
      <Navbar className="my-16" animated={true} />

      <div>
        <div className="flex sm:flex-row flex-col z-10 h-auto duration-1000 cursor-default">
          <PicafeLogo textSize="sm:text-8xl text-6xl" animated={true} />
        </div>
      </div>

      <div className={`mx-4 my-16 text-center ${false ? "" : "animate-fade-in"}`}>
        <div className="font-pixel text-lg text-zinc-500">
          Hi, my name is Surya.
          <br />I am an engineering student at Western University who codes and creates.
          <br /> I specialize in full stack web development and hardware.
        </div>
      </div>
    </div>
  );
}
