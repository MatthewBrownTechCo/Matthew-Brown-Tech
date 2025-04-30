"use client";

import NavBar from "@/components/navbar";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <header className="bg-[url('/images/navy-background.jpg')] text-white text-center bg-cover text-5xl md:text-8xl py-[100px] md:py-[200px] mb-[1000px]">
        Matthew Brown Tech
      </header>
    </div>
  );
}
