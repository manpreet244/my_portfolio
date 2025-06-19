import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GoStarFill } from "react-icons/go";
import { EXPERIENCE } from "../data/stack.js";

gsap.registerPlugin(ScrollTrigger);

const MyExperience = () => {
  const containerRef = useRef(null);
  const rotateRef = useRef(null);

  useGSAP(() => {
    if (rotateRef.current) {
      gsap.to(rotateRef.current, {
        rotate: 360,
        duration: 6,
        ease: "linear",
        repeat: -1,
      });
    }
  }, []);

  useGSAP(() => {
    const sections = containerRef.current?.querySelectorAll(".experience-section");

    if (!sections?.length) return;

    sections.forEach((section) => {
      const title = section.querySelector(".experience-title");
      const date = section.querySelector(".experience-date");
      const desc = section.querySelector(".experience-description");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          end: "bottom 60%",
          scrub: 1,
        },
      });

      tl.from([title, date], {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        ease: "power1.out",
      }).from(desc, {
        opacity: 0,
        x: 30,
        ease: "power1.out",
      }, "-=0.3");
    });

    const handleLoad = () => ScrollTrigger.refresh();
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, { scope: containerRef });

  return (
    <>
      <div className="mb-24">
        <div className="pl-10 md:pl-44 flex justify-start items-center gap-4">
        <span ref={rotateRef} className="text-orange-600 text-2xl inline-block">
          <GoStarFill />
        </span>
        <h2 className="roboto-flex-200 text-white text-2xl md:text-3xl font-bold my-6 tracking-wider">
          MY EXPERIENCE
        </h2>
      </div>

      <div
        ref={containerRef}
        className="flex relative flex-col gap-16 px-4 md:px-8 w-full m-2 lg:w-[80%] bg-[#212121] mx-auto text-white"
      >
        {EXPERIENCE.map((exp, index) => (
          <div
            key={index}
            className="experience-section grid sm:grid-cols-12 gap-6 items-start"
          >
            <div className="sm:col-span-5">
              <h3 className="experience-title anton-regular text-5xl lg:text-7xl text-[#b5b5b5] uppercase leading-tight">
                {exp.role}
              </h3>
              <p className="experience-date text-gray-400 mt-2 text-sm sm:text-base">
                {exp.duration}
              </p>
            </div>
            <div className="sm:col-span-7">
              <p className="experience-description text-white text-sm sm:text-base leading-relaxed">
                {exp.description.trim()}
              </p>
            </div>
          </div>
        ))}
      </div>
        </div>
    </>
  );
};

export default MyExperience;
