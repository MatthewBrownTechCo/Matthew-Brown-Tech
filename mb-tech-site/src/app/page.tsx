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

      <div className="bg-[rgb(173,216,230)] py-16 text-center space-y-10 px-10">
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

      <section className="flex md:mt-16">
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

      <section className="bg-[rgb(249,249,249)] text-black text-base rounded-xl shadow-lg space-y-6 flex flex-col items-center justify-center py-10 my-16 px-8 md:mx-[10%]">
        <div className="text-2xl font-semibold text-center text-[rgb(22,26,65)]">
          What Others Are Saying
        </div>
        <p className="relative italic text-center max-w-3xl">
          &quot;Our church previously used plug and play website templates, but
          we weren't getting the effectiveness and engagement we believed our
          ministry needed. Not only did Matthew Brown build the website we
          needed from scratch, but he went far above anything we asked for. In
          the modern era, your website is the way you will reach—or deter—people
          from your church or business. I continue to recommend Matthew Brown to
          help you accomplish your mission!&quot;
        </p>
        <p className="text-sm italic text-gray-600 text-center">
          — Joshua, Pastor of Dream Church - Columbia, SC
        </p>
      </section>

      <section className="bg-[rgb(173,216,230)] text-black py-16 px-[20%] space-y-8">
        <h2 className="text-4xl font-bold text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold">How long does a website take?</h3>
            <p>
              While this is near impossible to determine because it solely
              depends on project complexity, a basic site with an average level
              of complexity would take 1-2 weeks, though this is not guaranteed.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">What tools do you use?</h3>
            <p>
              For fully custom sites, I build primarily with Next.js, but can
              also use template based sites like Webflow, Squarespace, or
              WordPress if preferred.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Do you work with churches or nonprofit organizations?
            </h3>
            <p>
              Yes. What sets Matthew Brown Tech apart is Matthew&apos;s decade
              of firsthand ministry experience. He understands the unique needs,
              language, and goals of churches and non-profits — and knows how to
              structure websites that clearly communicate your vision, mission,
              and core beliefs in a way that resonates with your audience.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Do you offer payment plans?</h3>
            <p>
              Yes. I typically require a 50% deposit up front, with the
              remainder due upon completion. Custom payment plans are available
              for larger projects.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              What if I already have a website? Can you improve or rebuild it?
            </h3>
            <p>
              Absolutely. I offer site audits, redesigns, and rebuilds for
              outdated or underperforming websites. We can keep what works and
              improve what doesn&apos;t.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="text-center bg-[rgb(173,216,230)] space-y-10 py-10">
        <div className="text-4xl font-bold">Affiliations</div>
        <div className="space-y-3">
          <p className="text-xl font-bold">CourseCareers</p>
          <p>Get $50 off of your course using the button below!</p>
          <a
            href="https://coursecareers.com/a/Matthew?course=software-dev-fundamentals"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center px-4 bg-white hover:bg-gray-100 text-white h-[60px] w-[300px] text-lg font-semibold rounded"
          >
            <Image
              src="/images/coursecareers-button.webp"
              alt="CourseCareers Logo"
              width={270}
              height={240}
            />
          </a>
        </div>
      </section> */}
    </>
  );
}
