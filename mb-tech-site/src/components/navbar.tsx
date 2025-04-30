"use client"; // Required for useRouter
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navigate = (path: string) => {
    router.push(path);
    setMenuOpen(false);
    setAboutOpen(false);
  };

  const getLinkClass = (paths: string | string[]) => {
    const isActive = Array.isArray(paths)
      ? paths.includes(pathname)
      : pathname === paths;
    return isActive
      ? "cursor-pointer hover:text-gray-200 underline underline-offset-8 md:underline-offset-4 decoration-orange-400"
      : "cursor-pointer hover:text-gray-200";
  };

  return (
    <div className="bg-transparent px-6 py-6 absolute top-0 w-full z-20">
      <div className="flex justify-between items-center text-white">
        <div className="pl-5 md:pl-9">*Logo*</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex text-[18px] items-center pr-5">
          <div
            onClick={() => navigate("/")}
            className={`px-4 hover:cursor-pointer hover:text-gray-200 ${getLinkClass(
              "/"
            )}`}
          >
            Home
          </div>

          <div className="relative group text-left">
            <div
              onClick={() => navigate("/location")}
              className={`px-4 hover:cursor-pointer hover:text-gray-200 ${getLinkClass(
                [
                  "/my-story",
                  "/portfolio",
                  "/affiliations",
                  "/service-agreement",
                ]
              )}`}
            >
              About
            </div>
          </div>

          <div
            onClick={() => navigate("/donate")}
            className={`px-4 hover:cursor-pointer hover:text-gray-200 ${getLinkClass(
              "/donate"
            )}`}
          >
            Donate
          </div>

          <div
            onClick={() => navigate("/quote")}
            className={`px-4 hover:cursor-pointer hover:text-gray-200 ${getLinkClass(
              "/quote"
            )}`}
          >
            Get Quote
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate("/start-project")}
              className="px-4 cursor-pointer bg-orange-400 text-[rgb(22,26,65)]  h-[40px] w-[150px] hover:border-2 hover:border-white"
            >
              Start Project
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-2xl items-center cursor-pointer"
          onClick={toggleMenu}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`md:hidden bg-[rgb(22,26,65)] text-white fixed top-0 left-0 w-full h-screen z-30 transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Header: Logo + Close */}
        <div className="flex justify-between items-center px-6 py-6">
          <div className="pl-5">*Logo*</div>
          <div onClick={toggleMenu} className="cursor-pointer text-2xl">
            <FiX />
          </div>
        </div>

        {/* Mobile Menu Content Container */}
        <div className="relative h-full w-full overflow-hidden mt-4">
          <div
            className={`absolute top-0 left-0 w-full h-full flex flex-col items-center space-y-6 transition-transform duration-500 ease-in-out ${
              aboutOpen ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <div
              onClick={() => navigate("/")}
              className={`hover:cursor-pointer hover:text-gray-200 text-5xl pt-20 ${getLinkClass(
                "/"
              )}`}
            >
              Home
            </div>

            <div
              onClick={() => setAboutOpen(true)}
              className={`hover:cursor-pointer hover:text-gray-200 text-5xl ${getLinkClass(
                "/about"
              )}`}
            >
              About <span className="md:hidden">&gt;</span>
            </div>

            <div
              onClick={() => navigate("/donate")}
              className={`hover:cursor-pointer hover:text-gray-200 text-5xl ${getLinkClass(
                "/donate"
              )}`}
            >
              Donate
            </div>

            <div
              onClick={() => navigate("/quote")}
              className={`hover:cursor-pointer hover:text-gray-200 text-5xl ${getLinkClass(
                "/quote"
              )}`}
            >
              Get Quote
            </div>

            <br />

            <button
              onClick={() => navigate("/start-project")}
              className="bg-white text-[rgb(21,31,38)] border border-[rgb(21,31,38)] text-5xl h-[100px] w-[320px] hover:bg-gray-200"
            >
              Start Project
            </button>
          </div>

          {/* About Slide Panel (slide in from right) */}
          <div
            className={`absolute top-0 left-0 w-full h-full flex flex-col items-center space-y-6 transition-transform duration-500 ease-in-out ${
              aboutOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div
              onClick={() => setAboutOpen(false)}
              className="cursor-pointer text-zinc-500 hover:text-zinc-400 text-5xl mb-6 text-center pt-20"
            >
              &lt; Back
            </div>

            <div
              onClick={() => navigate("/my-story")}
              className={`text-5xl hover:text-gray-200 {getLinkClass("/my-story")}`}
            >
              My Story
            </div>

            <div
              onClick={() => navigate("/portfolio")}
              className={`text-5xl hover:text-gray-200 {getLinkClass("/portfolio")}`}
            >
              Portfolio
            </div>

            <div
              onClick={() => navigate("/affiliations")}
              className={`text-5xl hover:text-gray-200 {getLinkClass("/affiliations")}`}
            >
              Affiliations
            </div>

            <div
              onClick={() => navigate("/contact")}
              className={`text-5xl hover:text-gray-200 {getLinkClass("/contact")}`}
            >
              Contact
            </div>

            <div
              onClick={() => navigate("/service-agreement")}
              className={`text-5xl hover:text-gray-200 {getLinkClass("/service-agreement")}`}
            >
              Service Agreement
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
