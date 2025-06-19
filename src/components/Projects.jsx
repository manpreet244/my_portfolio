import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "./Card";
import projects from "../projects.json"; // Assuming you have a projects.js file for the images

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
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
        pin: true,
        
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
        text-6xl relative"
      id="page2"
    >
      <h1 style={{ fontFamily: 'philosopher-regular', fontWeight: 10 }}
        id="movingText"
        className="lg:text-[150px] text-[100px] top-2
        absolute xl:left-[900px] left-[50px] whitespace-nowrap text-center text-gray-600 rounded-full"
      >
        My Projects
      </h1>
      
        {/* Add your images or content here */}
        <div className=" w-[100%] py-10 pt-48 ">
      <div className=" mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:mx-12 md:grid-cols-2 md:mx-[70px] rounded-sm lg:grid-cols-2 gap-6  xl:mx-[230px]">
          {/* Map through the projects array loaded from JSON */}
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              imageLink={project.imageLink}
              sourceCodeLink={project.sourceCodeLink}
            />
          ))}
        </div>
  
    </div>
      </div>
    </div>
  );
};

export default Projects;
