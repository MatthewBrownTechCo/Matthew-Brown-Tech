"use client";

import Image from "next/image";
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
      <section
        className="bg-[rgb(22,26,65)] text-white text-center space-y-10 bg-cover py-[100px] md:py-[200px] px-[10%]"
        aria-labelledby="hero-title"
      >
        <h1 className="text-5xl md:text-7xl font-bold">
          Custom Websites for Small Businesses, Creators, and Entrepreneurs
        </h1>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto">
          Fast, modern websites tailored to your goals — built by a certified
          software engineer for performance, security, and long-term growth.
        </p>
        <div>
          <button
            onClick={() => navigate("/quote")}
            className="px-4 cursor-pointer bg-[rgb(173,216,230)] hover:bg-[rgb(148,195,211)] h-[70px] w-[300px] text-2xl font-semibold text-black"
          >
            Get A Free Quote
          </button>
        </div>
      </section>
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
            className="px-4 cursor-pointer bg-[rgb(22,26,65)] hover:bg-[rgb(30,36,91)] text-white h-[60px] w-[300px] text-lg font-semibold"
          >
            Start Your Custom Project
          </button>
        </div>
      </div>

      <div className="bg-[rgb(173,216,230)] py-8 text-center space-y-10 px-10">
        <h2 className="text-6xl font-bold">Services</h2>
        <div className="md:flex">
          {/* Service Block 1 */}
          <div className="md:flex-1 group relative">
            <div className="p-6 space-y-6 relative z-10">
              <div className="relative w-[20%] mx-auto aspect-[1/1]">
                <Image
                  src="/images/landing-page-transparent.png"
                  alt="landing-page"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 20vw, 20vw"
                />
              </div>
              <h3 className="text-3xl font-bold">Landing Page</h3>
              <p className="px-[20%]">
                Professional, high-converting landing pages designed for
                clarity, speed, and results
              </p>
            </div>
          </div>

          {/* Service Block 2 */}
          <div className="md:flex-1 group relative">
            <div className="p-6 space-y-6 relative z-10">
              <div className="relative w-[20%] mx-auto aspect-[1/1]">
                <Image
                  src="/images/multi-page-transparent.png"
                  alt="multi-page-transparent-image"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 20vw, 20vw"
                />
              </div>
              <h3 className="text-3xl font-bold">Multi-Page Websites</h3>
              <p className="px-[15%]">
                Multi-page websites built for seamless navigation, performance,
                and long-term growth
              </p>
            </div>
          </div>

          {/* Service Block 3 */}
          <div className="md:flex-1 group relative">
            <div className="p-6 space-y-6 relative z-10">
              <div className="relative w-[20%] mx-auto aspect-[1/1]">
                <Image
                  src="/images/custom-gear-transparent.png"
                  alt="custom-gear"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 20vw, 20vw"
                />
              </div>
              <h3 className="text-3xl font-bold">Custom Design</h3>
              <p className="px-[20%]">
                Unique, custom website designs that align perfectly with your
                brand and goals
              </p>
            </div>
          </div>
        </div>

        <div className="md:flex">
          {/* Service Block 4 */}
          <div className="md:flex-1 group relative">
            <div className="p-6 space-y-6 relative z-10">
              <div className="relative w-[20%] mx-auto aspect-[1/1]">
                <Image
                  src="/images/seo-transparent.png"
                  alt="seo-transparent"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 20vw, 20vw"
                />
              </div>
              <h3 className="text-3xl font-bold">SEO Integration</h3>
              <p className="px-[20%]">
                Strategic SEO optimization to boost visibility, drive traffic,
                and improve search rankings
              </p>
            </div>
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
          </div>
        </div>
      </div>
      <section className="flex md:my-10">
        <div className="relative w-[400px] h-[600px] flex-1 md:mx-10">
          <Image
            src="/images/matt-professional.jpg"
            alt="matt-headshot"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col space-y-8 items-center justify-center text-lg md:mx-10">
          <div className="text-3xl font-bold">Meet The Founder</div>
          <p>
            Based in Columbia, SC, Matt is a software engineer with over a
            decade of experience helping businesses bring their vision to life
            online. He began his journey with platforms like Squarespace,
            Subsplash, and Wix, and now focuses on custom development. His
            primary tool is Next.js using the TypeScript language, but he is
            also fluent in HTML, CSS, JavaScript, and Golang, with additional
            experience in languages like Python and Lua.
          </p>
          <p>
            Matt lives in Columbia with his wife and daughter and takes pride in
            serving local businesses by building websites that reflect their
            unique identity and deliver excellent user experience. His passion
            lies in helping others communicate clearly and confidently through
            purposeful, well-crafted digital design.
          </p>
          <p>
            Whether working with creators, churches, startups, or established
            businesses, Matt brings a thoughtful, service-oriented mindset to
            every project. He believes a great website is more than just
            functional—it should tell a story, inspire trust, and create
            meaningful connections between a brand and its audience.
          </p>
        </div>
      </section>

      <section className="bg-[rgb(22,26,65)] text-white space-y-6 flex flex-col items-center justify-center py-10 md:px-[15%]">
        <div className="text-2xl font-bold">
          Testimony from a satisfied customer
        </div>
        <p className="">
          "Our church previously used plug and play website templates, but we
          weren't getting near the effectiveness and engagement we believed our
          ministry needed. In short, we needed a site tailored to our church,
          ministry, mission, and reach. Not only did Matthew Brown build the
          website we needed from scratch, but he went far above anything we
          asked for and built a beautifully designed, easy-to-use website that
          already sees results byond expectation. In the modern eara, your
          website is the way you will reach or deter people from your church or
          business. I would recommend, and continue to recommend, Matthew Brown
          to help you accomplish your mission!",
        </p>
        <p>
          <i>Submitted by Joshua, Pastor of Dream Church - Columbia, SC</i>
        </p>
      </section>
    </>
  );
}
