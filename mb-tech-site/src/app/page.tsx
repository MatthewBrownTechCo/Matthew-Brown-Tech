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
      <div className="text-center space-y-7 py-10 bg-white">
        <h2 className="text-4xl">Bring Your Vision to Life!</h2>
        <p className="px-[22%]">
          As a professionally trained and certified software engineer and web
          developer, I believe that I can help you reach your target audience
          and then some with a modern, fast, safe, and secure website."
        </p>
        <div>
          <button
            onClick={() => navigate("/quote")}
            className="px-4 cursor-pointer bg-orange-400 h-[40px] w-[200px] hover:bg-[rgb(235,117,27)]"
          >
            Get A Quote
          </button>
        </div>
      </div>

      <div className="bg-orange-400 py-8 text-center space-y-10 px-10">
        <h2 className="text-6xl font-bold">Services</h2>
        <div className="md:flex">
          {/* Service Block 1 */}
          <div className="md:flex-1 group relative">
            <div className="p-6 space-y-6 relative z-10">
              <img
                src="/images/landing-page-transparent.png"
                alt="landing-page"
                className="w-[20%] mx-auto"
              />
              <h3 className="text-3xl font-bold">Landing Page</h3>
              <p className="px-[20%]">
                Professional, high-converting landing pages designed for
                clarity, speed, and results
              </p>
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-black group-hover:transition-all group-hover:duration-500 group-hover:clip-path-diagonal"></div>
          </div>

          {/* Service Block 2 */}
          <div className="md:flex-1 group relative">
            <div className="p-6 space-y-6 relative z-10">
              <img
                src="/images/multi-page-transparent.png"
                alt="multi-page"
                className="w-[20%] mx-auto"
              />
              <h3 className="text-3xl font-bold">Multi-Page Websites</h3>
              <p className="px-[15%]">
                Multi-page websites built for seamless navigation, performance,
                and long-term growth
              </p>
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-black group-hover:transition-all group-hover:duration-500 group-hover:clip-path-diagonal"></div>
          </div>

          {/* Service Block 3 */}
          <div className="md:flex-1 group relative">
            <div className="p-6 space-y-6 relative z-10">
              <img
                src="/images/custom-gear-transparent.webp"
                alt="custom-gear"
                className="w-[20%] mx-auto"
              />
              <h3 className="text-3xl font-bold">Custom Design</h3>
              <p className="px-[20%]">
                Unique, custom website designs that align perfectly with your
                brand and goals
              </p>
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-black group-hover:transition-all group-hover:duration-500 group-hover:clip-path-diagonal"></div>
          </div>
        </div>

        <div className="md:flex">
          {/* Service Block 4 */}
          <div className="md:flex-1 group relative">
            <div className="p-6 space-y-6 relative z-10">
              <img
                src="/images/seo-transparent.png"
                alt="seo"
                className="w-[20%] mx-auto"
              />
              <h3 className="text-3xl font-bold">SEO Optimization</h3>
              <p className="px-[20%]">
                Strategic SEO optimization to boost visibility, drive traffic,
                and improve search rankings
              </p>
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-black group-hover:transition-all group-hover:duration-500 group-hover:clip-path-diagonal"></div>
          </div>

          {/* Service Block 5 */}
          <div className="md:flex-1 group relative">
            <div className="p-6 space-y-6 relative z-10">
              <img
                src="/images/consultation-transparent.png"
                alt="consultation"
                className="w-[20%] mx-auto"
              />
              <h3 className="text-3xl font-bold">Consultation</h3>
              <p className="px-[15%]">
                Expert website consultations and reviews that identify issues
                and uncover growth opportunities
              </p>
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-black group-hover:transition-all group-hover:duration-500 group-hover:clip-path-diagonal"></div>
          </div>

          {/* Service Block 6 */}
          <div className="md:flex-1 group relative">
            <div className="p-6 space-y-6 relative z-10">
              <img
                src="/images/low-maintenance-transparent.png"
                alt="low-maintenance"
                className="w-[20%] mx-auto"
              />
              <h3 className="text-3xl font-bold">Low Maintenance</h3>
              <p className="px-[20%]">
                Reliable websites built for long-term use with minimal ongoing
                maintenance required
              </p>
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-black group-hover:transition-all group-hover:duration-500 group-hover:clip-path-diagonal"></div>
          </div>
        </div>
      </div>
    </>
  );
}
