import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FRONTEND_STACK } from "../data/stack.js";
import { useGSAP } from "@gsap/react";
import { GoStarFill } from "react-icons/go";

gsap.registerPlugin(ScrollTrigger);

const MyStacks = ({id}) => {
  const containerRef = useRef(null);
  const rotateRef = useRef(null);

useGSAP(() => {
  if (!rotateRef.current) return;

  gsap.to(rotateRef.current, {
    rotate: 360,
    duration: 6,
    ease: "linear",
    repeat: -1,
    
  });
}, []);


  useGSAP(() => {
    const sections = containerRef.current?.querySelectorAll(".stack-section");

    if (!sections?.length) return;

    sections.forEach((section) => {
      const title = section.querySelector(".stack-title");
      const items = section.querySelectorAll(".stack-item");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          end: "bottom 60%",
          scrub: 1,
          markers: false,
        },
      });

      tl.from(title, {
        opacity: 0,
        y: 40,
        ease: "power1.out",
      }).from(
        items,
        {
          opacity: 0,
          y: 40,
          ease: "power1.out",
          stagger: 0.15,
        },
        "+=0.2"
      );
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
     <div className="mb-20" id={id}>
       <div className="pl-10 md:pl-44 flex justify-start items-center gap-4">
        <span
          ref={rotateRef}
          className="text-orange-600 text-2xl inline-block"
        >
          <GoStarFill />
        </span>
        <h2 className="roboto-flex-200  text-white text-2xl md:text-3xl font-bold my-6 tracking-wider">
          MY STACK
        </h2>
      </div>

      <div
        ref={containerRef}
        className="flex relative flex-col gap-16 px-4 md:px-8 w-full m-2 lg:w-[80%] bg-[#212121] mx-auto text-white"
      >
        {Object.entries(FRONTEND_STACK).map(([category, techs]) => (
          <div
            key={category}
            className="stack-section grid sm:grid-cols-12 gap-6 items-start"
          >
            <div className="sm:col-span-5 flex items-start">
              <h3 className="stack-title anton-regular text-5xl lg:text-7xl text-[#b5b5b5] uppercase leading-tight">
                {category}
              </h3>
            </div>
            <div className="sm:col-span-7 flex flex-wrap gap-x-8 gap-y-6">
              {techs.map((tech) => (
                <span
                  className="stack-item flex gap-3 items-center"
                  key={tech.name}
                >
                  <img
                    className="w-9 h-9 md:w-10 md:h-10 border-0 rounded-xl object-contain"
                    src={tech.icon}
                    alt={tech.name}
                  />
                  <h3 className="text-lg md:text-xl font-semibold whitespace-nowrap">
                    {tech.name}
                  </h3>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
     </div>
    </>
  );
};

export default MyStacks;
