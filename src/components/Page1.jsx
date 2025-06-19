import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import Hero from "./Hero";
import { FiMenu, FiX } from "react-icons/fi"; // Menu icons

const Page1 = () => {
  const parent = useRef(null);
  const tl = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close mobile menu on navigation
    }
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline();

      tl.current.from("#nav h3", {
        y: -50,
        opacity: 0,
        delay: 0.4,
        duration: 0.8,
        stagger: 0.4,
      });
    }, parent);

    return () => ctx.revert();
  }, []);

  return (
    <div className="text-white w-screen p-6 rowdies-regular">
      <div
        ref={parent}
        id="nav"
        className="flex justify-between items-center px-6 md:px-24 relative z-50"
      >
        <h3 className="text-2xl md:text-3xl cursor-pointer" onClick={() => scrollToSection("about")}>
          Manpreet
        </h3>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12 text-xl">
          <h3 className="cursor-pointer" onClick={() => scrollToSection("about")}>About</h3>
          <h3 className="cursor-pointer" onClick={() => scrollToSection("projects")}>Projects</h3>
          <h3 className="cursor-pointer" onClick={() => scrollToSection("contact")}>Contact</h3>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden text-3xl cursor-pointer z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-20 left-0 w-full bg-[#212121] text-white flex flex-col items-center gap-8 py-6 transition-all duration-300 ease-in-out ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } md:hidden`}
        >
          <h3 className="text-xl cursor-pointer" onClick={() => scrollToSection("about")}>About</h3>
          <h3 className="text-xl cursor-pointer" onClick={() => scrollToSection("projects")}>Projects</h3>
          <h3 className="text-xl cursor-pointer" onClick={() => scrollToSection("contact")}>Contact</h3>
        </div>
      </div>

      <Hero />
    </div>
  );
};

export default Page1;
