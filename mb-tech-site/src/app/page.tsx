"use client";

import NavBar from "@/components/navbar";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const navigate = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <NavBar />
      <header className="bg-[url('/images/navy-background.jpg')] text-white text-center bg-cover text-5xl md:text-8xl py-[100px] md:py-[200px]">
        Matthew Brown Tech
      </header>
      <div className="text-center space-y-7 py-10">
        <h2 className="text-4xl">Bring Your Vision to Life!</h2>
        <p className="px-[22%]">
          As a professionally trained and certified software engineer and web
          developer, I believe that I can help you reach your target audience
          and then some with a modern, fast, safe, and secure website."
        </p>
        <div>
          <button
            onClick={() => navigate("/quote")}
            className="px-4 cursor-pointer bg-orange-400 text-[rgb(22,26,65)]  h-[40px] w-[200px] hover:bg-[rgb(235,117,27)]"
          >
            Get A Quote
          </button>
        </div>
      </div>
      <div className="bg-[rgb(22,26,65)] text-white py-10 text-center">
        <h2 className="text-4xl">Services</h2>
      </div>
    </>
  );
}
