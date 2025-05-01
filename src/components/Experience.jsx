import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProfileCard from "./Card";
gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useEffect(() => {
    // Animation for movingText with ScrollTrigger
    gsap.to("#page2 #movingText", {
      x: "-160%",
      scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        markers: true,
        pin: true,
        invalidateOnRefresh: true,
      },
    });

    // Create a timeline for sequential image scaling
    const tl = gsap.timeline({
      paused: true, // Start paused, will play when #page2 enters viewport
    });

    // Initially set images to scale 0
    gsap.set(".child-img", { scale: 0 });

    // Add scaling animations to the timeline (one after another)
    gsap.utils.toArray(".child-img").forEach((img) => {
      tl.to(img, {
        scale: 1,
        duration: 0.5, // Each image takes 0.5s to scale
      }, "-=0.2"); // Slight overlap for smoother transition
    });

    // Use ScrollTrigger to play the timeline at the same start as h1
    ScrollTrigger.create({
      trigger: "#page2",
      scroller: "body",
      start: "top 0%", // Same start as h1
      onEnter: () => tl.play(), // Play the timeline when entering #page2
      markers: true,
      invalidateOnRefresh: true,
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      tl.kill();
    };
  }, []);

  return (
    <div
      className="min-h-screen  w-screen z-10 text-gray-300
       uppercase text-6xl relative"
      id="page2"
    >
      <h1
        id="movingText"
        className="lg:text-[200px] text-[100px] top-0
        absolute xl:left-[900px] left-[50px] whitespace-nowrap text-center"
      >
        SKILLS
      </h1>
      <div
        id="parent"
        className="flex flex-wrap  gap-20
         relative px-16 justify-between w-[70vw] items-center overflow-visible"
      >
        {/* Add your images or content here */}
        <ProfileCard/>
      </div>
    </div>
  );
};

export default Experience;
