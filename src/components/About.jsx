import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GoStarFill } from "react-icons/go";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
    const section = containerRef.current;
    if (!section) return;

    const title = section.querySelector(".about-title");
    const description = section.querySelector(".about-description");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        end: "bottom 60%",
        scrub: 1,
      },
    });

    tl.from(title, {
      opacity: 0,
      y: 40,
      ease: "power1.out",
    }).from(description, {
      opacity: 0,
      x: 30,
      ease: "power1.out",
    }, "-=0.3");

  }, { scope: containerRef });

  return (
    <>
      <div className="mb-20">
        <div className="pl-10 md:pl-44 flex justify-start 
      items-center gap-4">
        <span ref={rotateRef} className="text-orange-600 text-2xl inline-block">
          <GoStarFill />
        </span>
        <h2 className="roboto-flex-200 text-white text-2xl md:text-3xl font-bold my-6 tracking-wider">
          ABOUT ME
        </h2>
      </div>

      <div
        ref={containerRef}
        className="grid sm:grid-cols-12 gap-6 px-4 md:px-8 w-full m-2 lg:w-[80%] bg-[#212121] mx-auto text-white"
      >
        <div className="sm:col-span-5">
          <h3 className="about-title text-2xl lg:text-7xl text-[#b5b5b5] leading-tight">
            Hi, I'm Manpreet.
          </h3>
        </div>
        <div className="sm:col-span-7">
          <p className="about-description roboto-flex text-white text-sm sm:text-base leading-relaxed">
I'm a full stack developer with a frontend focus .I love working on responsive UI,
smooth animations, and creating great user experiences.
<br/>
I work with Node.js, Express, and MongoDB , REST API's to build simple APIs and server-side logic.
<br/>
I'm always exploring new technologies and improving my skills to build better, faster, and more useful applications.
          </p>
        </div>
      </div>
        </div>
    </>
  );
};

export default About;
