import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "./Card";
import projects from "../projects.json";

gsap.registerPlugin(ScrollTrigger);

const Projects = ({ id }) => {
  useEffect(() => {
    // Animate the heading text
    gsap.to("#page2 #movingText", {
      x: "-160%",
      scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 0%",
        end: "top -40%",
        scrub: 2,
        pin: true,
      },
    });

    // Timeline for scaling in images
    const tl = gsap.timeline({ paused: true });
    gsap.set(".child-img", { scale: 0 });

    gsap.utils.toArray(".child-img").forEach((img) => {
      tl.to(
        img,
        {
          scale: 1,
          duration: 0.5,
        },
        "-=0.2"
      );
    });

    ScrollTrigger.create({
      trigger: "#page2",
      scroller: "body",
      start: "top 0%",
      onEnter: () => tl.play(),
      invalidateOnRefresh: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, []);

  return (
    <div  id={id}
      className="min-h-screen w-screen z-10 text-gray-300 text-6xl relative"
     
    >
      {/* Moving text heading */}
      <h1
        id="movingText"
        className="lg:text-[120px] text-[100px] top-2 anton-regular
         absolute xl:left-[900px] left-[50px] whitespace-nowrap
          text-center text-gray-300 rounded-full"
      >
        My Projects
      </h1>

  
      <div className="w-full pt-[200px] py-10">
        <div className="mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-1 sm:mx-12 md:grid-cols-2 md:mx-[70px] rounded-sm lg:grid-cols-2 gap-6 xl:mx-[230px]">
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
